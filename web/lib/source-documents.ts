export type SourceDocument = {
  year: number
  title: string
  kind: 'audit' | 'afr' | 'adopted_budget' | 'source_index' | 'press_release'
  url?: string
  status: 'registered' | 'pending_parse' | 'parsed_summary'
  notes: string
}

export const sourceDocuments: SourceDocument[] = [
  {
    year: 2026,
    title: 'Town of Riverhead 2026 Adopted Budget',
    kind: 'adopted_budget',
    url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2967/2026-Adopted-Budget',
    status: 'pending_parse',
    notes: 'Official adopted budget source. No figures displayed until extracted and traced.'
  },
  {
    year: 2025,
    title: 'Town of Riverhead 2025 Annual Financial Report',
    kind: 'afr',
    url: 'https://www.townofriverheadny.gov/DocumentCenter/View/3513/2025-Annual-Financial-Report',
    status: 'pending_parse',
    notes: 'Official AFR source pending structured extraction.'
  },
  {
    year: 2024,
    title: 'Town of Riverhead 2024 Audited Basic Financial Statements',
    kind: 'audit',
    url: 'https://www.townofriverheadny.gov/DocumentCenter/View/2858/2024-Audited-Basic-Financial-Statements-PDF',
    status: 'pending_parse',
    notes: 'Official audited statements pending structured extraction.'
  },
  {
    year: 2026,
    title: 'Town of Riverhead Financial Reports Index',
    kind: 'source_index',
    url: 'https://www.townofriverheadny.gov/206/Financial-Reports',
    status: 'registered',
    notes: 'Official source index for budget and financial report discovery.'
  },
  {
    year: 2026,
    title: 'Supervisor Early Retirement Initiative Press Release',
    kind: 'press_release',
    status: 'registered',
    notes: 'Uploaded source image states a claimed savings of up to 3 percent beginning in 2027. Claim is unvalidated until payroll and eligibility data are ingested.'
  }
]
