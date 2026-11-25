import './Compliance.css'

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Companies House Registered',
    detail: 'Registered in England & Wales\nCompany No. 17480611',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'GDPR Compliant',
    detail: 'All client data handled\nunder UK GDPR & DPA 2018',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
      </svg>
    ),
    title: 'Professional Standards',
    detail: 'Operating under the\nCompanies Act 2006',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Incorporated Sep 2026',
    detail: 'Fresh, modern consultancy\nbuilt for today\'s landscape',
  },
]

export default function Compliance() {
  return (
    <section className="compliance">
      <div className="container">
        <div className="compliance__inner">
          <div className="compliance__text">
            <span className="section-label">Legal &amp; Compliance</span>
            <h2 className="section-title compliance__title">Operating with Full Legal Standing</h2>
            <p className="section-subtitle compliance__subtitle">
              Visa Compass Ltd is a legitimately incorporated UK private limited company. We maintain full compliance with UK company law, immigration regulations, and data protection requirements, giving our clients the confidence that their case is in trustworthy hands.
            </p>
            <div className="compliance__reg-box">
              <div className="compliance__reg-row">
                <span className="compliance__reg-label">Company Name</span>
                <span className="compliance__reg-val">Visa Compass Ltd</span>
              </div>
              <div className="compliance__reg-row">
                <span className="compliance__reg-label">Company Number</span>
                <span className="compliance__reg-val">17480611</span>
              </div>
              <div className="compliance__reg-row">
                <span className="compliance__reg-label">Jurisdiction</span>
                <span className="compliance__reg-val">England &amp; Wales</span>
              </div>
              <div className="compliance__reg-row">
                <span className="compliance__reg-label">Incorporated</span>
                <span className="compliance__reg-val">25 September 2026</span>
              </div>
              <div className="compliance__reg-row">
                <span className="compliance__reg-label">Registered Office</span>
                <span className="compliance__reg-val">128 City Road, London, EC1V 2NX</span>
              </div>
            </div>
          </div>

          <div className="compliance__cards">
            {items.map((item, i) => (
              <div className="compliance__card" key={i}>
                <div className="compliance__card-icon">{item.icon}</div>
                <div>
                  <h4 className="compliance__card-title">{item.title}</h4>
                  <p className="compliance__card-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
