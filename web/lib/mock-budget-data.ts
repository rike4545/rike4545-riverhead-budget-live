export type BudgetYear = {
  year: number
  totalBudget: number
  taxLevy: number
  payroll: number
  benefits: number
  debtService: number
  fundBalanceRatio: number
}

export const budgetHistory: BudgetYear[] = [
  { year: 2020, totalBudget: 103200000, taxLevy: 55200000, payroll: 35800000, benefits: 18200000, debtService: 7100000, fundBalanceRatio: 18.1 },
  { year: 2021, totalBudget: 106800000, taxLevy: 57100000, payroll: 37100000, benefits: 19000000, debtService: 7350000, fundBalanceRatio: 19.4 },
  { year: 2022, totalBudget: 110400000, taxLevy: 59200000, payroll: 38600000, benefits: 19900000, debtService: 7620000, fundBalanceRatio: 21.2 },
  { year: 2023, totalBudget: 114900000, taxLevy: 61500000, payroll: 40300000, benefits: 21000000, debtService: 8010000, fundBalanceRatio: 22.7 },
  { year: 2024, totalBudget: 118300000, taxLevy: 63600000, payroll: 42100000, benefits: 22400000, debtService: 8380000, fundBalanceRatio: 23.1 },
  { year: 2025, totalBudget: 121100000, taxLevy: 65300000, payroll: 43900000, benefits: 23600000, debtService: 8730000, fundBalanceRatio: 23.4 }
]

export const budgetChanges = [
  { area: 'Police overtime', change: 18.3, note: 'Recurring pressure if not offset by staffing or scheduling changes.' },
  { area: 'Healthcare benefits', change: 9.2, note: 'Benefit growth exceeds general budget growth.' },
  { area: 'Debt service', change: 14.4, note: 'BAN conversion and capital timing should be monitored.' },
  { area: 'Highway materials', change: 11.7, note: 'Weather and procurement volatility risk.' }
]

export const capitalProjects = [
  { name: 'Town Square', cost: 2625000, status: 'Modeling', funding: 'BAN / possible long term debt' },
  { name: 'Drainage improvements', cost: 1400000, status: 'Planning', funding: 'Capital and grants' },
  { name: 'Road resurfacing', cost: 2100000, status: 'Ongoing', funding: 'Capital program' }
]
