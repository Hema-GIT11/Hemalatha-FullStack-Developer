import { experience } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">02 · Experience</p>
          <h2 className="section__title">Professional Experience</h2>
          <p className="section__subtitle">Where I&apos;ve grown as a developer.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 100} className="timeline__item">
              <div className="timeline__dot" />
              <div className="card timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="badge">{job.period}</span>
                </div>
                <ul>
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
