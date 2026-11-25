import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title contact__title">Book Your Free Consultation</h2>
          <p className="contact__desc">
            Whether you have a straightforward query or a complex immigration challenge, our team is ready to help. Reach out today and take the first step towards your goal.
          </p>

          <div className="contact__details">
            <a href="tel:+447460675664" className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Phone</span>
                <span className="contact__detail-val">+44 7460 675664</span>
              </div>
            </a>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Registered Office</span>
                <span className="contact__detail-val">128 City Road, London<br />United Kingdom, EC1V 2NX</span>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Availability</span>
                <span className="contact__detail-val">Monday – Friday: 9:00 – 17:30<br />Saturday: By appointment</span>
              </div>
            </div>
          </div>

          <div className="contact__map-placeholder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>128 City Road · London EC1V 2NX</span>
          </div>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>Your enquiry has been received. A member of our team will be in touch within one working day.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send an Enquiry</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+44..." value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>UK Visa Application</option>
                    <option>International Visa Consultancy</option>
                    <option>Settlement & ILR</option>
                    <option>Student Visa</option>
                    <option>Business Immigration</option>
                    <option>Appeal & Reconsideration</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" rows="5" placeholder="Briefly describe your situation and what you need help with..." value={form.message} onChange={handleChange} required />
              </div>

              <p className="contact__form-privacy">
                Your data is processed in accordance with our privacy policy and UK GDPR. We will only use it to respond to your enquiry.
              </p>

              <button type="submit" className="btn-primary contact__submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
