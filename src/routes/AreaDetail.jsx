import { Link, useParams, Navigate } from 'react-router-dom'
import CoverageMap from '../components/CoverageMap.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { AREAS, SERVICES, CASES } from '../data/services.js'

export default function AreaDetail() {
  const { slug } = useParams()
  const a = AREAS.find(x => x.slug === slug)
  if (!a) return <Navigate to="/areas" replace />
  const related = CASES.filter(c => c.area === a.slug).slice(0, 3)

  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/areas">Areas</Link><span className="sep">/</span>
            <span className="cur">{a.name}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <Reveal><div className="sec-tag">{a.name}, MA</div></Reveal>
              <Reveal delay={0.08}><h1 className="page-h1">Locksmith in {a.name}.</h1></Reveal>
              <Reveal delay={0.16}><p className="page-lede">{a.note}</p></Reveal>
              <Reveal delay={0.24}>
                <div className="cta-row">
                  <a href="tel:+16175550199" className="btn-primary">Call direct <Icon name="arrow" size={14} /></a>
                  <Link to="/contact" className="btn-ghost">Get a quote</Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="hero-meta">
                  <div className="stat"><span className="num">{a.eta}</span><span className="lbl">Typical response</span></div>
                  <div className="stat"><span className="num">{a.pop}</span><span className="lbl">Population</span></div>
                  <div className="stat"><span className="num">$79</span><span className="lbl">From</span></div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <CoverageMap highlight={a.slug} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">Services in {a.name}</div></Reveal>
              <Reveal delay={0.08}><h2>What we do here.</h2></Reveal>
            </div>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`svc${s.slug === 'emergency' ? ' urgent' : ''}`}>
                <div className="svc-icon"><Icon name={s.iconKey} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section alt">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Reveal><div className="sec-tag">Recent {a.name} work</div></Reveal>
                <Reveal delay={0.08}><h2>Jobs we've done nearby.</h2></Reveal>
              </div>
            </div>
            <div className="work-grid">
              {related.map(c => {
                const iconKey = c.catSlug === 'automotive' ? 'car' : c.catSlug === 'residential' ? 'home' : c.catSlug === 'commercial' ? 'building' : 'safe'
                return (
                  <Link key={c.slug} to={`/work/${c.slug}`} className={`work-card ${c.catClass}`}>
                    <div className="ph-bg"></div>
                    <div className="ph"><Icon name={iconKey} size={60} /></div>
                    <div className="work-info">
                      <div className="cat">{c.category}</div>
                      <div className="ttl">{c.title}</div>
                      <div className="loc">{c.location} · {c.date}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
