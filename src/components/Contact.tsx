import { profile } from '../data'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, accent: 'var(--yellow)' },
  { label: 'LinkedIn', value: 'in/sa4drao', href: profile.linkedin, accent: 'var(--blue)' },
  { label: 'GitHub', value: 'SA4DRAO', href: profile.github, accent: 'var(--pink)' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <span className="section-label">05 — Say hello</span>
        <h2 className="section-title">
          Let's build <br /> something.
        </h2>

        <p style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.4rem)', maxWidth: 640, fontWeight: 500, marginBottom: 48 }}>
          I'm open to AI/LLM engineering roles and interesting collaborations. If you're building
          with LLMs and want someone who cares about the systems underneath, reach out.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {channels.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card card--hover" style={{ padding: 26 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: 12 }}>
                {c.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  wordBreak: 'break-all',
                  background: c.accent,
                  display: 'inline-block',
                  padding: '4px 10px',
                  border: 'var(--border)',
                }}
              >
                {c.value}
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <a href={`mailto:${profile.email}`} className="btn btn--pink" style={{ fontSize: '1.1rem', padding: '18px 32px' }}>
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  )
}
