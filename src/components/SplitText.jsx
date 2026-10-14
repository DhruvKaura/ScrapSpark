/* Splits a string into letters that rise in one after another. */
export default function SplitText({ text, delay = 0, step = 40, className = '' }) {
  return (
    <span className={`split ${className}`} aria-label={text}>
      {[...text].map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="split-char"
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}
