import PageShell from '../../components/PageShell'
import { allOperatingFunds2026 } from '../../lib/all-funds'
import { financialReportsArchive } from '../../lib/financial-reports-archive'
import { analyticsModules } from '../../lib/analytics-modules'
import { dollars } from '../../lib/financial-data'

const card = { background: 'white', border: '1px solid #e2e8f0', borderRadius: 18, padding: 18, boxShadow: '0 14px 34px rgba(15,23,42,.05)' } as const

export default function SearchPage() {
  const searchableItems = [
    ...allOperatingFunds2026.map((fund) => ({ type: 'Fund', title: `${fund.code} — ${fund.name}`, detail: `${dollars(fund.appropriations2026)} appropriations • ${dollars(fund.taxLevy2026)} levy`, source: fund.source })),
    ...financialReportsArchive.map((doc) => ({ type: 'Source', title: `${doc.year} ${doc.title}`, detail: doc.category.replace('_', ' '), source: 'Town financial reports archive' })),
    ...analyticsModules.map((module) => ({ type: 'Module', title: module.name, detail: module.description, source: module.sourceBasis })),
  ]

  return (
    <PageShell title="Search" subtitle="Search funds, source documents, analytics modules, and future parsed line items from one place.">
      <section style={{ ...card, marginBottom: 18 }}>
        <label style={{ display: 'block', color: '#64748b', fontWeight: 900, textTransform: 'uppercase', fontSize: 12 }}>Global Search</label>
        <input placeholder="Search examples: overtime, parks, sewer, fund balance, tax levy, debt service" style={{ width: '100%', marginTop: 10, padding: 14, borderRadius: 14, border: '1px solid #cbd5e1', fontSize: 16 }} />
        <p style={{ color: '#64748b' }}>Static export note: this page currently exposes the indexed search corpus. Client-side instant filtering will be added after the parsed line-item JSON is published.</p>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        {searchableItems.map((item) => (
          <article key={`${item.type}-${item.title}`} style={card}>
            <div style={{ color: '#2563eb', fontWeight: 900, fontSize: 12, textTransform: 'uppercase' }}>{item.type}</div>
            <h2 style={{ margin: '6px 0' }}>{item.title}</h2>
            <p style={{ color: '#334155' }}>{item.detail}</p>
            <p style={{ color: '#64748b', fontSize: 12 }}>Source basis: {item.source}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
