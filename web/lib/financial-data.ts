export type SourceRef = {
  title: string
  url: string
  page: string
  lines: string
}

export type BudgetSummaryRow = {
  fundCode: string
  fund: string
  appropriations2026: number
  estimatedRevenues2026: number
  appropriatedFundBalance2026: number
  taxLevy2026: number
  source: SourceRef
}

export const adoptedBudget2026Summary: BudgetSummaryRow[] = [
  { fundCode: 'A01', fund: 'General Fund', appropriations2026: 69113159, estimatedRevenues2026: 14998550, appropriatedFundBalance2026: 1250000, taxLevy2026: 52864609, source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L131' } },
  { fundCode: 'DA1', fund: 'Highway Fund', appropriations2026: 7919250, estimatedRevenues2026: 498700, appropriatedFundBalance2026: 0, taxLevy2026: 7420550, source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L137' } },
  { fundCode: 'ES1', fund: 'Riverhead Sewer District', appropriations2026: 8142722, estimatedRevenues2026: 5426413, appropriatedFundBalance2026: 2150000, taxLevy2026: 566309, source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L138' } },
  { fundCode: 'EW1', fund: 'Water District', appropriations2026: 11008655, estimatedRevenues2026: 7616177, appropriatedFundBalance2026: 1850000, taxLevy2026: 1542478, source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L141' } },
  { fundCode: 'V01', fund: 'Debt Service Fund', appropriations2026: 6888150, estimatedRevenues2026: 6888150, appropriatedFundBalance2026: 0, taxLevy2026: 0, source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L148' } },
  { fundCode: 'TOTAL', fund: 'Total Town Operating', appropriations2026: 121110904, estimatedRevenues2026: 49771965, appropriatedFundBalance2026: 5995000, taxLevy2026: 65343939, source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L150' } }
]

export const townWideComparison2026 = {
  appropriations2026: 77958942,
  appropriations2025: 73529029,
  dollarChange: 4429913,
  percentChange: 6.02,
  taxLevy2026: 61178292,
  taxLevy2025: 56783579,
  taxLevyDollarChange: 4394713,
  taxLevyPercentChange: 7.74,
  rate2026: 71.598,
  rate2025: 67.031,
  rateDollarChange: 4.567,
  ratePercentChange: 6.81,
  source: { title: '2026 Adopted Budget', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget', page: 'Summary p. 3', lines: 'L159-L183' }
}

export const auditedFundBalances2024 = [
  { fund: 'General Fund', totalFundBalance: 28403924, source: { title: '2024 Audited Basic Financial Statements', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2858/2024-Audited-Basic-Financial-Statements-PDF', page: 'Management Discussion and Analysis p. 19', lines: 'L612-L619' } },
  { fund: 'Highway Fund', totalFundBalance: 5399934, source: { title: '2024 Audited Basic Financial Statements', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2858/2024-Audited-Basic-Financial-Statements-PDF', page: 'Management Discussion and Analysis p. 20', lines: 'L647-L650' } },
  { fund: 'Capital Projects Fund', totalFundBalance: 374773, source: { title: '2024 Audited Basic Financial Statements', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2858/2024-Audited-Basic-Financial-Statements-PDF', page: 'Management Discussion and Analysis p. 20', lines: 'L664-L668' } },
  { fund: 'Community Preservation Fund', totalFundBalance: 25595093, source: { title: '2024 Audited Basic Financial Statements', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2858/2024-Audited-Basic-Financial-Statements-PDF', page: 'Management Discussion and Analysis p. 21', lines: 'L674-L677' } },
  { fund: 'Governmental Funds Total', totalFundBalance: 67183569, source: { title: '2024 Audited Basic Financial Statements', url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2858/2024-Audited-Basic-Financial-Statements-PDF', page: 'Governmental Funds Balance Sheet p. 29', lines: 'L994-L1007' } }
]

export const earlyRetirementFiscalEvent = {
  date: 'May 26, 2026',
  title: 'Early Retirement Initiative',
  sourceClaim: 'Potential tax savings of up to 3 percent beginning in 2027',
  validationStatus: 'Unvalidated pending payroll, eligibility, leave payout, incentive, replacement, and overtime backfill data',
  coveredGroups: ['CSEA', 'PBA', 'SOA'],
}

export function dollars(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
}
