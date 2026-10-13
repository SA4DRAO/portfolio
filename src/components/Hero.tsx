import HeroScene from './HeroScene'
import { profile } from '../data'

export default function Hero() {
  return (
    <header id="top" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 72 }}>
      {/* Three.js canvas as background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <HeroScene />
      </div>

      <div className="container" style={{ zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: 720 }}>
          <div className="section-label" style={{ background: 'var(--yellow)', color: 'var(--ink)' }}>
            {profile.location} · Available for AI roles
          </div>

          <h1
            style={{
              fontSize: 'clamp(3rem, 11vw, 7.5rem)',
              textTransform: 'uppercase',
              marginBottom: 24,
              textShadow: '4px 4px 0 var(--paper)',
            }}
          >
            Adarsh
            <br />
            Rao
          </h1>

          <div
            style={{
              display: 'inline-block',
              background: 'var(--ink)',
              color: 'var(--paper)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              padding: '10px 20px',
              marginBottom: 28,
              transform: 'rotate(-1deg)',
            }}
          >
            {profile.role}
          </div>

          <p style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)', maxWidth: 560, marginBottom: 36, fontWeight: 500 }}>
            {profile.tagline}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#work" className="btn btn--primary">
              See my work ↓
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
