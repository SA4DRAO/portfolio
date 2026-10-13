const pillars = [
  {
    title: 'LLM Observability',
    body: 'Tracing, evaluation, and audit for agent workloads — without vendor SDK lock-in.',
    accent: 'var(--pink)',
  },
  {
    title: 'Agent Memory',
    body: 'Graph + vector memory so agents remember context across turns and sessions.',
    accent: 'var(--blue)',
  },
  {
    title: 'Self-Hosted AI Infra',
    body: 'Open, portable stacks you own — not a black-box SaaS with a seat licence.',
    accent: 'var(--green)',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-label">01 — What I do</span>
        <h2 className="section-title">
          The systems layer <br /> of AI.
        </h2>

        <p style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.5rem)', maxWidth: 760, fontWeight: 500, marginBottom: 56 }}>
          I focus on the parts that turn a demo agent into something you can actually ship and
          trust — the infrastructure, the memory, and the observability that make LLM systems
          reliable in production.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
          {pillars.map((p) => (
            <div key={p.title} className="card card--hover" style={{ padding: 28 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: p.accent,
                  border: 'var(--border)',
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '1.4rem',
                }}
              >
                {p.title.charAt(0)}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 12, textTransform: 'uppercase' }}>{p.title}</h3>
              <p style={{ fontSize: '1rem' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
