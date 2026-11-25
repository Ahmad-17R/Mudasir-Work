import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: 'UK Visa Applications',
    description: 'Comprehensive support for all UK visa categories — skilled worker, family, student, and visitor — with meticulous document preparation and submission.',
    tags: ['Skilled Worker', 'Family Visas', 'Visitor Visas'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'International Visa Consultancy',
    description: 'Expert guidance for clients seeking visas across the EU, USA, Canada, Australia, and the Gulf — tailored strategies for every destination.',
    tags: ['EU', 'North America', 'GCC Countries'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Settlement & ILR',
    description: 'Strategic advice and full application management for Indefinite Leave to Remain and British citizenship, ensuring your long-term future in the UK.',
    tags: ['ILR', 'British Citizenship', 'FLR'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Student Visa Services',
    description: 'End-to-end support for students applying to UK institutions, covering CAS guidance, financial requirement advice, and Tier 4 applications.',
    tags: ['Student Route', 'CAS Support', 'University Prep'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'Business Immigration',
    description: 'Sponsor licence applications, Global Talent visas, and Innovator Founder route — helping businesses and entrepreneurs establish a UK presence.',
    tags: ['Sponsor Licence', 'Global Talent', 'Innovator Founder'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Appeal & Reconsideration',
    description: 'Professional representation for refused applications, including grounds of appeal, judicial review support, and Home Office reconsideration requests.',
    tags: ['Refusal Appeals', 'JR Support', 'Reconsideration'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Consultancy Tailored to Your Needs</h2>
          <p className="section-subtitle">
            We offer a full spectrum of immigration and visa consultancy services, with every solution crafted around your individual circumstances and goals.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__tags">
                {service.tags.map((tag, j) => (
                  <span className="service-card__tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
