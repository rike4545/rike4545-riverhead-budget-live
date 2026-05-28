export type FinancialReportArchiveItem = {
  year: number
  title: string
  category: 'budget' | 'audit' | 'afr' | 'justice_court' | 'cpf' | 'supplement' | 'other'
  sourceIndex: string
}

export const financialReportsArchive: FinancialReportArchiveItem[] = [
  { year: 2026, title: '2026 Adopted Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2026, title: '2026 Preliminary Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2026, title: '2026 Tentative Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2026, title: '2026 Budget Supplement', category: 'supplement', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2025, title: '2025 Annual Financial Report', category: 'afr', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2025, title: '2025 Adopted Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2025, title: '2025 Tentative Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2025, title: '2025 Budget Supplement', category: 'supplement', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Adopted Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Tentative Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Budget Supplement', category: 'supplement', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Audited Basic Financial Statements', category: 'audit', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Justice Court Statement of Cash Receipts and Cash Disbursements', category: 'justice_court', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Peconic Bay Community Preservation Fund Financial Statements', category: 'cpf', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2024, title: '2024 Annual Financial Report Update', category: 'afr', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2023, title: '2023 Adopted Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2023, title: '2023 Audited Basic Financial Statement', category: 'audit', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2023, title: '2023 Justice Court Statement of Cash Receipts and Cash Disbursements', category: 'justice_court', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2023, title: '2023 Peconic Bay Community Preservation Fund Financial Statements', category: 'cpf', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2023, title: '2023 Annual Financial Report Update', category: 'afr', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2022, title: '2022 Adopted Budget', category: 'budget', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2022, title: '2022 Audited Basic Financial Statement', category: 'audit', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' },
  { year: 2022, title: '2022 Annual Financial Report Update', category: 'afr', sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports' }
]

export const archiveStats = {
  indexedItems: financialReportsArchive.length,
  yearsCovered: Array.from(new Set(financialReportsArchive.map((item) => item.year))).length,
  sourceIndex: 'https://www.townofriverheadny.gov/206/Financial-Reports'
}
