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
              <div className="project-card__head">
                <h3>{project.name}</h3>
                {project.private && <span className="badge badge--muted">🔒 Client project</span>}
              </div>
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
              <div className="project-card__links">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-card__link">
                    Code ↗
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-card__link">
                    Live demo ↗
                  </a>
                )}
                {project.private && !project.repoUrl && !project.demoUrl && (
                  <span className="project-card__note">Codebase is private under client NDA</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
