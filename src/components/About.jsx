import './About.css'

const highlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Fully Regulated',
    text: 'Registered with Companies House under the Companies Act 2006, operating with full legal compliance.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Responsive Service',
    text: 'We respond to every enquiry promptly and keep clients informed at every stage of their application.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Client-First Approach',
    text: 'Every case is treated individually. We build a bespoke strategy aligned with each client\'s personal circumstances.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__card about__card--main">
            <div className="about__card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(201,168,76,0.12)"/>
                <path d="M24 10C16.27 10 10 16.27 10 24s6.27 14 14 14 14-6.27 14-14S31.73 10 24 10z" fill="none" stroke="#c9a84c" strokeWidth="2"/>
                <path d="M20 24l3 3 6-6" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="24" r="1" fill="#c9a84c"/>
              </svg>
            </div>
            <div className="about__card-info">
              <span className="about__card-label">Company Reg.</span>
              <span className="about__card-value">17480611</span>
            </div>
          </div>

          <div className="about__card about__card--secondary">
            <div className="about__card-icon about__card-icon--sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <div>
              <span className="about__card-label">Registered Office</span>
              <span className="about__card-value about__card-value--sm">London, England &amp; Wales</span>
            </div>
          </div>

          <div className="about__card about__card--accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>Incorporated 25 Sep 2026</span>
          </div>

          <div className="about__visual-bg" />
        </div>

        <div className="about__text">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Expert Guidance for Every Immigration Journey</h2>
          <p className="about__desc">
            Visa Compass Ltd is a London-based consultancy firm incorporated under the Companies Act 2006, dedicated to providing professional, transparent, and results-driven immigration and visa consultancy services.
          </p>
          <p className="about__desc">
            We understand that navigating the UK's immigration system — or any international visa process — can feel overwhelming. Our experienced consultants work alongside you to demystify the process, prepare robust applications, and advocate on your behalf, so you can focus on what matters most.
          </p>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div className="about__highlight" key={i}>
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{h.title}</h4>
                  <p className="about__highlight-text">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
