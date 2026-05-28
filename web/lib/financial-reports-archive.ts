export type FinancialReportArchiveItem = {
  year: number
  title: string
  category: 'budget' | 'audit' | 'afr' | 'justice_court' | 'cpf' | 'supplement' | 'other'
  sourceIndex: string
  summary?: string
  url?: string
}

const sourceIndex = 'https://www.townofriverheadny.gov/206/Financial-Reports'

function summaryFor(category: FinancialReportArchiveItem['category']) {
  switch (category) {
    case 'budget':
      return 'Budget document used to understand appropriations, estimated revenues, levy support, fund balance usage, and spending priorities.'
    case 'audit':
      return 'Audited financial statement used to compare reported results, balances, liabilities, and financial position.'
    case 'afr':
      return 'Annual Financial Report used for actual results, fund activity, reserve movement, and cross-year fiscal comparison.'
    case 'justice_court':
      return 'Justice Court cash receipt and disbursement report used for public financial transparency.'
    case 'cpf':
      return 'Community Preservation Fund financial statement used to evaluate dedicated land preservation resources.'
    case 'supplement':
      return 'Supplemental budget material used to understand supporting assumptions and budget context.'
    default:
      return 'Public financial record used as source material for the platform.'
  }
}

function item(year: number, title: string, category: FinancialReportArchiveItem['category']): FinancialReportArchiveItem {
  return { year, title, category, sourceIndex, url: sourceIndex, summary: summaryFor(category) }
}

export const financialReportsArchive: FinancialReportArchiveItem[] = [
  item(2026, '2026 Adopted Budget', 'budget'),
  item(2026, '2026 Preliminary Budget', 'budget'),
  item(2026, '2026 Tentative Budget', 'budget'),
  item(2026, '2026 Budget Supplement', 'supplement'),
  item(2025, '2025 Annual Financial Report', 'afr'),
  item(2025, '2025 Adopted Budget', 'budget'),
  item(2025, '2025 Tentative Budget', 'budget'),
  item(2025, '2025 Budget Supplement', 'supplement'),
  item(2024, '2024 Adopted Budget', 'budget'),
  item(2024, '2024 Tentative Budget', 'budget'),
  item(2024, '2024 Budget Supplement', 'supplement'),
  item(2024, '2024 Audited Basic Financial Statements', 'audit'),
  item(2024, '2024 Justice Court Statement of Cash Receipts and Cash Disbursements', 'justice_court'),
  item(2024, '2024 Peconic Bay Community Preservation Fund Financial Statements', 'cpf'),
  item(2024, '2024 Annual Financial Report Update', 'afr'),
  item(2023, '2023 Adopted Budget', 'budget'),
  item(2023, '2023 Audited Basic Financial Statement', 'audit'),
  item(2023, '2023 Justice Court Statement of Cash Receipts and Cash Disbursements', 'justice_court'),
  item(2023, '2023 Peconic Bay Community Preservation Fund Financial Statements', 'cpf'),
  item(2023, '2023 Annual Financial Report Update', 'afr'),
  item(2022, '2022 Adopted Budget', 'budget'),
  item(2022, '2022 Audited Basic Financial Statement', 'audit'),
  item(2022, '2022 Annual Financial Report Update', 'afr'),
]

export const archiveStats = {
  indexedItems: financialReportsArchive.length,
  yearsCovered: Array.from(new Set(financialReportsArchive.map((item) => item.year))).length,
  sourceIndex
}
