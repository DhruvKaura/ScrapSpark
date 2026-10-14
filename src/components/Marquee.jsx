export default function Marquee({ items, reverse = false, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'marquee-rev' : ''} ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-star">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}
