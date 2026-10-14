import { Link } from 'react-router-dom'
import { contact, navLinks } from '../data.js'
import Marquee from './Marquee.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Marquee items={['Reuse', 'Reduce', 'Recycle', 'Re-Design', 'Little Hands', 'Big Ideas']} />
      <div className="footer-inner container">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Scrap Spark logo" />
          <p className="footer-big">Wear the<br />Re-Design.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="u-link">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Reach out</h4>
          <ul>
            <li><a className="u-link" href={`tel:+91${contact.phone}`}>+91 {contact.phone}</a></li>
            <li><a className="u-link" href={`mailto:${contact.email}`}>{contact.email}</a></li>
          </ul>
          <p className="footer-sdg">Supporting UN SDG 12 · Responsible Consumption<br />&amp; SDG 13 · Climate Action</p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Scrap Spark · Handmade with love by students</p>
    </footer>
  )
}
