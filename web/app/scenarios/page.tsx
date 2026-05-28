import PageShell from '../../components/PageShell'

const card = { background: 'white', border: '1px solid #e2e8f0', borderRadius: 18, padding: 22, boxShadow: '0 14px 34px rgba(15,23,42,.05)' } as const

const scenarios = [
  {
    title: '$5M Surplus Allocation Scenario',
    type: 'Reserve + operational investment',
    summary: 'Explores balancing tax stabilization, reserve support, parks investment, vehicles, software modernization, and workforce investments.',
    status: 'Modeled',
    confidence: 'Analytical scenario',
  },
  {
    title: 'Tax Stabilization Scenario',
    type: 'Levy mitigation',
    summary: 'Explores how reserve-supported stabilization could reduce short-term levy pressure while highlighting sustainability risks.',
    status: 'Conceptual',
    confidence: 'Requires adopted policy assumptions',
  },
  {
    title: 'Retirement Incentive Risk Scenario',
    type: 'Workforce transition',
    summary: 'Models operational and payroll risks associated with early retirement incentives and staffing turnover.',
    status: 'Partial analytics',
    confidence: 'Awaiting payroll normalization',
  },
  {
    title: 'Debt and Capital Financing Scenario',
    type: 'Long-term financing',
    summary: 'Evaluates debt-service exposure, capital investment timing, and reserve dependency under different financing assumptions.',
    status: 'Framework active',
    confidence: 'Awaiting debt schedule extraction',
  },
]

export default function ScenariosPage() {
  return (
    <PageShell title="Fiscal Scenarios and Policy Modeling" subtitle="Evaluate potential reserve allocations, levy stabilization strategies, workforce risks, debt exposure, and operational investment approaches.">
      <section style={{ display: 'grid', gap: 16 }}>
        {scenarios.map((scenario) => (
          <article key={scenario.title} style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: '#2563eb', fontWeight: 900, fontSize: 12, textTransform: 'uppercase' }}>{scenario.type}</div>
                <h2 style={{ margin: '6px 0' }}>{scenario.title}</h2>
                <p style={{ color: '#475569', maxWidth: 920 }}>{scenario.summary}</p>
              </div>
              <div style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
                <span style={{ background: '#dbeafe', color: '#1e3a8a', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>{scenario.status}</span>
                <span style={{ background: '#fef3c7', color: '#92400e', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>{scenario.confidence}</span>
              </div>
            </div>

            <div style={{ marginTop: 18, borderTop: '1px solid #e2e8f0', paddingTop: 16 }}>
              <strong>Planned scenario outputs</strong>
              <ul style={{ color: '#475569', lineHeight: 1.9 }}>
                <li>assumption breakdowns</li>
                <li>fiscal impact summaries</li>
                <li>taxpayer impact indicators</li>
                <li>reserve impact projections</li>
                <li>debt and financing implications</li>
                <li>operational tradeoff analysis</li>
                <li>source-backed citations</li>
                <li>confidence scoring</li>
              </ul>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
