#!/usr/bin/env python3
"""Parse Town of Riverhead financial report PDFs into structured JSON.

This script crawls the official Financial Reports index, downloads every linked
PDF-style document it can resolve, extracts page text, identifies money figures,
classifies document type/year, and writes machine-readable JSON files that the
web app can consume.

Outputs:
  web/public/data/financial-reports/index.json
  web/public/data/financial-reports/documents/<slug>.json

Run:
  python etl/parse_financial_reports.py
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader

INDEX_URL = "https://www.townofriverheadny.gov/206/Financial-Reports"
ROOT = Path(__file__).resolve().parents[1]
DATA_ROOT = ROOT / "web" / "public" / "data" / "financial-reports"
DOC_ROOT = DATA_ROOT / "documents"
CACHE_ROOT = ROOT / ".cache" / "financial-reports"

MONEY_RE = re.compile(r"\$?\(?\d{1,3}(?:,\d{3})+(?:\.\d{2})?\)?")
YEAR_RE = re.compile(r"\b(20\d{2})\b")

@dataclass
class ReportLink:
    title: str
    url: str
    year: int | None
    category: str
    slug: str

@dataclass
class ParsedPage:
    page: int
    text: str
    money_values: list[str]
    line_count: int

@dataclass
class ParsedReport:
    title: str
    url: str
    year: int | None
    category: str
    slug: str
    sha256: str
    page_count: int
    money_value_count: int
    pages: list[ParsedPage]
    extraction_notes: list[str]


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value[:120]


def classify(title: str) -> str:
    lower = title.lower()
    if "adopted budget" in lower or "final budget" in lower:
        return "adopted_budget"
    if "tentative budget" in lower:
        return "tentative_budget"
    if "preliminary budget" in lower:
        return "preliminary_budget"
    if "budget supplement" in lower:
        return "budget_supplement"
    if "annual financial report" in lower:
        return "annual_financial_report"
    if "audited basic financial" in lower or "audited financial" in lower:
        return "audited_financial_statements"
    if "justice court" in lower:
        return "justice_court"
    if "community preservation" in lower or "peconic bay" in lower:
        return "community_preservation_fund"
    if "single audit" in lower:
        return "single_audit"
    return "other"


def discover_links() -> list[ReportLink]:
    response = requests.get(INDEX_URL, timeout=30)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    links: list[ReportLink] = []
    seen: set[str] = set()

    for anchor in soup.find_all("a"):
        text = " ".join(anchor.get_text(" ", strip=True).split())
        href = anchor.get("href")
        if not text or not href:
            continue
        if not re.search(r"20\d{2}|Financial Report|Budget|Audit|Justice Court|Community Preservation", text, re.I):
            continue
        absolute = urljoin(INDEX_URL, href)
        if "DocumentCenter" not in absolute and not absolute.lower().endswith(".pdf"):
            continue
        key = absolute.split("?")[0]
        if key in seen:
            continue
        seen.add(key)
        year_match = YEAR_RE.search(text)
        year = int(year_match.group(1)) if year_match else None
        slug = slugify(f"{year or 'unknown'}-{text}")
        links.append(ReportLink(title=text, url=absolute, year=year, category=classify(text), slug=slug))

    return sorted(links, key=lambda item: ((item.year or 0), item.title), reverse=True)


def download(link: ReportLink) -> Path:
    CACHE_ROOT.mkdir(parents=True, exist_ok=True)
    target = CACHE_ROOT / f"{link.slug}.pdf"
    if target.exists() and target.stat().st_size > 0:
        return target
    response = requests.get(link.url, timeout=90)
    response.raise_for_status()
    content_type = response.headers.get("content-type", "")
    if "pdf" not in content_type.lower() and not response.content.startswith(b"%PDF"):
        raise ValueError(f"Not a PDF response: {link.url} content-type={content_type}")
    target.write_bytes(response.content)
    return target


def file_hash(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def parse_pdf(link: ReportLink, path: Path) -> ParsedReport:
    reader = PdfReader(str(path))
    pages: list[ParsedPage] = []
    notes: list[str] = []
    total_money = 0

    for index, page in enumerate(reader.pages, start=1):
        try:
            text = page.extract_text() or ""
        except Exception as exc:  # pragma: no cover - defensive ETL
            text = ""
            notes.append(f"Page {index}: text extraction failed: {exc}")
        text = "\n".join(line.rstrip() for line in text.splitlines() if line.strip())
        money_values = MONEY_RE.findall(text)
        total_money += len(money_values)
        pages.append(ParsedPage(page=index, text=text, money_values=money_values[:250], line_count=len(text.splitlines())))

    if not pages:
        notes.append("No pages extracted.")
    if total_money == 0:
        notes.append("No money values detected; document may be scanned or require OCR/table extraction.")

    return ParsedReport(
        title=link.title,
        url=link.url,
        year=link.year,
        category=link.category,
        slug=link.slug,
        sha256=file_hash(path),
        page_count=len(pages),
        money_value_count=total_money,
        pages=pages,
        extraction_notes=notes,
    )


def write_json(path: Path, payload: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")


def main() -> int:
    DOC_ROOT.mkdir(parents=True, exist_ok=True)
    links = discover_links()
    parsed_index: list[dict] = []
    failures: list[dict] = []

    for link in links:
      try:
        pdf_path = download(link)
        parsed = parse_pdf(link, pdf_path)
        write_json(DOC_ROOT / f"{link.slug}.json", asdict(parsed))
        parsed_index.append({
            "title": link.title,
            "url": link.url,
            "year": link.year,
            "category": link.category,
            "slug": link.slug,
            "json": f"documents/{link.slug}.json",
            "page_count": parsed.page_count,
            "money_value_count": parsed.money_value_count,
            "sha256": parsed.sha256,
            "notes": parsed.extraction_notes,
        })
        print(f"parsed {link.title} ({parsed.page_count} pages)")
      except Exception as exc:
        failures.append({"title": link.title, "url": link.url, "error": str(exc)})
        print(f"failed {link.title}: {exc}", file=sys.stderr)

    write_json(DATA_ROOT / "index.json", {
        "source_index": INDEX_URL,
        "document_count": len(parsed_index),
        "failure_count": len(failures),
        "documents": parsed_index,
        "failures": failures,
    })
    return 0 if parsed_index else 1


if __name__ == "__main__":
    raise SystemExit(main())
