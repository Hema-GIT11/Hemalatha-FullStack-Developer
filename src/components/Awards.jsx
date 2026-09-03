import { awards } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Awards() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">05 · Recognition</p>
          <h2 className="section__title">Awards & Recognition</h2>
        </Reveal>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <Reveal key={a.name} delay={i * 100} className="card award-card">
              <div className="award-card__icon">🏆</div>
              <div>
                <h3>{a.name}</h3>
                <p className="edu-meta">{a.period}</p>
                <p>{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
