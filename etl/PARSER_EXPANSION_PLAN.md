# Parser Expansion Plan

This plan is the adopted ETL contract for expanding Riverhead Budget Live from fund-level summaries into account-level, department-level, and source-cited municipal fiscal intelligence.

## Step 1 — Account-Level Extraction

Extract from each budget and financial report PDF:

- fund code
- department code
- account code
- account title
- account category
- adopted amount
- tentative/preliminary amount where available
- actual amount where available
- page/source reference
- raw extracted row text

### Output

```text
web/public/data/financial-reports/line_items.json
```

### Purpose

This powers:

- searchable line items
- department drilldowns
- year-over-year account comparisons
- budget vs actual comparisons
- source-backed AI explanations

---

## Step 2 — Payroll / Overtime Extraction

Classify labor-related account lines into:

- salaries
- overtime
- part-time / seasonal payroll
- longevity / differential pay
- health insurance
- retirement / pension
- workers compensation
- payroll taxes
- other employee benefits

### Output

```text
web/public/data/financial-reports/labor_accounts.json
```

### Purpose

This powers:

- payroll pressure indicators
- overtime analytics
- retirement incentive exposure analysis
- department staffing intelligence
- labor share of budget analysis

---

## Step 3 — Department Normalization

Create a normalized department map across documents and fiscal years:

- normalized department name
- source document department name
- fund code
- department code
- function/category
- service area
- aliases / renamed departments
- comparable prior-year department name
- notes on comparability limits

### Output

```text
web/public/data/financial-reports/departments.json
```

### Purpose

This powers:

- department explorer
- operational category comparisons
- department vs prior-year comparisons
- account-level drilldowns
- trend normalization

---

## Step 4 — Page Citation Extraction

Every extracted row must include source traceability:

- source document title
- source document URL
- page number
- raw source text snippet
- extraction confidence
- parser timestamp
- document hash
- quote / source-text trace

### Output

```text
web/public/data/financial-reports/citations.json
```

### Purpose

This powers:

- AI citation system
- quote traceability
- confidence scoring
- show-source panels
- reconciliation audit trail
- public verification

---

# Required Parser Expansion Outcomes

The expanded parser must support:

- full department/account parsing
- searchable line items
- payroll/overtime parsing
- account classification
- department normalization
- page-level citations
- extraction confidence scoring
- quote traceability
- budget vs AFR vs audit reconciliation
- reserve/debt/payroll trend extraction

# Implementation Rule

No extracted financial figure should be shown in the public dashboard unless it includes:

1. source document
2. page reference
3. raw text context or source row
4. extraction timestamp
5. confidence / validation status

This preserves the source-first, no-mock-data standard of the project.
