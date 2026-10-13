import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      return (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  return { theme, toggle }
}

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          AR<span style={{ color: 'var(--yellow)' }}>.</span>
        </a>
        <div className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="nav__link"
            aria-label="Toggle color theme"
            title="Toggle theme"
            style={{ cursor: 'pointer', background: 'transparent' }}
          >
            {theme === 'light' ? '◐ Dark' : '◑ Light'}
          </button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="nav__link nav__cta">
            Let's talk
          </a>
        </div>
      </div>
    </nav>
  )
}
