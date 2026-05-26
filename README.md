# Riverhead Budget Live

A living municipal fiscal intelligence platform for the Town of Riverhead, NY.

## Product goal

Riverhead Budget Live turns annual budget PDFs and related public finance documents into a public-facing civic intelligence portal with KPIs, historical comparisons, budget variance analysis, debt modeling, capital project tracking, and BudgetGuard AI validation.

## MVP modules

- Executive fiscal dashboard
- KPI and fiscal health engine
- Historical budget comparison
- Budget variance / diff engine
- Fiscal risk monitor
- Debt and BAN simulator
- Capital projects overview
- BudgetGuard AI agent status console

## Safety and trust guardrails

- Official adopted figures are immutable snapshots.
- AI can flag, explain, reconcile, and recommend.
- AI cannot silently alter official numbers.
- Every AI-generated claim should eventually include a source, timestamp, calculation, and confidence score.

## Local development

```bash
cd web
npm install
npm run dev
```

## Repository layout

```text
web/        Next.js public dashboard
supabase/   Database schema and migrations
etl/        Budget document ingestion and normalization pipeline
ai/         BudgetGuard agent definitions, rules, and prompts
docs/       Architecture and data documentation
```
