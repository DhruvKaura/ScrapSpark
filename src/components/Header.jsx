import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data.js'
import { useLenis } from './LenisProvider.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => setOpen(false), [pathname])

  // Hide the header while scrolling down, bring it back on scroll up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setHidden(y > 160 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Freeze page scroll while the mobile menu is open.
  useEffect(() => {
    if (!lenis) return
    open ? lenis.stop() : lenis.start()
  }, [open, lenis])

  return (
    <header className={`header ${hidden && !open ? 'header-hidden' : ''} ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Scrap Spark home">
          <img src="/images/logo.png" alt="" className="brand-logo" />
          <span className="brand-name">Scrap Spark</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav-link">
              <span className="nav-mask"><span className="nav-roll" data-text={l.label}>{l.label}</span></span>
            </NavLink>
          ))}
        </nav>

        <Link to="/products" className="btn btn-dark header-cta">Shop now</Link>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {navLinks.map((l, i) => (
            <li key={l.to} style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}>
              <NavLink to={l.to} end={l.to === '/'} tabIndex={open ? 0 : -1}>
                <small>0{i + 1}</small>{l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="mobile-menu-foot">Little Hands, Big Ideas ✺</p>
      </div>
    </header>
  )
}
