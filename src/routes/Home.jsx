import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icon from '../components/Icon.jsx'
import Key3D from '../components/Key3D.jsx'
import CoverageMap from '../components/CoverageMap.jsx'
import Reveal from '../components/Reveal.jsx'
import { SERVICES, CASES, AREAS } from '../data/services.js'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)

  // GSAP ScrollTrigger: hero stage parallax + bitting caption pulse
  useGSAP(() => {
    gsap.to('.key-stage', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })
    gsap.utils.toArray('.svc').forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.06,
        scrollTrigger: { trigger: card, start: 'top 85%' },
      })
    })
  }, { scope: heroRef })

  return (
    <div ref={heroRef}>
      <section className="hero">
        <div className="wrap hero-grid">
          <Reveal>
            <div className="pill"><span className="status"></span> Available now · Dispatching in Boston</div>
            <h1 className="page-h1">Locks fixed fast. <em>Done right.</em></h1>
            <p className="hero-lede">
              Mobile locksmith for Greater Boston. Automotive, residential, commercial, safes, and smart locks — dispatched directly, on-site in minutes.
            </p>
            <div className="cta-row">
              <a href="tel:+16175550199" className="btn-primary">Call (617) 555-0199 <Icon name="arrow" size={14} /></a>
              <Link to="/contact" className="btn-ghost">Get a quote</Link>
            </div>
            <div className="hero-meta">
              <div className="stat"><span className="num">7 days</span><span className="lbl">Open every week</span></div>
              <div className="stat"><span className="num">2,400+</span><span className="lbl">Jobs completed</span></div>
              <div className="stat"><span className="num">$79</span><span className="lbl">Service call from</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="key-stage">
              <div className="key-tag"><span className="dot"></span> 3D brass key · scroll to rotate</div>
              <Key3D />
              <div className="key-caption">
                <span>Bitting · <b>5-3-7-4-6</b></span>
                <span>Scroll <b>↓</b></span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="trust">
        <div className="wrap trust-inner">
          <span className="trust-label">Trusted across Greater Boston</span>
          <div className="trust-logos">
            <span>Beacon Hill Realty</span>
            <span>North End Café</span>
            <span>MIT Housing</span>
            <span>Kendall Tech</span>
            <span>Back Bay Co-op</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">What we do</div></Reveal>
              <Reveal delay={0.08}><h2>Every lock, every situation.</h2></Reveal>
            </div>
            <Reveal delay={0.16}><Link to="/services" className="sec-link">All services <Icon name="arrow" size={12} /></Link></Reveal>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`svc${s.slug === 'emergency' ? ' urgent' : ''}`}>
                <div className="svc-icon"><Icon name={s.iconKey} size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">Recent work</div></Reveal>
              <Reveal delay={0.08}><h2>Jobs from the field.</h2></Reveal>
            </div>
            <Reveal delay={0.16}><Link to="/work" className="sec-link">View all projects <Icon name="arrow" size={12} /></Link></Reveal>
          </div>
          <div className="work-strip">
            {CASES.map((c) => (
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

      <section className="section">
        <div className="wrap">
          <div className="coverage">
            <div>
              <Reveal><div className="sec-tag">Service area</div></Reveal>
              <Reveal delay={0.08}><h2 style={{ fontWeight: 600, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.05, letterSpacing: '-0.035em', margin: '0 0 20px' }}>Serving the 128 belt.</h2></Reveal>
              <Reveal delay={0.16}>
                <p>
                  Mobile coverage across Boston, inner suburbs, and the Route 128 corridor — from the North Shore down through the Blue Hills. Real map, real streets, real pins.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="areas-list">
                  {AREAS.map(a => <Link key={a.slug} to={`/areas/${a.slug}`}>{a.name}</Link>)}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <CoverageMap />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <Reveal><div className="pre">◆ 7am – 11pm · Every day</div></Reveal>
          <Reveal delay={0.08}><h2>Locked out? Call directly.</h2></Reveal>
          <Reveal delay={0.16}><p>Direct line to your technician — no call center. Service call from $79, full price quoted before work starts.</p></Reveal>
          <Reveal delay={0.24}>
            <a href="tel:+16175550199" className="phone-xl">
              <Icon name="phone" size={28} /> (617) 555-0199
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
