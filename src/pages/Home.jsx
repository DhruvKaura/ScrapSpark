import { Link, useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText.jsx'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products, steps, insights } from '../data.js'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-fade" style={{ animationDelay: '100ms' }}>Little Hands, Big Ideas</p>
          <h1 className="hero-title">
            <SplitText text="SCRAP" delay={200} />
            <SplitText text="SPARK" delay={450} className="outline" />
          </h1>
          <p className="hero-sub hero-fade" style={{ animationDelay: '900ms' }}>
            Wear the <span className="scribble">re-design.</span> We rescue fabric scraps from tailor
            shops and stitch them into colourful, useful everyday products.
          </p>
          <div className="hero-actions hero-fade" style={{ animationDelay: '1100ms' }}>
            <Link to="/products" className="btn btn-dark">See our products →</Link>
            <Link to="/insights" className="btn btn-ghost">What we learned</Link>
          </div>
        </div>

        <div className="hero-visual hero-fade" style={{ animationDelay: '500ms' }}>
          <div className="hero-frame">
            <img src="/images/banner.webp" alt="Scrap Spark product range: apron, bottle cover, stationery pouch and table mat" />
          </div>
          <span className="sticker sticker-1">♻ Reuse</span>
          <span className="sticker sticker-2">100% Handmade</span>
          <span className="sticker sticker-3">From ₹100</span>
        </div>
      </section>

      <Marquee items={['Eco-Friendly', 'Sustainable', 'Handmade with Love', 'Small Scraps', 'Smart Products', 'Big Change']} />

      {/* About blurb */}
      <section className="section bg-pink">
        <div className="container">
          <Reveal><p className="eyebrow">About the website</p></Reveal>
          <Reveal delay={100}>
            <h2 className="mega">
              Welcome to Scrap Spark, where sustainability meets creative transformation. We rescue unused
              everyday materials and reinvent them into high-quality, stunning designs.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/about" className="btn btn-dark">Read our story →</Link>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-head">
            <Reveal><h2 className="display">Our Products</h2></Reveal>
            <Reveal delay={100}><Link to="/products" className="u-link">View all →</Link></Reveal>
          </div>
          <div className="product-grid">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard product={p} onOpen={() => navigate('/products', { state: { open: p.id } })} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-brown">
        <div className="container">
          <Reveal><p className="eyebrow light">How it's made</p></Reveal>
          <Reveal delay={80}><h2 className="display light">From scrap to spark</h2></Reveal>
          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 110} className="step">
                <span className="step-icon" aria-hidden="true">{s.icon}</span>
                <span className="step-n">Step {s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Insight teaser */}
      <section className="section bg-lime">
        <div className="container split-2">
          <div>
            <Reveal><p className="eyebrow">Student voices</p></Reveal>
            <Reveal delay={80}><h2 className="display">What starting a business taught us</h2></Reveal>
            <Reveal delay={160}>
              <p className="lead">
                We are students, not experts — but building Scrap Spark taught us lessons no classroom could.
                Here's one of them.
              </p>
            </Reveal>
            <Reveal delay={240}><Link to="/insights" className="btn btn-dark">Read all 7 lessons →</Link></Reveal>
          </div>
          <Reveal variant="scale" delay={200}>
            <blockquote className="quote-card">
              <span className="quote-mark">“</span>
              <p>{insights[2].quote}</p>
              <cite>— {insights[2].by}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SDG strip */}
      <section className="section bg-sky">
        <div className="container sdg">
          <Reveal className="sdg-card sdg-12">
            <strong>12</strong><span>Responsible Consumption &amp; Production</span>
          </Reveal>
          <Reveal delay={100} className="sdg-card sdg-13">
            <strong>13</strong><span>Climate Action</span>
          </Reveal>
          <Reveal delay={200} className="sdg-text">
            <h2 className="display">Small steps make a big difference.</h2>
            <p className="lead">Every product keeps fabric out of landfills and shows that eco-friendly can be beautiful.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
