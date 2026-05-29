import extractionReport from '../public/data/financial-reports/index.json'
import searchIndex from '../public/data/financial-reports/search-index.json'
import citationsIndex from '../public/data/financial-reports/citations.json'
import lineItemIndex from '../public/data/financial-reports/line-item-candidates.json'

export type ParsedDocument = {
  title: string
  url: string
  year: number | null
  category: string
  slug: string
  json?: string | null
  page_count: number
  money_value_count: number
  sha256?: string | null
  parsed_at: string
  status?: string
}

export type ParsedSearchRecord = {
  id: string
  document: string
  slug: string
  year: number | null
  category: string
  page: number
  url: string
  text?: string
  snippet: string
  money_values?: string[]
  confidence: string
  parsed_at: string
}

export type CitationRecord = {
  id: string
  document: string
  url: string
  page: number
  snippet: string
  confidence: string
  sha256?: string | null
  parsed_at: string
}

export type LineItemCandidate = {
  id: string
  document: string
  slug: string
  year: number | null
  category: string
  page: number
  line_number: number
  raw_text: string
  account_code_candidate?: string | null
  amounts: string[]
  confidence: string
  source_url: string
  parsed_at: string
}

export const parserExtractionReport = extractionReport as {
  source_index: string
  parsed_at: string
  document_count: number
  audit_document_count?: number
  failure_count: number
  page_record_count: number
  citation_count: number
  line_item_candidate_count: number
  documents: ParsedDocument[]
  failures: Array<{ title: string; url: string; error: string }>
  warning?: string
}

export const parsedSearchRecords = (searchIndex as { records: ParsedSearchRecord[] }).records ?? []
export const parsedCitations = (citationsIndex as { records: CitationRecord[] }).records ?? []
export const parsedLineItemCandidates = (lineItemIndex as { records: LineItemCandidate[] }).records ?? []

export const latestBudgetDocument =
  parserExtractionReport.documents.find((doc) => doc.category === 'adopted_budget' && doc.year === 2026) ??
  parserExtractionReport.documents.find((doc) => doc.category === 'adopted_budget') ??
  null

export const parserDatasetStats = {
  parsedAt: parserExtractionReport.parsed_at,
  documents: parserExtractionReport.document_count,
  audits: parserExtractionReport.audit_document_count ?? parserExtractionReport.documents.filter((doc) => doc.category === 'audit').length,
  pages: parserExtractionReport.page_record_count,
  citations: parserExtractionReport.citation_count,
  lineItems: parserExtractionReport.line_item_candidate_count,
  failures: parserExtractionReport.failure_count,
}
