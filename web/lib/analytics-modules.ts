import { allOperatingFunds2026, fundBalanceUseSummary } from './all-funds'
import { dollars, townWideComparison2026 } from './financial-data'

export type AnalyticsModule = {
  name: string
  status: 'active' | 'needs_parsed_data' | 'partial'
  description: string
  sourceBasis: string
  nextStep: string
}

export const analyticsModules: AnalyticsModule[] = [
  {
    name: 'Searchable line items',
    status: 'partial',
    description: 'Indexes extracted fund, department, page text, and monetary values so residents can search budget terms, funds, and source documents.',
    sourceBasis: '2026 Adopted Budget extracted fund data plus parsed financial report JSON pipeline.',
    nextStep: 'Bind search UI to web/public/data/financial-reports/index.json once parser artifact is committed or published.',
  },
  {
    name: 'AI-driven explanations',
    status: 'active',
    description: 'Turns financial entries into plain-English explanations with what changed, why it matters, and what data is still missing.',
    sourceBasis: 'Narrative intelligence, pressure indicators, retirement-risk analysis, and source registry.',
    nextStep: 'Add citations from parsed document page text for every generated explanation.',
  },
  {
    name: 'Cross-document reconciliation',
    status: 'needs_parsed_data',
    description: 'Compares adopted budgets, AFR actuals, audited statements, and supplements for conflicts, gaps, and trend breaks.',
    sourceBasis: '2024 audit, 2025 AFR, 2026 adopted budget, and historical archive parser outputs.',
    nextStep: 'Parse and normalize 2025 AFR fund balances and revenue/expenditure schedules.',
  },
  {
    name: 'Trend extraction',
    status: 'partial',
    description: 'Prepares five-year views for levy, appropriations, fund balance, debt, revenues, and expenditures.',
    sourceBasis: 'Financial reports archive covering 2022 through 2026.',
    nextStep: 'Populate year-by-year normalized line-item tables from the parser.',
  },
  {
    name: 'Automated KPIs',
    status: 'active',
    description: 'Computes resident-facing indicators such as levy growth, reserve use, fund balance reliance, and budget composition.',
    sourceBasis: '2026 adopted budget summary and 2024 audited fund balances.',
    nextStep: 'Add 2025 AFR actuals for stronger budget-vs-actual KPIs.',
  },
  {
    name: 'Departmental comparisons',
    status: 'partial',
    description: 'Compares every currently extracted operating fund and prepares drilldowns for department-level line items.',
    sourceBasis: 'All 2026 operating funds and fund-balance schedule.',
    nextStep: 'Extract department/account rows under each fund from the full budget PDF.',
  },
  {
    name: 'Reserve tracking',
    status: 'active',
    description: 'Highlights appropriated fund balance use and estimated ending reserve/fund-balance position.',
    sourceBasis: '2026 adopted budget fund-balance schedule.',
    nextStep: 'Reconcile reserve balances with 2025 AFR and later 2025 audit when available.',
  },
  {
    name: 'Levy modeling',
    status: 'active',
    description: 'Models tax levy pressure, levy growth, stabilization scenarios, and fund-level levy dependency.',
    sourceBasis: '2026 adopted budget levy fields and surplus-stabilization scenario data.',
    nextStep: 'Add parcel/tax-base and assessed-value inputs for taxpayer-level estimates.',
  },
  {
    name: 'Debt analytics',
    status: 'needs_parsed_data',
    description: 'Will track debt service, BAN exposure, principal/interest schedules, and capital-financing dependency.',
    sourceBasis: 'Debt Service Fund plus audit/AFR debt schedules once parsed.',
    nextStep: 'Extract debt schedules from 2024 audit and 2025 AFR.',
  },
  {
    name: 'Payroll and overtime analytics',
    status: 'needs_parsed_data',
    description: 'Will track salary, overtime, benefits, and workforce pressure by department where source documents provide line items.',
    sourceBasis: 'Budget department/account lines and later payroll/overtime public records if added.',
    nextStep: 'Extract payroll and overtime accounts from budget department pages.',
  },
  {
    name: 'Source-backed AI summaries',
    status: 'partial',
    description: 'Summaries must cite document, page, and extraction source instead of unsupported model guesses.',
    sourceBasis: 'Source registry, financial data source refs, and parser output.',
    nextStep: 'Add page-level citations from parsed JSON to generated summaries.',
  },
]

export const automatedKpis = [
  {
    label: 'Town-wide levy growth',
    value: `${townWideComparison2026.taxLevyPercentChange}%`,
    explanation: `The town-wide levy increased by ${dollars(townWideComparison2026.taxLevyDollarChange)} from 2025 to 2026.`,
  },
  {
    label: 'Town-wide appropriation growth',
    value: `${townWideComparison2026.percentChange}%`,
    explanation: `Town-wide appropriations increased by ${dollars(townWideComparison2026.dollarChange)} from 2025 to 2026.`,
  },
  {
    label: 'Appropriated fund balance used',
    value: dollars(fundBalanceUseSummary.totalAppropriatedFundBalanceInSummary),
    explanation: 'This is reserve/fund-balance use in the adopted budget summary and should not be treated as recurring revenue.',
  },
  {
    label: 'Operating funds indexed',
    value: String(allOperatingFunds2026.length),
    explanation: 'Every extracted 2026 operating fund is now represented for fund-level drilldown and comparison.',
  },
]

export const comparisonDimensions = [
  'appropriations',
  'estimated revenues',
  'appropriated fund balance',
  'tax levy',
  'unaudited fund balance',
  'estimated ending fund balance',
  'document status',
]
