import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__logo">
            Adarsh Rao<span style={{ color: 'var(--yellow)' }}>.</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', opacity: 0.7, marginTop: 8 }}>
            {profile.role} · {profile.location}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className="container" style={{ paddingTop: 24, borderTop: '1px solid rgba(244,241,234,0.2)' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} Adarsh Rao. Built with React + Three.js.
        </p>
      </div>
    </footer>
  )
}
