import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { asset } from '../lib/asset'

const links = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/chargers', label: 'Chargers' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link className="brand" to="/" aria-label="EV Energy Solutions home">
          <img src={asset('/assets/img/logo.png')} alt="EV Energy Solutions" width={845} height={590} />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className="nav" id="site-nav" data-open={open} aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn--primary btn--sm" to="/contact" onClick={() => setOpen(false)}>
            Request a quote
          </Link>
        </nav>

        <Link className="btn btn--primary btn--sm header__cta" to="/contact">
          Request a quote
        </Link>
      </div>
    </header>
  )
}
