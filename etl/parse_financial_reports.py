#!/usr/bin/env python3
"""Legacy parser entry point.

This file is intentionally kept because older GitHub Actions workflow runs or
manual commands may still call:

    python etl/parse_financial_reports.py

The implementation now delegates to the resilient ingestion wrapper so a missing
or temporarily unavailable Town source page does not fail the public site build.
"""
from __future__ import annotations

from run_ingestion_safe import main

if __name__ == '__main__':
    raise SystemExit(main())
