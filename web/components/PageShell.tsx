export default function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const base = '/rike4545-riverhead-budget-live'
  const links = [
    ['Dashboard', `${base}/`],
    ['Search Records', `${base}/search/`],
    ['Funds Explorer', `${base}/funds/`],
    ['Analytics', `${base}/analytics/`],
    ['Source Library', `${base}/sources/`],
    ['Scenario Lab', `${base}/scenarios/`],
  ]

  return (
    <main style={{ minHeight: '100vh', background: 'radial-gradient(circle at top left,#e0f2fe 0,#f8fafc 36%,#eef2ff 100%)', color: '#0f172a', fontFamily: 'Inter, Arial, sans-serif' }}>
      <header style={{ background: 'linear-gradient(135deg,#061a32,#0f2f55)', color: 'white', padding: '18px 28px', display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 16px 40px rgba(15,23,42,.18)' }}>
        <a href={`${base}/`} style={{ color: 'white', textDecoration: 'none', display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 46, height: 46, borderRadius: 14, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#bfdbfe,#60a5fa)', color: '#082f49', fontWeight: 950 }}>RB</span>
          <span>
            <strong style={{ fontSize: 22 }}>Riverhead Budget Live</strong>
            <div style={{ color: '#bfdbfe', fontSize: 12 }}>Independent municipal finance explorer</div>
          </span>
        </a>
        <nav style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} style={{ color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,.24)', borderRadius: 999, padding: '9px 13px', fontWeight: 800, background: 'rgba(255,255,255,.07)' }}>{label}</a>
          ))}
        </nav>
      </header>
      <section style={{ padding: 30, maxWidth: 1380, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg,#ffffff,#f8fbff)', border: '1px solid #e2e8f0', borderRadius: 26, padding: 28, boxShadow: '0 18px 50px rgba(15,23,42,.08)', marginBottom: 18 }}>
          <div style={{ color: '#2563eb', letterSpacing: 2, textTransform: 'uppercase', fontSize: 12, fontWeight: 950 }}>Public fiscal intelligence / unofficial</div>
          <h1 style={{ fontSize: 42, lineHeight: 1.05, margin: '8px 0' }}>{title}</h1>
          <p style={{ color: '#475569', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: 980 }}>{subtitle}</p>
          <div style={{ marginTop: 18, background: '#fff7ed', border: '1px solid #fed7aa', color: '#9a3412', padding: 13, borderRadius: 16, fontSize: 14, lineHeight: 1.45 }}>
            This is an independent public-information project and is not affiliated with, endorsed by, or operated by the Town of Riverhead. Verify figures against official source documents before relying on them.
          </div>
        </div>
        {children}
      </section>
    </main>
  )
}
