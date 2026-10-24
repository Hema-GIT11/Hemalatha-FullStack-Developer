import { useEffect } from 'react'
import { profile, stats } from '../data.js'
import profilePhoto from '../assets/profile.png'

export default function Hero() {
  useEffect(() => {
    console.log(
      '%c👋 Hey there, fellow developer!',
      'font-size: 16px; font-weight: bold; color: #00d9ff;',
    )
    console.log(
      '%cWelcome to Hemalatha\'s Portfolio',
      'font-size: 12px; color: #00d9ff;',
    )
  }, [])

  return (
    <section id="top" className="hero">
      {/* Background decorative elements */}
      <div className="hero__bg-particles" aria-hidden="true"></div>

      <div className="container">
        <div className="hero__grid">
          {/* Left Column - Content */}
          <div className="hero__content-column">
            <p className="eyebrow">HI, I'M {profile.name.toUpperCase()}</p>

            <h1 className="hero__headline">
              I BUILD SCALABLE<br />
              WEB APPLICATIONS<br />
              THAT <span className="gradient-text">DRIVE IMPACT</span>.
            </h1>

            <p className="hero__description">
              Full Stack Developer specializing in React.js, Node.js, and MySQL.
              I build admin dashboards and workflow systems that scale with real business needs.
            </p>

            {/* CTA Buttons */}
            <div className="hero__buttons">
              <a href="#projects" className="btn btn--primary btn--large">
                VIEW MY WORK →
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn--secondary btn--large">
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="hero__image-column">
            <div className="hero__image-stage">
              {/* Soft glow behind the cutout photo */}
              <div className="hero__image-glow" aria-hidden="true"></div>
              <div className="hero__image-ring" aria-hidden="true"></div>
              <img src={profilePhoto} alt={profile.name} className="hero__image" />
            </div>

            {/* Availability Badges - pinned to the far right edge, beside the photo */}
            <div className="hero__availability">
              <div className="status-badge">
                <span className="status-dot available"></span>
                <div>
                  <div className="status-label">Available for</div>
                  <div className="status-value">Freelance</div>
                </div>
              </div>
              <div className="status-badge">
                <span className="status-icon">🌍</span>
                <div>
                  <div className="status-label">Location</div>
                  <div className="status-value">{profile.location.split(',')[0]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <div className="stat-box__value">{s.value}</div>
              <div className="stat-box__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
