import { projects } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">03 · Projects</p>
          <h2 className="section__title">Key Projects</h2>
          <p className="section__subtitle">A selection of enterprise and government platforms I&apos;ve built.</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 90} as="article" className="card project-card">
              <h3>{project.name}</h3>
              <div className="tag-list">
                {project.stack.map((s) => (
                  <span key={s} className="tag tag--outline">
                    {s}
                  </span>
                ))}
              </div>
              <ul>
                {project.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
