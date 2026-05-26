create table budgets (
  id uuid primary key,
  fiscal_year integer not null,
  adopted_total numeric,
  tax_levy numeric,
  fund_balance_ratio numeric,
  created_at timestamp default now()
);

create table ai_audit_log (
  id uuid primary key,
  agent_name text not null,
  event_type text not null,
  confidence numeric,
  created_at timestamp default now()
);
