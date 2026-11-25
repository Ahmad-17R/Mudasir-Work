import './Hero.css'

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToServices = (e) => {
    e.preventDefault()
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__bg-overlay" />
        <div className="hero__bg-pattern" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Registered in England &amp; Wales · Co. No. 17480611
        </div>

        <h1 className="hero__title">
          Your Trusted Partner<br />
          for <span className="hero__title-accent">Visa &amp; Immigration</span><br />
          Consultancy
        </h1>

        <p className="hero__subtitle">
          Visa Compass Ltd delivers expert, tailored consultancy services to individuals and businesses navigating the complexities of UK and international immigration law — with clarity, care, and results.
        </p>

        <div className="hero__actions">
          <button className="btn-primary hero__btn-primary" onClick={scrollToContact}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
            Get Free Consultation
          </button>
          <button className="btn-outline" onClick={scrollToServices}>
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Client Focused</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">FCA</span>
            <span className="hero__stat-label">Compliant Practice</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">UK</span>
            <span className="hero__stat-label">London Based</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
