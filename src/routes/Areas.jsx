import { Link } from 'react-router-dom'
import CoverageMap from '../components/CoverageMap.jsx'
import Reveal from '../components/Reveal.jsx'
import { AREAS } from '../data/services.js'

export default function Areas() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Service Areas</span></div>
          <Reveal><div className="sec-tag">Service area</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">All of Greater Boston.</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">{AREAS.length} active communities with live service pins on a real street map.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'start' }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
              {AREAS.map((a) => (
                <Link key={a.slug} to={`/areas/${a.slug}`} style={{
                  background: 'linear-gradient(180deg,#FFF,#F9F7F1)',
                  border: '1px solid var(--line)',
                  borderRadius: 10,
                  padding: 18,
                  boxShadow: '0 1px 2px rgba(10,10,10,0.04)',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.02em', marginBottom: 2 }}>{a.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>pop {a.pop} · {a.eta}</div>
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ position: 'sticky', top: 90 }}>
              <CoverageMap />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
