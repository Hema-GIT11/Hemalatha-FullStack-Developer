import { certifications, education } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">04 · Education</p>
          <h2 className="section__title">Education & Certifications</h2>
        </Reveal>

        <div className="edu-grid">
          <Reveal className="card">
            <span className="badge badge--muted">Degree</span>
            <h3>{education.degree}</h3>
            <p className="timeline__company">{education.school}</p>
            <p className="edu-meta">
              {education.period} &middot; CGPA {education.cgpa}
            </p>
          </Reveal>

          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(i + 1) * 90} className="card">
              <span className="badge badge--muted">Certification</span>
              <h3>{c.name}</h3>
              <p className="timeline__company">{c.org}</p>
              <p className="edu-meta">{c.period}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
