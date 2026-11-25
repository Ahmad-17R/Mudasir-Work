import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <div className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#c9a84c"/>
              <text x="14" y="20" fontFamily="serif" fontSize="16" fontWeight="bold" fill="#1a3a6b" textAnchor="middle">V</text>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Visa Compass</span>
            <span className="navbar__logo-sub">Ltd</span>
          </div>
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="navbar__link" onClick={e => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary navbar__cta" onClick={e => handleNavClick(e, '#contact')}>
            Free Consultation
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
