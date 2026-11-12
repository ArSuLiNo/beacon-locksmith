import { Link, useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { SERVICES, CASES } from '../data/services.js'

function FaqItem({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--line)', padding: '22px 0' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          width: '100%', gap: 20,
          fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em',
          textAlign: 'left', padding: 0,
        }}
      >
        <span>{q}</span>
        <span style={{
          fontSize: 24, color: open ? 'var(--accent)' : 'var(--ink-3)',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform .3s cubic-bezier(.2,.9,.3,1.2), color .2s',
          lineHeight: 1,
        }}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              paddingTop: 14, color: 'var(--ink-2)',
              fontSize: 15, lineHeight: 1.6, maxWidth: 680,
            }}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find(x => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />
  const relatedCases = CASES.filter(c => c.catSlug === s.slug).slice(0, 3)

  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/services">Services</Link><span className="sep">/</span>
            <span className="cur">{s.shortTitle}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <Reveal><div className="sec-tag">{s.shortTitle}</div></Reveal>
              <Reveal delay={0.08}><h1 className="page-h1">{s.title}.</h1></Reveal>
              <Reveal delay={0.16}><p className="page-lede">{s.long}</p></Reveal>
              <Reveal delay={0.24}>
                <div className="cta-row">
                  <a href="tel:+16175550199" className="btn-primary">Call for quote <Icon name="arrow" size={14} /></a>
                  <Link to="/contact" className="btn-ghost">Send a message</Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="elev-card">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Service call from</div>
                    <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.03em' }}>${s.priceFrom}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>final price quoted before work starts</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Hours</div>
                    <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>7am – 11pm</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Every day · 24h emergency</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--line)', marginTop: 20, paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-2)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8v10H3V11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                  Licensed · bonded · insured · MA-LOCK-47829
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">What's included</div></Reveal>
              <Reveal delay={0.08}><h2>What we handle in a {s.shortTitle.toLowerCase()} call.</h2></Reveal>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {s.features.map(([h, p], i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div className="feat">
                  <div className="feat-num">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em', margin: '0 0 4px' }}>{h}</h4>
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>{p}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {s.brands.length > 0 && (
        <section className="section alt">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Reveal><div className="sec-tag">{s.slug === 'automotive' ? 'Supported makes' : 'Brands we service'}</div></Reveal>
                <Reveal delay={0.08}><h2>We work with the gear you have.</h2></Reveal>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
              {s.brands.map((b, i) => (
                <Reveal key={b} delay={i * 0.02}>
                  <div className="brand-tile">{b}</div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="callout">
                <div className="callout-icon-light"><Icon name="phone" size={18} /></div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>Don't see your make or brand?</div>
                  <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.5 }}>The list above is what we see most — not everything we support. <a href="tel:+16175550199" style={{ color: 'var(--accent)', fontWeight: 600 }}>Call us</a> and we'll tell you on the phone.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {relatedCases.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Reveal><div className="sec-tag">Recent {s.shortTitle.toLowerCase()} work</div></Reveal>
                <Reveal delay={0.08}><h2>Jobs we've done.</h2></Reveal>
              </div>
              <Reveal delay={0.16}><Link to="/work" className="sec-link">All projects <Icon name="arrow" size={12} /></Link></Reveal>
            </div>
            <div className="work-grid">
              {relatedCases.map((c) => (
                <Link key={c.slug} to={`/work/${c.slug}`} className={`work-card ${c.catClass}`}>
                  <div className="ph-bg"></div>
                  <div className="ph"><Icon name={c.catSlug === 'automotive' ? 'car' : c.catSlug === 'residential' ? 'home' : c.catSlug === 'commercial' ? 'building' : 'safe'} size={60} /></div>
                  <div className="work-info">
                    <div className="cat">{c.category}</div>
                    <div className="ttl">{c.title}</div>
                    <div className="loc">{c.location} · {c.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">FAQ</div></Reveal>
              <Reveal delay={0.08}><h2>Common questions.</h2></Reveal>
            </div>
          </div>
          <div style={{ maxWidth: 800 }}>
            {s.faqs.map(([q, a], i) => <FaqItem key={q} q={q} a={a} i={i} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <Reveal><div className="pre">◆ 7am – 11pm · Every day</div></Reveal>
        <Reveal delay={0.08}><h2>Locked out? Call directly.</h2></Reveal>
        <Reveal delay={0.16}><p>Direct line to your technician — no call center. Service call from $79.</p></Reveal>
        <Reveal delay={0.24}>
          <a href="tel:+16175550199" className="phone-xl"><Icon name="phone" size={28} /> (617) 555-0199</a>
        </Reveal>
      </div>
    </section>
  )
}
