import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import { founders, steps } from '../data.js'

const values = [
  { t: 'Repurpose', d: 'Every scrap has a second life waiting.' },
  { t: 'Reduce', d: 'Less waste in landfills, fewer new resources used.' },
  { t: 'Reimagine', d: 'Waste is just a design problem we haven\'t solved yet.' },
  { t: 'Reuse', d: 'We make things built to be used again and again.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero bg-pink">
        <div className="container">
          <p className="eyebrow hero-fade">Our story</p>
          <h1 className="page-title"><SplitText text="ABOUT US" delay={100} /></h1>
          <p className="lead hero-fade" style={{ animationDelay: '500ms' }}>
            Scrap Spark started with a simple question: why is so much good fabric thrown away?
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container split-2">
          <Reveal>
            <h2 className="display">Our mission</h2>
          </Reveal>
          <div className="prose">
            <Reveal delay={100}>
              <p>
                Tailor shops near us throw away bags of leftover cloth every week — colourful prints, sturdy
                cotton, jute and more. We saw beauty in that waste.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                So a group of students got together, collected the scraps, and learned to sort, clean, cut and
                stitch them into products people actually want: aprons, bottle covers, table mats and stationery
                pouches.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                Our mission is to prove that eco-friendly choices can be breathtakingly beautiful. Join us in
                cleaning up the planet — one redesign at a time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-lime">
        <div className="container">
          <Reveal><h2 className="display">What we stand for</h2></Reveal>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100} variant="scale" className="value">
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <Reveal><h2 className="display">The team behind the spark</h2></Reveal>
          <div className="founders">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 150} variant="scale">
                <div className="founder">
                  <div className="founder-frame">
                    <p className="founder-name">{f.name}</p>
                    <p className="founder-role">as {f.role.replace(' of Scrap Spark', '')} of<br />Scrap Spark</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brown">
        <div className="container">
          <Reveal><h2 className="display light">Our process</h2></Reveal>
          <div className="timeline">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80} variant={i % 2 ? 'left' : 'right'} className="timeline-item">
                <span className="timeline-n">{s.n}</span>
                <div>
                  <h3>{s.icon} {s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><Link to="/products" className="btn btn-light">See what we make →</Link></Reveal>
        </div>
      </section>
    </>
  )
}
