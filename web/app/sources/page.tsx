import PageShell from '../../components/PageShell'
import { financialReportsArchive } from '../../lib/financial-reports-archive'

const card = { background: 'white', border: '1px solid #e2e8f0', borderRadius: 18, padding: 20, boxShadow: '0 14px 34px rgba(15,23,42,.05)' } as const

export default function SourcesPage() {
  return (
    <PageShell title="Source Documents and Financial Records" subtitle="Browse budgets, audits, annual financial reports, supplements, and supporting public financial records used by the platform.">
      <section style={{ display: 'grid', gap: 14 }}>
        {financialReportsArchive.map((report) => (
          <article key={report.title} style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: '#2563eb', fontWeight: 900, textTransform: 'uppercase', fontSize: 12 }}>{report.category}</div>
                <h2 style={{ margin: '6px 0' }}>{report.title}</h2>
                <p style={{ color: '#475569' }}>{report.summary}</p>
              </div>
              <div style={{ background: '#f1f5f9', borderRadius: 999, padding: '10px 14px', fontWeight: 900, height: 'fit-content' }}>{report.year}</div>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
              <span style={{ background: '#dbeafe', color: '#1e3a8a', borderRadius: 999, padding: '8px 12px', fontWeight: 800 }}>Source-backed</span>
              <span style={{ background: '#fef3c7', color: '#92400e', borderRadius: 999, padding: '8px 12px', fontWeight: 800 }}>Parsing active</span>
              <span style={{ background: '#dcfce7', color: '#166534', borderRadius: 999, padding: '8px 12px', fontWeight: 800 }}>Cross-year eligible</span>
            </div>

            <a href={report.url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 16, textDecoration: 'none', background: '#0f172a', color: 'white', padding: '12px 18px', borderRadius: 12, fontWeight: 900 }}>
              Open source document
            </a>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
