import { useEffect, useRef } from 'react'
import { profile, stats } from '../data.js'
import profilePhoto from '../assets/profile.jpg'
import Typewriter from './Typewriter.jsx'
import Topography from './Topography.jsx'

const roles = ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'MySQL', 'REST APIs']

export default function Hero() {
  const cardRef = useRef(null)

  // Fun little easter egg for anyone peeking at devtools.
  useEffect(() => {
    console.log(
      '%c👋 Hey there, fellow developer!',
      'font-size: 16px; font-weight: bold; color: #8b7bff;',
    )
    console.log(
      '%cLiked the code card? Check the source → github.com/hemaganapathy26',
      'font-size: 12px; color: #2dd4bf;',
    )
  }, [])

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `rotate(0deg) rotateX(${y * -10}deg) rotateY(${x * 14}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'rotate(0deg) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section id="top" className="hero">
      <div className="hero__mesh" aria-hidden="true">
        <Topography
          lowColor="#5b4bff"
          midColor="#8b7bff"
          highColor="#2dd4bf"
          speed={0.12}
          morphAmount={1.6}
          morphSpeed={0.04}
          bands={5}
          thickness={0.02}
          scale={2.6}
          glow={0.6}
          colorMode="elevation"
          contrast={1.4}
          brightness={1.4}
          opacity={0.85}
          grain={false}
          mouseInteraction
          mouseRadius={0.35}
          mouseStrength={0.3}
        />
      </div>

      <div className="container hero__grid-layout">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">{profile.title}</p>
          <h1 className="hero__headline">
            Hi, I&apos;m {profile.name} <span className="wave">👋</span>
          </h1>
          <p className="hero__role-line">
            I build with <Typewriter words={roles} />
          </p>
          <p className="hero__summary hero__summary--light">{profile.summary}</p>

          <div className="hero__meta hero__meta--light">
            <span>📍 {profile.location}</span>
            <span>✉️ {profile.email}</span>
            <span>📱 {profile.phone}</span>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn--ghost btn--on-dark" href="#projects">
              View projects
            </a>
            <a className="btn btn--ghost btn--on-dark" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="btn btn--ghost btn--on-dark" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero__showcase">
          <div
            className="code-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="code-card__bar">
              <span className="code-card__dot code-card__dot--r" />
              <span className="code-card__dot code-card__dot--y" />
              <span className="code-card__dot code-card__dot--g" />
              <span className="code-card__filename">developer.js</span>
            </div>
            <pre className="code-card__body">
              <code>
                <span className="tok-kw">const</span> <span className="tok-var">developer</span> = {'{'}
                {'\n'}  <span className="tok-key">name</span>: <span className="tok-str">'Hemalatha G'</span>,
                {'\n'}  <span className="tok-key">role</span>: <span className="tok-str">'Full Stack Developer'</span>,
                {'\n'}  <span className="tok-key">stack</span>: [<span className="tok-str">'React'</span>, <span className="tok-str">'Node'</span>, <span className="tok-str">'Express'</span>, <span className="tok-str">'MySQL'</span>],
                {'\n'}  <span className="tok-key">location</span>: <span className="tok-str">'Chennai, IN'</span>,
                {'\n'}  <span className="tok-key">experience</span>: <span className="tok-num">1.5</span>,
                {'\n'}  <span className="tok-key">hireable</span>: <span className="tok-bool">true</span>,
                {'\n'}
                {'}'}
                <span className="code-card__cursor" />
              </code>
            </pre>
            <div className="code-card__avatar">
              <img src={profilePhoto} alt={profile.name} />
            </div>
          </div>
          <p className="hero__hint">✨ hover the card</p>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-card stat-card--glass">
              <div className="stat-card__value">{s.value}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
