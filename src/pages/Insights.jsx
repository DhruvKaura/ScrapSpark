import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import { insights, costing, canvas } from '../data.js'

const starterSteps = [
  'Spot a problem around you',
  'Make one sample — just one',
  'Show it to 10 real people',
  'Work out your true cost',
  'Set a fair price with profit',
  'Give everyone on the team one clear job',
  'Sell your first piece & celebrate!',
]

export default function Insights() {
  const [done, setDone] = useState([])
  const toggle = (i) => setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]))

  const cost = costing.reduce((s, c) => s + c.amount, 0)
  const price = 200
  const profit = price - cost

  return (
    <>
      <section className="page-hero bg-mustard">
        <div className="container">
          <p className="eyebrow hero-fade">In our own words</p>
          <h1 className="page-title"><SplitText text="INSIGHTS" delay={100} /></h1>
          <p className="lead hero-fade" style={{ animationDelay: '500ms' }}>
            Seven things we, a team of students, learned while turning a pile of fabric scraps into a real
            little business.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container lessons">
          {insights.map((x, i) => (
            <Reveal key={x.no} className="lesson" variant={i % 2 ? 'left' : 'right'} style={{ '--card': x.color }}>
              <span className="lesson-no">{String(x.no).padStart(2, '0')}</span>
              <div className="lesson-body">
                <h2>{x.title}</h2>
                <blockquote>
                  <p>“{x.quote}”</p>
                  <cite>— {x.by}</cite>
                </blockquote>
                <p className="lesson-tip"><strong>Try this:</strong> {x.tip}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-sky">
        <div className="container split-2">
          <div>
            <Reveal><p className="eyebrow">Money matters</p></Reveal>
            <Reveal delay={80}><h2 className="display">How we price an apron</h2></Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Free fabric doesn't mean a free product. Here's a simple example of how we work out our cost
                before setting a price.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" className="cost-card">
            {costing.map((c) => (
              <div key={c.item} className="cost-row">
                <span>{c.item}</span>
                <span className="cost-bar"><i style={{ '--w': `${(c.amount / price) * 100}%` }} /></span>
                <strong>₹{c.amount}</strong>
              </div>
            ))}
            <hr />
            <div className="cost-row total"><span>Total cost</span><span /><strong>₹{cost}</strong></div>
            <div className="cost-row total"><span>Selling price</span><span /><strong>₹{price}</strong></div>
            <div className="cost-row profit"><span>Profit per apron</span><span /><strong>₹{profit}</strong></div>
            <p className="cost-note">Example figures for learning — real costs change with every batch.</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-pink">
        <div className="container">
          <Reveal><p className="eyebrow">Our business on one page</p></Reveal>
          <Reveal delay={80}><h2 className="display">The Scrap Spark plan</h2></Reveal>
          <div className="canvas">
            {canvas.map((c, i) => (
              <Reveal key={c.k} delay={i * 80} variant="scale" className="canvas-cell">
                <h3>{c.k}</h3>
                <p>{c.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-lime">
        <div className="container split-2">
          <div>
            <Reveal><p className="eyebrow">Your turn</p></Reveal>
            <Reveal delay={80}><h2 className="display">Start your own spark</h2></Reveal>
            <Reveal delay={160}>
              <p className="lead">Tick these off as you go. You've done {done.length} of {starterSteps.length}!</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="progress"><i style={{ width: `${(done.length / starterSteps.length) * 100}%` }} /></div>
            </Reveal>
          </div>
          <ul className="checklist">
            {starterSteps.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 60}>
                <button className={done.includes(i) ? 'is-done' : ''} onClick={() => toggle(i)} aria-pressed={done.includes(i)}>
                  <span className="check" aria-hidden="true">✓</span>{s}
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-brown center">
        <Reveal><h2 className="display light">Got questions about our journey?</h2></Reveal>
        <Reveal delay={100}><Link to="/contact" className="btn btn-light">Talk to us →</Link></Reveal>
      </section>
    </>
  )
}
