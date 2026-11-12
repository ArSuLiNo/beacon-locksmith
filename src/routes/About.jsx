import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

export default function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">About</span></div>
          <Reveal><div className="sec-tag">About</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">Mobile locksmith, built for Greater Boston.</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">One van, one technician, one direct phone line. You reach the person doing the work, not a dispatcher pulling from a pool of subcontractors.</p></Reveal>
          <Reveal delay={0.24}>
            <div className="cta-row">
              <a href="tel:+16175550199" className="btn-primary">Call direct <Icon name="arrow" size={14} /></a>
              <Link to="/work" className="btn-ghost">See our work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              ['Jobs completed', '2,400+', 'across Greater Boston since 2020'],
              ['Communities served', '30+', 'Boston, 128 belt, parts of 495'],
              ['Response time', '~15 min', 'average in Boston proper'],
            ].map(([label, num, note], i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="elev-card">
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{label}</div>
                  <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1 }}>{num}</div>
                  <div style={{ color: 'var(--ink-3)', fontSize: 14, marginTop: 6 }}>{note}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div style={{ maxWidth: 720, margin: '48px auto 0', lineHeight: 1.7, fontSize: 17, color: 'var(--ink-2)' }}>
              <p>Beacon started in 2020 as a one-van operation and has stayed that way on purpose. Scaling into a franchise means dispatching to the cheapest available subcontractor — that's how locksmithing picked up its reputation for inflated bills and sloppy work. We don't operate that way.</p>
              <p>What you get: a direct call line to the person who will actually show up, a quoted price before any work starts, and non-destructive methods first whenever the hardware allows. On the rare occasion drilling or replacement is the right call, we tell you upfront, in writing.</p>
              <p>We're licensed by the Commonwealth of Massachusetts (MA-LOCK-47829), bonded, and carry commercial general liability. For commercial clients we offer Net-30 billing and scheduled preventive maintenance contracts.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
