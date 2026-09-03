import { useEffect, useState } from 'react'

/**
 * Cycles through a list of phrases with a typewriter effect —
 * types out, pauses, deletes, moves to the next phrase.
 */
export default function Typewriter({ words, typeSpeed = 55, deleteSpeed = 30, pause = 1400 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter__cursor" aria-hidden="true" />
    </span>
  )
}
