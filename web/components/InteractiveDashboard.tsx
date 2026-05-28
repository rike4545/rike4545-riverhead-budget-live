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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 14, marginTop: 24 }}>
          {[
            ['Archive indexed', archiveStats.indexedItems, `${archiveStats.yearsCovered} years covered`],
            ['Budget rows', adoptedBudget2026Summary.length, '2026 extracted funds'],
            ['Insights', narrativeInsights.length, 'Plain-English findings'],
            ['Pressure flags', pressureIndicators.length, 'Watch items'],
            ['2026 levy growth', `${townWideComparison2026.taxLevyPercentChange}%`, 'Town-wide tax levy change']
          ].map(([label, value, note]) => (
            <article key={String(label)} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 18, padding: 18, boxShadow: '0 14px 30px rgba(15,23,42,.06)' }}>
              <div style={{ color: '#64748b', textTransform: 'uppercase', fontSize: 11, fontWeight: 900 }}>{label}</div>
              <div style={{ fontSize: 34, fontWeight: 900, marginTop: 10 }}>{value}</div>
              <div style={{ color: '#64748b', fontSize: 13 }}>{note}</div>
            </article>
          ))}
        </div>

        <section id="insights" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Narrative Intelligence: What Changed?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {narrativeInsights.map((insight) => (
              <article key={insight.title} style={{ border: '1px solid #e2e8f0', borderLeft: `6px solid ${statusColor(insight.status)}`, borderRadius: 16, padding: 16, background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                  <strong>{insight.title}</strong>
                  <span style={{ color: statusColor(insight.status), fontWeight: 900, textTransform: 'uppercase', fontSize: 11 }}>{insight.status}</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, marginTop: 10 }}>{insight.value}</div>
                <p style={{ color: '#334155' }}>{insight.explanation}</p>
                <p style={{ color: '#475569' }}><strong>Why it matters:</strong> {insight.whyItMatters}</p>
                <div style={{ color: '#64748b', fontSize: 11 }}>Source: {insight.source}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="pressure" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Budget Pressure Indicators</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 12 }}>
            {pressureIndicators.map((item) => (
              <div key={item.label} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <strong>{item.label}</strong>
                  <span style={{ color: item.status === 'Watch' ? '#ca8a04' : '#2563eb', fontWeight: 900 }}>{item.status}</span>
                </div>
                <p style={{ color: '#475569' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Audit / AFR / Budget Clarity</h2>
          {auditAfrClarity.map((item) => (
            <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '1fr 190px 1.5fr', gap: 12, alignItems: 'center', borderTop: '1px solid #eef2f7', padding: '12px 0' }}>
              <strong>{item.label}</strong>
              <span style={{ background: '#dbeafe', color: '#1e40af', borderRadius: 999, padding: '6px 10px', textAlign: 'center', fontWeight: 900, fontSize: 12 }}>{item.badge}</span>
              <span style={{ color: '#475569' }}>{item.meaning}</span>
            </div>
          ))}
        </section>

        <section id="budget-2026" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>2026 Adopted Budget Summary</h2>
          {adoptedBudget2026Summary.map((row) => (
            <div key={row.fundCode} style={{ borderTop: '1px solid #eef2f7', padding: '14px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                <div><strong>{row.fund}</strong><div style={{ color: '#64748b', fontSize: 13 }}>{row.fundCode}</div></div>
                <div style={{ textAlign: 'right' }}><div style={{ fontWeight: 800 }}>{dollars(row.appropriations2026)}</div><div style={{ color: '#64748b', fontSize: 12 }}>2026 appropriations</div></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 10, marginTop: 10 }}>
                <div style={mini}><div style={{ color: '#64748b', fontSize: 12 }}>Estimated revenues</div><strong>{dollars(row.estimatedRevenues2026)}</strong></div>
                <div style={mini}><div style={{ color: '#64748b', fontSize: 12 }}>Appropriated fund balance</div><strong>{dollars(row.appropriatedFundBalance2026)}</strong></div>
                <div style={mini}><div style={{ color: '#64748b', fontSize: 12 }}>Tax levy</div><strong>{dollars(row.taxLevy2026)}</strong></div>
              </div>
              <div style={{ color: '#64748b', fontSize: 11, marginTop: 8 }}>Source: {row.source.title} • {row.source.page}</div>
            </div>
          ))}
        </section>

        <section id="audit-2024" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>2024 Audited Fund Balance Commentary</h2>
          {fundBalanceCommentary.map((fund) => (
            <div key={fund.fund} style={{ borderTop: '1px solid #eef2f7', padding: '12px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}><strong>{fund.fund}</strong><strong>{fund.value}</strong></div>
              <p style={{ color: '#475569' }}>{fund.comment}</p>
              <div style={{ color: '#64748b', fontSize: 11 }}>Source: {fund.source}</div>
            </div>
          ))}
        </section>

        <section id="historical-archive" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Historical Financial Reports Archive</h2>
          <p style={{ color: '#475569' }}>Official documents indexed from the Town financial reports archive. These documents provide the basis for the 2022 to 2026 trend engine.</p>
          {years.map((archiveYear) => (
            <details key={archiveYear} open={archiveYear >= 2025} style={{ borderTop: '1px solid #eef2f7', padding: '12px 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 900, fontSize: 18 }}>{archiveYear}</summary>
              {financialReportsArchive.filter((item) => item.year === archiveYear).map((item) => (
                <div key={`${item.year}-${item.title}`} style={{ display: 'grid', gridTemplateColumns: '1fr 150px', gap: 12, padding: '9px 0 9px 16px' }}>
                  <span>{item.title}</span>
                  <strong style={{ color: '#2563eb' }}>{item.category.replace('_', ' ')}</strong>
                </div>
              ))}
            </details>
          ))}
        </section>

        <section id="fiscal-events" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Fiscal Events</h2>
          <div style={{ border: '1px solid #bbf7d0', borderRadius: 14, padding: 15, background: '#f0fdf4' }}>
            <strong>{earlyRetirementFiscalEvent.title}</strong>
            <div style={{ marginTop: 6 }}>{earlyRetirementFiscalEvent.sourceClaim}</div>
            <div style={{ color: '#475569', fontSize: 13, marginTop: 8 }}>{earlyRetirementFiscalEvent.validationStatus}</div>
            <div style={{ color: '#475569', fontSize: 13, marginTop: 8 }}>Covered groups: {earlyRetirementFiscalEvent.coveredGroups.join(', ')}</div>
          </div>
        </section>

        <section id="sources" style={{ ...card, scrollMarginTop: 24, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Source Registry</h2>
          {sourceDocuments.map((doc) => (
            <div key={doc.title} style={{ borderTop: '1px solid #eef2f7', padding: '12px 0' }}>
              <strong>{doc.title}</strong>
              <div style={{ color: '#64748b', fontSize: 13 }}>{doc.kind} • {doc.year} • {doc.status}</div>
              <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>{doc.notes}</div>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}
