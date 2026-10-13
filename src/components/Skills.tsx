import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label">03 — Toolbox</span>
        <h2 className="section-title">Skills</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {skillGroups.map((g) => (
            <div key={g.label} className="card" style={{ padding: 26 }}>
              <div
                style={{
                  display: 'inline-block',
                  background: g.accent,
                  border: 'var(--border)',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  marginBottom: 20,
                }}
              >
                {g.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {g.items.map((item) => (
                  <span key={item} className="tag" style={{ fontSize: '0.9rem' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
