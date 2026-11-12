import { Link, useParams, Navigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { CASES } from '../data/services.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const c = CASES.find(x => x.slug === slug)
  if (!c) return <Navigate to="/work" replace />
  const related = CASES.filter(x => x.catSlug === c.catSlug && x.slug !== c.slug).slice(0, 3)
  const iconKey = c.catSlug === 'automotive' ? 'car' : c.catSlug === 'residential' ? 'home' : c.catSlug === 'commercial' ? 'building' : 'safe'
  const gradient = c.catSlug === 'automotive' ? '#EEF2F7,#CDD8E4'
    : c.catSlug === 'residential' ? '#F5EEE4,#DDCCB0'
    : c.catSlug === 'commercial' ? '#EDF0E8,#D2DAC2'
    : '#F0ECE8,#CFC5B8'

  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/work">Our Work</Link><span className="sep">/</span>
            <span className="cur">{c.title}</span>
          </div>
          <Reveal><div className="sec-tag">{c.category}</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">{c.title}</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">{c.location}, MA · {c.date}</p></Reveal>
        </div>
      </section>

      <section style={{ padding: '32px 0 clamp(60px, 9vh, 100px)' }}>
        <div className="wrap">
          <Reveal>
            <div style={{
              aspectRatio: '16/10',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid var(--line)',
              marginBottom: 32,
              boxShadow: '0 1px 2px rgba(10,10,10,0.05), 0 20px 48px rgba(10,10,10,0.1), 0 40px 80px rgba(10,10,10,0.08)',
              display: 'grid', placeItems: 'center',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.7), transparent 50%), radial-gradient(circle at 70% 80%, rgba(10,10,10,0.1), transparent 50%), linear-gradient(135deg, ${gradient})`,
              }}/>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 24px, rgba(10,10,10,0.03) 24px 25px)',
              }}/>
              <div style={{ position: 'absolute', inset: 24, border: '1px dashed rgba(10,10,10,0.15)', borderRadius: 10 }}/>
              <Icon name={iconKey} size={120} />
              {['tl','tr','bl','br'].map(k => (
                <span key={k} style={{
                  position: 'absolute', width: 20, height: 20,
                  border: '2px solid var(--ink)', opacity: 0.4,
                  ...(k==='tl' && { top: 14, left: 14, borderRight: 0, borderBottom: 0 }),
                  ...(k==='tr' && { top: 14, right: 14, borderLeft: 0, borderBottom: 0 }),
                  ...(k==='bl' && { bottom: 14, left: 14, borderRight: 0, borderTop: 0 }),
                  ...(k==='br' && { bottom: 14, right: 14, borderLeft: 0, borderTop: 0 }),
                }}/>
              ))}
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48 }}>
            <div>
              <Reveal>
                <h3 style={{ fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', margin: '0 0 10px' }}>The problem</h3>
                <p style={{ margin: '0 0 24px', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65 }}>{c.problem}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 style={{ fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Approach</h3>
                <p style={{ margin: '0 0 24px', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65 }}>{c.approach}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 style={{ fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Result</h3>
                <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65 }}>{c.result}</p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <aside style={{
                background: 'linear-gradient(180deg, #FFF, #F9F7F1)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r)',
                padding: 24,
                position: 'sticky', top: 90, height: 'fit-content',
                boxShadow: '0 1px 2px rgba(10,10,10,0.05), 0 10px 24px rgba(10,10,10,0.06)',
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Job details</div>
                {c.specs.map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--line)', fontSize: 13 }}>
                    <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>{k}</span>
                    <span style={{ fontWeight: 600, textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 12 }}>{v}</span>
                  </div>
                ))}
                <a href="tel:+16175550199" className="btn-primary red" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>Call for similar work</a>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section alt">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Reveal><div className="sec-tag">More {c.category.toLowerCase()} work</div></Reveal>
                <Reveal delay={0.08}><h2>Related jobs.</h2></Reveal>
              </div>
            </div>
            <div className="work-grid">
              {related.map(rc => (
                <Link key={rc.slug} to={`/work/${rc.slug}`} className={`work-card ${rc.catClass}`}>
                  <div className="ph-bg"></div>
                  <div className="ph"><Icon name={iconKey} size={60} /></div>
                  <div className="work-info">
                    <div className="cat">{rc.category}</div>
                    <div className="ttl">{rc.title}</div>
                    <div className="loc">{rc.location} · {rc.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
