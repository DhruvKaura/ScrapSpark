import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useLenis } from '../components/LenisProvider.jsx'
import { products, contact } from '../data.js'

export default function Products() {
  const location = useLocation()
  const lenis = useLenis()
  const [active, setActive] = useState(() => products.find((p) => p.id === location.state?.open) || null)

  useEffect(() => {
    if (!lenis) return
    active ? lenis.stop() : lenis.start()
    return () => lenis.start()
  }, [active, lenis])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const orderLink = (p) =>
    `mailto:${contact.email}?subject=${encodeURIComponent(`Order: ${p.name}`)}&body=${encodeURIComponent(
      `Hi Scrap Spark,\n\nI'd like to order the ${p.name} (₹${p.price}).\n\nQuantity:\nName:\nPhone:\n`
    )}`

  return (
    <>
      <section className="page-hero bg-lime">
        <div className="container">
          <p className="eyebrow hero-fade">Small scraps · Smart products · Big change</p>
          <h1 className="page-title"><SplitText text="PRODUCTS" delay={100} /></h1>
          <p className="lead hero-fade" style={{ animationDelay: '500ms' }}>
            Every piece is cut and stitched by hand from rescued fabric, so no two are exactly alike.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container product-grid">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProductCard product={p} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </section>

      {products.map((p, i) => (
        <section key={p.id} className="product-feature" style={{ background: p.color }}>
          <div className={`container split-2 ${i % 2 ? 'flip' : ''}`}>
            <Reveal>
              <h2 className="display">{p.name}</h2>
              <p className="lead">{p.tagline}</p>
              <p><strong>Made from:</strong> {p.madeFrom}</p>
              <ul className="ticks">
                {p.perfectFor.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <div className="feature-buy">
                <span className="price-big">₹{p.price}</span>
                <a className="btn btn-dark" href={orderLink(p)}>Order by email →</a>
              </div>
            </Reveal>
            <Reveal variant="scale" delay={150}>
              <img className="feature-img" src={p.image} alt={`${p.name} poster`} loading="lazy" />
            </Reveal>
          </div>
        </section>
      ))}

      {createPortal(
      <div className={`modal ${active ? 'is-open' : ''}`} onClick={() => setActive(null)} aria-hidden={!active}>
        {active && (
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <img src={active.image} alt={active.name} />
            <div className="modal-body">
              <h3>{active.name}</h3>
              <p>{active.tagline} Made from {active.madeFrom.toLowerCase()}.</p>
              <div className="feature-buy">
                <span className="price-big">₹{active.price}</span>
                <a className="btn btn-dark" href={orderLink(active)}>Order by email →</a>
              </div>
            </div>
          </div>
        )}
      </div>,
      document.body
      )}
    </>
  )
}
