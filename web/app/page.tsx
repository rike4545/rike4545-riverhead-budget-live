import { sourceDocuments } from '../lib/source-documents'

const agents = [
  ['Source Verification Agent', 'Running'],
  ['Accounting Validation Agent', 'Waiting for parsed data'],
  ['Document Reconciliation Agent', 'Pending'],
  ['Fiscal Events Agent', 'Tracking retirement initiative'],
]

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', padding: 32, fontFamily: 'Arial, sans-serif', background: '#f6f8fb', color: '#111827' }}>
      <section style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: 2, fontSize: 12, color: '#2563eb', fontWeight: 700 }}>Riverhead Budget Live</p>
        <h1 style={{ fontSize: 46, lineHeight: 1, margin: '10px 0' }}>Source-backed municipal fiscal intelligence</h1>
        <p style={{ fontSize: 18, maxWidth: 840, color: '#4b5563' }}>
          All figures shown by the platform must originate from official Town of Riverhead financial documents, reports, resolutions, or public statements.
        </p>

        <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 18, padding: 20, marginTop: 24 }}>
          <h2>Official Source Registry</h2>
          {sourceDocuments.map((doc) => (
            <div key={doc.title} style={{ borderTop: '1px solid #eef2f7', padding: '14px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}>
                <div>
                  <strong>{doc.title}</strong>
                  <div style={{ fontSize: 13, color: '#6b7280' }}>{doc.kind} • {doc.year}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{doc.notes}</div>
                </div>
                <div>
                  <strong>{doc.status}</strong>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16, marginTop: 20 }}>
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 18, padding: 20 }}>
            <h2>Ingestion Pipeline Status</h2>
            <div style={{ borderTop: '1px solid #eef2f7', padding: '10px 0' }}>2024 audited statements → pending extraction</div>
            <div style={{ borderTop: '1px solid #eef2f7', padding: '10px 0' }}>2025 AFR → pending extraction</div>
            <div style={{ borderTop: '1px solid #eef2f7', padding: '10px 0' }}>2026 adopted budget → pending extraction</div>
            <div style={{ borderTop: '1px solid #eef2f7', padding: '10px 0' }}>Early retirement press release → registered</div>
          </section>

          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 18, padding: 20 }}>
            <h2>BudgetGuard AI</h2>
            {agents.map(([name, status]) => (
              <div key={name} style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eef2f7', padding: '10px 0' }}>
                <span>{name}</span>
                <strong>{status}</strong>
              </div>
            ))}
          </section>
        </div>

        <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 18, padding: 20, marginTop: 20 }}>
          <h2>Fiscal Event Watch</h2>
          <div style={{ borderTop: '1px solid #eef2f7', padding: '10px 0' }}>
            <strong>May 26, 2026 — Early Retirement Initiative</strong>
            <div style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>
              Source claim: potential tax savings of up to 3 percent beginning in 2027. Claim remains unvalidated pending payroll and workforce data ingestion.
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
