import './Process.css'

const steps = [
  {
    step: '1',
    title: 'Initial Consultation',
    desc: 'We begin with a thorough consultation — in person or remote — to understand your situation, goals, and eligibility.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Case Assessment',
    desc: 'We evaluate your documentation, identify strengths and gaps, and advise on the strongest route for your application.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Document Preparation',
    desc: 'Our team guides you through every document required, reviewing drafts and ensuring each piece meets Home Office standards.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    step: '4',
    title: 'Submission & Follow-Up',
    desc: 'We submit your application, track its progress, and handle any correspondence from the Home Office or consulate on your behalf.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">A Clear Path from Start to Approval</h2>
          <p className="section-subtitle">
            Our structured four-step process ensures nothing is overlooked and every application gives you the best possible chance of success.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((s, i) => (
            <div className="process__step" key={i}>
              <div className="process__step-left">
                <div className="process__step-bubble">
                  <div className="process__step-icon">{s.icon}</div>
                </div>
                {i < steps.length - 1 && <div className="process__step-line" />}
              </div>
              <div className="process__step-content">
                <div className="process__step-num">Step {s.step}</div>
                <h3 className="process__step-title">{s.title}</h3>
                <p className="process__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
