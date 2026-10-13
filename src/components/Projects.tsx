import { projects } from '../data'

export default function Projects() {
  return (
    <section id="work" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
      <div className="container">
        <span className="section-label">02 — Selected work</span>
        <h2 className="section-title">Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {projects.map((p) => {
            const isGithub = p.link.includes('github.com')
            return (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="card card--hover"
                style={{ padding: 0, display: 'flex', flexDirection: 'column' }}
              >
                {/* Header band */}
                <div
                  style={{
                    background: p.accent,
                    borderBottom: 'var(--border)',
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <h3 style={{ fontSize: '1.8rem', textTransform: 'uppercase' }}>{p.title}</h3>
                  <span className="tag" style={{ background: 'var(--paper)' }}>
                    {p.badge}
                  </span>
                </div>

                {/* Optional image */}
                {p.image && (
                  <div style={{ borderBottom: 'var(--border)', overflow: 'hidden' }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ width: '100%', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover' }}
                    />
                  </div>
                )}

                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: 14 }}>
                    {p.subtitle}
                  </p>
                  <p style={{ fontSize: '0.98rem', marginBottom: 22 }}>{p.description}</p>

                  {/* Optional press quote */}
                  {p.press && (
                    <div
                      style={{
                        border: 'var(--border)',
                        background: 'var(--bg)',
                        padding: 18,
                        marginBottom: 22,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: 10,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <span style={{ background: 'var(--ink)', color: 'var(--yellow)', padding: '2px 8px' }}>
                          As featured in
                        </span>
                        {p.press.source}
                      </div>
                      <p style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.5 }}>{p.press.quote}</p>
                    </div>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      marginTop: 22,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      fontSize: '0.9rem',
                    }}
                  >
                    {isGithub ? 'View on GitHub ↗' : 'Read the story ↗'}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
