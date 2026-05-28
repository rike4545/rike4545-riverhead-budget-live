import { adoptedBudget2026Summary, dollars } from './financial-data'

export type DepartmentDrilldown = {
  id: string
  name: string
  fundCode: string
  documentStatus: 'extracted_fund_level' | 'pending_department_line_items'
  appropriation: number
  estimatedRevenues: number
  appropriatedFundBalance: number
  taxLevy: number
  explanation: string
  residentQuestion: string
  nextDataNeeded: string[]
  source: string
}

export const departmentDrilldowns: DepartmentDrilldown[] = adoptedBudget2026Summary
  .filter((row) => row.fundCode !== 'TOTAL')
  .map((row) => ({
    id: row.fundCode.toLowerCase(),
    name: row.fund,
    fundCode: row.fundCode,
    documentStatus: 'extracted_fund_level',
    appropriation: row.appropriations2026,
    estimatedRevenues: row.estimatedRevenues2026,
    appropriatedFundBalance: row.appropriatedFundBalance2026,
    taxLevy: row.taxLevy2026,
    explanation: `${row.fund} has 2026 appropriations of ${dollars(row.appropriations2026)}. The extracted financing mix includes ${dollars(row.estimatedRevenues2026)} in estimated revenues, ${dollars(row.appropriatedFundBalance2026)} in appropriated fund balance, and ${dollars(row.taxLevy2026)} in tax levy.`,
    residentQuestion: `How much of ${row.fund} is supported by recurring revenues, fund balance, or tax levy?`,
    nextDataNeeded: ['department line items', 'salary detail', 'contractual expenses', 'equipment/capital entries', 'prior-year actuals'],
    source: `${row.source.title} • ${row.source.page}`,
  }))

export const afr2025ExtractionTargets = [
  {
    title: 'Fund balance by fund',
    whyItMatters: 'Shows whether reserves grew or declined after the 2025 fiscal year and provides the bridge from the 2024 audit to the 2026 adopted budget.',
    status: 'pending extraction from 2025 AFR',
  },
  {
    title: 'Revenues and other financing sources',
    whyItMatters: 'Shows whether the Town relied more on taxes, charges, state aid, interfund transfers, or one-time sources.',
    status: 'pending extraction from 2025 AFR',
  },
  {
    title: 'Expenditures by functional category',
    whyItMatters: 'Shows where spending pressure actually occurred during 2025, not just what was budgeted for 2026.',
    status: 'pending extraction from 2025 AFR',
  },
  {
    title: 'Debt and capital activity',
    whyItMatters: 'Connects debt service, BAN exposure, and capital projects to future taxpayer pressure.',
    status: 'pending extraction from 2025 AFR',
  },
  {
    title: 'Water and sewer fund activity',
    whyItMatters: 'Enterprise fund movement can show cost shifts that are not visible in the General Fund alone.',
    status: 'pending extraction from 2025 AFR',
  },
]
