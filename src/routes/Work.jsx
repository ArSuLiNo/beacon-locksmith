import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { CASES } from '../data/services.js'

const MLink = motion(Link)
const CATS = ['All', 'Automotive', 'Residential', 'Commercial', 'Safes']

export default function Work() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? CASES : CASES.filter(c => c.category === cat)

  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Our Work</span></div>
          <Reveal><div className="sec-tag">Our work</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">Real jobs from across Boston.</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">Every project documented with vehicle, hardware, approach, and location.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  fontSize: 13, fontWeight: 500,
                  padding: '8px 14px',
                  background: cat === c ? 'var(--ink)' : 'var(--bg-2)',
                  color: cat === c ? 'var(--bg-2)' : 'var(--ink-2)',
                  border: `1px solid ${cat === c ? 'var(--ink)' : 'var(--line)'}`,
                  borderRadius: 999,
                  transition: 'all .15s',
                  cursor: 'pointer',
                }}
              >{c}</button>
            ))}
          </div>
          <motion.div className="work-grid" layout>
            <AnimatePresence mode="popLayout">
              {list.map((c) => (
                <MLink
                  key={c.slug}
                  to={`/work/${c.slug}`}
                  className={`work-card ${c.catClass}`}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="ph-bg"></div>
                  <div className="ph"><Icon name={c.catSlug === 'automotive' ? 'car' : c.catSlug === 'residential' ? 'home' : c.catSlug === 'commercial' ? 'building' : 'safe'} size={60} /></div>
                  <div className="work-info">
                    <div className="cat">{c.category}</div>
                    <div className="ttl">{c.title}</div>
                    <div className="loc">{c.location} · {c.date}</div>
                  </div>
                </MLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
