import { adoptedBudget2026Summary, auditedFundBalances2024, dollars, earlyRetirementFiscalEvent, townWideComparison2026 } from '../lib/financial-data'
import { archiveStats, financialReportsArchive } from '../lib/financial-reports-archive'
import { sourceDocuments } from '../lib/source-documents'
import { auditAfrClarity, fundBalanceCommentary, narrativeInsights, pressureIndicators } from '../lib/intelligence'

const navItems = [
  ['Overview', '#overview'],
  ['Insights', '#insights'],
  ['Pressure', '#pressure'],
  ['2026 Budget', '#budget-2026'],
  ['2024 Audit', '#audit-2024'],
  ['Historical Archive', '#historical-archive'],
  ['Fiscal Events', '#fiscal-events'],
  ['Sources', '#sources'],
  ['Disclaimers', '#disclaimers'],
]

const card = { background: 'white', border: '1px solid #e2e8f0', borderRadius: 20, padding: 22, boxShadow: '0 14px 30px rgba(15,23,42,.05)' } as const
const mini = { background: '#f8fafc', borderRadius: 12, padding: 10 } as const

function statusColor(status: string) {
  if (status === 'risk') return '#dc2626'
  if (status === 'watch') return '#ca8a04'
  if (status === 'positive') return '#16a34a'
  return '#2563eb'
}

export default function InteractiveDashboard() {
  const extractedDataPoints = adoptedBudget2026Summary.length * 4 + auditedFundBalances2024.length
  const years = Array.from(new Set(financialReportsArchive.map((item) => item.year))).sort((a, b) => b - a)

  return (
    <main style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '280px 1fr', fontFamily: 'Arial, sans-serif', background: 'linear-gradient(135deg,#f8fafc,#eef6ff)', color: '#0f172a' }}>
      <aside style={{ position: 'sticky', top: 0, alignSelf: 'start', background: 'linear-gradient(180deg,#061a32,#082846 55%,#03111f)', color: 'white', padding: 24, minHeight: '100vh' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: '#dbeafe', color: '#0f172a', display: 'grid', placeItems: 'center', fontWeight: 900 }}>RB</div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>Riverhead<br />Budget Live</div>
            <div style={{ fontSize: 12, color: '#bfdbfe', marginTop: 4 }}>Fiscal Intelligence Platform</div>
          </div>
        </div>

        <div style={{ marginTop: 18, padding: 12, borderRadius: 12, background: 'rgba(220,38,38,.18)', border: '1px solid rgba(252,165,165,.35)', fontSize: 12, lineHeight: 1.5 }}>
          <strong>Unofficial Resource</strong>
          <div style={{ marginTop: 6 }}>
            This website is not an official Town of Riverhead website and is not affiliated with, endorsed by, or operated by the Town of Riverhead.
          </div>
        </div>

        <nav style={{ marginTop: 36, display: 'grid', gap: 8 }}>
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} style={{ color: 'white', textDecoration: 'none', padding: '13px 14px', borderRadius: 12, background: index === 0 ? 'rgba(37,99,235,.65)' : 'rgba(255,255,255,.04)', border: '1px solid rgba(147,197,253,.18)', fontWeight: 700 }}>
              {label}
            </a>
          ))}
        </nav>

        <section style={{ marginTop: 38, border: '1px solid rgba(147,197,253,.35)', borderRadius: 16, padding: 16, background: 'rgba(15,23,42,.35)' }}>
          <strong>Historical Coverage</strong>
          <p style={{ color: '#bfdbfe', fontSize: 14, lineHeight: 1.5 }}>{archiveStats.indexedItems} official records across {archiveStats.yearsCovered} years.</p>
        </section>
      </aside>

      <section style={{ padding: 34, scrollBehavior: 'smooth' }}>
        <header id="overview" style={{ scrollMarginTop: 24, display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'flex-start' }}>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: 3, fontSize: 13, color: '#2563eb', fontWeight: 900 }}>Riverhead Budget Live</p>
            <h1 style={{ fontSize: 42, lineHeight: 1.05, margin: '8px 0' }}>Source-backed municipal fiscal intelligence</h1>
            <p style={{ fontSize: 17, maxWidth: 840, color: '#475569', marginTop: 10 }}>A public budget and financial statement explorer using official Town of Riverhead documents, plain-English insights, and source traceability.</p>
          </div>
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 999, padding: '10px 14px', boxShadow: '0 12px 30px rgba(15,23,42,.06)', whiteSpace: 'nowrap' }}>Source-first mode</div>
        </header>

        <section id="disclaimers" style={{ ...card, scrollMarginTop: 24, marginTop: 22, borderLeft: '8px solid #dc2626', background: '#fff7f7' }}>
          <h2 style={{ marginTop: 0, color: '#991b1b' }}>Important Disclaimers</h2>
          <p>
            This website is an independent public-information and fiscal-analysis project. It is not an official Town of Riverhead website and is not affiliated with, endorsed by, sponsored by, or operated by the Town of Riverhead or any Town department.
          </p>
          <p>
            Financial information is derived from publicly available budgets, annual financial reports, audits, supplements, and other source documents. Parsed data, extracted values, AI-generated explanations, projections, summaries, classifications, and trend analyses may contain errors, omissions, interpretation differences, extraction issues, OCR limitations, or timing mismatches.
          </p>
          <p>
            Users should verify all financial figures, assumptions, and interpretations against the original official source documents before making policy, financial, legal, journalistic, political, operational, or investment decisions.
          </p>
          <p>
            Narrative explanations, risk indicators, levy modeling, retirement-program assessments, taxpayer-impact scenarios, and surplus-allocation scenarios are analytical interpretations and not official Town statements, actuarial opinions, legal advice, accounting advice, or audited conclusions.
          </p>
        </section>
      </section>
    </main>
  )
}
