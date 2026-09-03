import { profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <Reveal>
          <p className="section__eyebrow" style={{ justifyContent: 'center' }}>
            06 · Contact
          </p>
          <h2 className="section__title">Let&apos;s Work Together</h2>
          <p className="section__subtitle">
            Open to full stack roles and freelance projects. Reach out through any of the channels below.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal as="a" className="card contact-card" href={`mailto:${profile.email}`}>
            <span>✉️</span>
            <div>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
          </Reveal>
          <Reveal
            as="a"
            delay={80}
            className="card contact-card"
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
          >
            <span>📱</span>
            <div>
              <h3>Phone</h3>
              <p>{profile.phone}</p>
            </div>
          </Reveal>
          <Reveal
            as="a"
            delay={160}
            className="card contact-card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>💼</span>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/hemaganapathy26</p>
            </div>
          </Reveal>
          <Reveal
            as="a"
            delay={240}
            className="card contact-card"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/hemaganapathy26</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
