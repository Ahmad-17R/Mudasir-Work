import './Footer.css'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#c9a84c"/>
                <text x="16" y="23" fontFamily="serif" fontSize="18" fontWeight="bold" fill="#1a3a6b" textAnchor="middle">V</text>
              </svg>
              <div>
                <span className="footer__logo-main">Visa Compass</span>
                <span className="footer__logo-sub">Ltd</span>
              </div>
            </div>
            <p className="footer__tagline">
              Professional immigration and visa consultancy services, delivered with expertise, transparency, and genuine care for every client.
            </p>
            <div className="footer__reg">
              <span>Registered in England &amp; Wales</span>
              <span className="footer__reg-sep">·</span>
              <span>Company No. <strong>17480611</strong></span>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Navigation</h4>
            <ul className="footer__links">
              {[['#about','About Us'],['#services','Our Services'],['#why-us','Why Choose Us'],['#process','How It Works'],['#contact','Contact Us']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Services</h4>
            <ul className="footer__links">
              {['UK Visa Applications','Settlement & ILR','Student Visas','Business Immigration','International Visas','Appeal Support'].map(s => (
                <li key={s}><a href="#services" onClick={e => { e.preventDefault(); scrollTo('#services') }}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__links-title">Contact</h4>
            <div className="footer__contact-items">
              <a href="tel:+447460675664" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +44 7460 675664
              </a>
              <div className="footer__contact-item footer__contact-addr">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>128 City Road<br />London, EC1V 2NX<br />United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Visa Compass Ltd. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Complaints Procedure</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
