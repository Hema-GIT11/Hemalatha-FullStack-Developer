import { useRef } from 'react'

/**
 * A card that tracks the cursor and renders a soft radial "spotlight"
 * glow under the pointer, tinted with a per-instance accent color.
 * Inspired by the React Bits SpotlightCard pattern (reactbits.dev).
 */
export default function SpotlightCard({ children, className = '', accent = '#8b7bff', style, ...rest }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      style={{ '--spot-accent': accent, ...style }}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      <div className="spotlight-card__glow" aria-hidden="true" />
      <div className="spotlight-card__content">{children}</div>
    </div>
  )
}
