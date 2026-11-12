import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const TABLES = [
  { head: 'Residential', rows: [
    ['Home lockout', 'Non-destructive entry', '$79–$149'],
    ['Lock rekey (per cylinder)', 'Includes 2 keys', '$25–$45'],
    ['Deadbolt install', 'Hardware extra', '$89–$149'],
    ['Broken key extraction', '', '$79–$129'],
    ['Mortise lock service', '', '$150–$300'],
  ]},
  { head: 'Automotive', rows: [
    ['Car lockout', '', '$79–$149'],
    ['Key duplication (transponder)', '', '$89–$229'],
    ['Smart key replacement', 'Varies by make/model', '$180–$450'],
    ['All keys lost', 'Includes 2 new smart keys', '$350–$850'],
    ['Ignition rebuild', '', '$180–$350'],
  ]},
  { head: 'Commercial', rows: [
    ['Commercial lockout', '', '$129–$199'],
    ['Panic bar install/service', '', '$250–$550'],
    ['Master key system', 'Per door, excluding hardware', '$45–$95'],
    ['Access control install', 'Per door', '$350–$850'],
  ]},
  { head: 'Safes & Smart Locks', rows: [
    ['Safe opening (non-destructive)', '', '$149–$450'],
    ['Safe combination change', '', '$89–$149'],
    ['Safe keypad replacement', 'Keypad extra', '$149–$249'],
    ['Smart lock install', 'Lock extra', '$99–$179'],
  ]},
]

export default function Pricing() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Pricing</span></div>
          <Reveal><div className="sec-tag">Pricing</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">Upfront prices. <em>No surprise fees.</em></h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">Service calls start at $79. Full price quoted before starting. Ranges below reflect what most jobs land at.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {TABLES.map((t, i) => (
              <Reveal key={t.head} delay={i * 0.08}>
                <div className="price-table">
                  <div className="price-head">{t.head}</div>
                  {t.rows.map(([name, note, amt]) => (
                    <div key={name} className="price-row">
                      <div>
                        <div className="svc-name">{name}</div>
                        {note && <div className="svc-note">{note}</div>}
                      </div>
                      <div className="amt">{amt}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="callout" style={{ marginTop: 24 }}>
              <div className="callout-icon-light"><Icon name="arrow" size={18} /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>What determines the final price</div>
                <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>Make and model of lock or vehicle, hardware condition, time of day (nighttime/weekend differential), and parts needed. We always quote the full price before starting — if you say no, you only pay the service call.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
