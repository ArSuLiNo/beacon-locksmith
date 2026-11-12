import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

export default function Contact() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Contact</span></div>
          <Reveal><div className="sec-tag">Get in touch</div></Reveal>
          <Reveal delay={0.08}><h1 className="page-h1">Call, text, or send a note.</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lede">Fastest way is a direct call. Form works for non-urgent work.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48 }}>
          <Reveal>
            <form onSubmit={(e) => { e.preventDefault(); alert('In the real build, this routes directly to the owner. Call (617) 555-0199.') }}
              style={{ background: 'linear-gradient(180deg,#FFF,#FBFAF4)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 32, boxShadow: '0 1px 2px rgba(10,10,10,0.05), 0 12px 32px rgba(10,10,10,0.07)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
                <div><label>Name</label><input required placeholder="Alex Chen" /></div>
                <div><label>Phone</label><input type="tel" required placeholder="(617) 555-0123" /></div>
              </div>
              <div style={{ marginBottom: 18 }}><label>Service needed</label>
                <select required><option value="">Select...</option><option>Car key / lockout</option><option>Home rekey</option><option>Commercial</option><option>Safe</option><option>Smart lock</option><option>Emergency</option></select>
              </div>
              <div style={{ marginBottom: 18 }}><label>Details</label><textarea rows={4} placeholder="Describe the issue..." /></div>
              <button type="submit" className="btn-primary red" style={{ width: '100%', justifyContent: 'center' }}>Send message <Icon name="arrow" size={14} /></button>
            </form>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Reveal delay={0.1}>
              <div style={{ background: 'linear-gradient(180deg,#FFF,#F9F7F1)', border: '1px solid var(--line)', borderRadius: 'var(--r)', padding: 22, boxShadow: '0 1px 2px rgba(10,10,10,0.04), 0 6px 14px rgba(10,10,10,0.04)' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>Call direct</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--accent)', marginTop: 4 }}>(617) 555-0199</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ background: 'linear-gradient(180deg,#FFF,#F9F7F1)', border: '1px solid var(--line)', borderRadius: 'var(--r)', padding: 22, boxShadow: '0 1px 2px rgba(10,10,10,0.04), 0 6px 14px rgba(10,10,10,0.04)' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>Hours</div>
                <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>7am – 11pm · Every day</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <style>{`
        form label { display:block; font-size:13px; font-weight:500; margin-bottom:6px; letter-spacing:-0.01em; }
        form input, form select, form textarea {
          width:100%; font:inherit; font-size:15px; padding:11px 14px;
          background:var(--bg); border:1px solid var(--line-2); border-radius:var(--r-sm);
          color:var(--ink); font-family:inherit;
        }
        form input:focus, form select:focus, form textarea:focus { outline:none; border-color:var(--ink); background:var(--bg-2); }
      `}</style>
    </div>
  )
}
