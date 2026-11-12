import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { SERVICES } from '../data/services.js'

const ZONES = [
  { cls: 'zone-1', color: '#16A34A', tag: 'Boston proper', time: '10–20', notes: 'Back Bay, Beacon Hill, South End, South Boston, Fenway, North End', dashOffset: 0, barWidth: '95%', n: '01' },
  { cls: 'zone-2', color: '#D97706', tag: 'Inner suburbs', time: '15–30', notes: 'Cambridge, Somerville, Brookline, Chelsea, Medford, Everett', dashOffset: 30, barWidth: '70%', n: '02' },
  { cls: 'zone-3', color: '#E63946', tag: 'Outer 128 belt', time: '25–45', notes: 'Waltham, Newton, Needham, Dedham, Lexington, Belmont', dashOffset: 70, barWidth: '45%', n: '03' },
]

export default function Emergency() {
  const emergency = SERVICES.find(s => s.slug === 'emergency')
  return (
    <div>
      <section style={{
        background: 'var(--ink)', color: 'var(--bg-2)',
        padding: 'clamp(60px,10vh,100px) 0',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(230,57,70,0.25), transparent 60%), radial-gradient(circle at 10% 90%, rgba(230,57,70,0.15), transparent 50%)',
          pointerEvents: 'none',
        }}/>
        <div className="wrap" style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--accent)', color: 'var(--bg-2)',
              padding: '8px 18px', borderRadius: 999,
              fontWeight: 600, fontSize: 14, marginBottom: 24,
            }}>● Priority dispatch · 24h</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 style={{
              fontWeight: 600, fontSize: 'clamp(48px,7vw,92px)', lineHeight: 0.98,
              letterSpacing: '-0.04em', margin: '0 0 20px', textWrap: 'balance',
            }}>Locked out right now?</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ maxWidth: 620, margin: '0 auto 36px', fontSize: 19, color: 'rgba(250,250,248,0.75)' }}>
              Call direct. Emergency work jumps the regular queue — we text you an ETA within one minute of dispatch.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a href="tel:+16175550199" className="phone-xl" style={{ background: 'var(--accent)', boxShadow: '0 20px 60px rgba(230,57,70,0.5)' }}>
              <Icon name="phone" size={28} /> (617) 555-0199
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">What we handle after hours</div></Reveal>
              <Reveal delay={0.08}><h2>Common emergency calls.</h2></Reveal>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {emergency.features.map(([h, p], i) => (
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

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><div className="sec-tag">Response times</div></Reveal>
              <Reveal delay={0.08}><h2>What to expect.</h2></Reveal>
            </div>
          </div>
          <div className="response-grid">
            {ZONES.map((z, i) => (
              <Reveal key={z.n} delay={i * 0.1}>
                <div className={`zone-card ${z.cls}`}>
                  <div className="zone-ring">
                    <svg viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="28" fill="none" stroke="#E8E6E0" strokeWidth="2"/>
                      <circle cx="30" cy="30" r="28" fill="none" stroke={z.color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="176" strokeDashoffset={z.dashOffset} transform="rotate(-90 30 30)"/>
                      <text x="30" y="34" textAnchor="middle" fontSize="9" fontWeight="700" fill={z.color}>{z.n}</text>
                    </svg>
                  </div>
                  <div className="zone-tag">{z.tag}</div>
                  <div className="zone-time">{z.time} <span>min</span></div>
                  <div className="zone-note">{z.notes}</div>
                  <div className="zone-bar"><span style={{ width: z.barWidth, background: z.color }}/></div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="callout" style={{ marginTop: 28 }}>
              <div className="callout-icon-light" style={{ background: 'linear-gradient(135deg,#FFF1F3,#FDDEE2)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>Fine print</div>
                <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>Response times are typical and depend on current schedule, weather, and traffic. A nighttime and weekend differential applies — we quote it upfront on the call.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
