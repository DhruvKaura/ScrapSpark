import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import { contact, founders } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend: open the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Hello from ${form.name || 'a visitor'}`
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="page-hero bg-pink">
        <div className="container">
          <p className="eyebrow hero-fade">Orders · Bulk gifts · School fairs · Just saying hi</p>
          <h1 className="page-title"><SplitText text="REACH OUT" delay={100} /></h1>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container split-2">
          <div>
            <Reveal className="contact-line">
              <span className="eyebrow">Phone</span>
              <a href={`tel:+91${contact.phone}`} className="contact-big u-link">{contact.phone}</a>
            </Reveal>
            <Reveal delay={100} className="contact-line">
              <span className="eyebrow">Email</span>
              <a href={`mailto:${contact.email}`} className="contact-big u-link">{contact.email}</a>
            </Reveal>
            <div className="founders small">
              {founders.map((f, i) => (
                <Reveal key={f.name} delay={200 + i * 120} variant="scale">
                  <div className="founder">
                    <div className="founder-frame">
                      <p className="founder-name">{f.name}</p>
                      <p className="founder-role">{f.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="scale" delay={150}>
            <form className="form" onSubmit={onSubmit}>
              <h2>Send us a note</h2>
              <label>
                <span>Your name</span>
                <input required value={form.name} onChange={update('name')} placeholder="Aarav Sharma" />
              </label>
              <label>
                <span>Your email</span>
                <input required type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea required rows="5" value={form.message} onChange={update('message')} placeholder="I'd love to order 10 table mats for…" />
              </label>
              <button className="btn btn-dark" type="submit">Send message →</button>
              <p className="form-note">This opens your email app with your message ready to send.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
