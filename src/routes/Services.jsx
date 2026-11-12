import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Services</span></div>
          <Reveal><div className="sec-tag">Services</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">Every lock. Every door. Every situation.</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">Six core service lines, built for the gear we see most across Greater Boston.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="services">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link to={`/services/${s.slug}`} className={`svc${s.slug === 'emergency' ? ' urgent' : ''}`}>
                  <div className="svc-icon"><Icon name={s.iconKey} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="svc-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
