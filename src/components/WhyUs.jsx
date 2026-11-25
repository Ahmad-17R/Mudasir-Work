import './WhyUs.css'

const reasons = [
  {
    number: '01',
    title: 'Personalised Strategy',
    desc: 'No two immigration cases are alike. We analyse your specific profile and goals to build a strategy that maximises your chances of approval.',
  },
  {
    number: '02',
    title: 'Transparent Pricing',
    desc: 'We quote clearly upfront with no hidden fees. You know exactly what you are paying for before we begin.',
  },
  {
    number: '03',
    title: 'Up-to-Date Expertise',
    desc: 'Immigration rules change frequently. Our consultants maintain current knowledge of UKVI policy, case law, and best practice.',
  },
  {
    number: '04',
    title: 'End-to-End Support',
    desc: 'From initial consultation through document gathering, submission, and decision — we stand with you at every step.',
  },
  {
    number: '05',
    title: 'Confidentiality Assured',
    desc: 'Your personal data and case details are handled with absolute discretion in line with GDPR and UK data protection law.',
  },
  {
    number: '06',
    title: 'London Presence',
    desc: 'Operating from the heart of the City of London, we are accessible for in-person consultations when needed.',
  },
]

export default function WhyUs() {
  return (
    <section className="whyus" id="why-us">
      <div className="whyus__bg-shape" />
      <div className="container whyus__inner">
        <div className="whyus__header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title whyus__title">What Sets Visa Compass Apart</h2>
          <p className="section-subtitle">
            We combine professional expertise with genuine care for every client, delivering consultancy that makes a real difference.
          </p>
        </div>

        <div className="whyus__grid">
          {reasons.map((r, i) => (
            <div className="whyus__card" key={i}>
              <span className="whyus__card-number">{r.number}</span>
              <h3 className="whyus__card-title">{r.title}</h3>
              <p className="whyus__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
