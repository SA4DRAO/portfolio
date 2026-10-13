import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--ink)', color: 'var(--paper)', borderTop: 'var(--border-thick)' }}>
      <div className="container">
        <span className="section-label" style={{ background: 'var(--yellow)', color: 'var(--ink)' }}>
          04 — Where I've worked
        </span>
        <h2 className="section-title">Experience</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 24 }}>
          {experience.map((exp) => (
            <div
              key={exp.role + exp.period}
              style={{
                border: '3px solid var(--paper)',
                padding: 28,
                background: 'var(--ink)',
                boxShadow: '8px 8px 0 var(--yellow)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <h3 style={{ fontSize: '1.6rem', textTransform: 'uppercase' }}>{exp.role}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--yellow)', fontWeight: 700 }}>
                  {exp.period}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.05rem', marginBottom: 18, color: 'var(--pink)' }}>
                {exp.company}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 20 }}>
                {exp.points.map((pt, i) => (
                  <li key={i} style={{ fontSize: '1rem', lineHeight: 1.55 }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
