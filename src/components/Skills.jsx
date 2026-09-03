import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import SpotlightCard from './SpotlightCard.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">01 · Skills</p>
          <h2 className="section__title">Technical Skills</h2>
          <p className="section__subtitle">Tools and technologies I work with day to day.</p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <SpotlightCard accent={group.accent} className="card skills-card">
                <div className="skills-card__head">
                  <span className="skills-card__icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
