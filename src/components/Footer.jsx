import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <span style={{ width: 26, height: 26, display: 'grid', placeItems: 'center', background: 'var(--ink)', color: 'var(--bg-2)', borderRadius: 6 }}>
                <Icon name="key" size={14} />
              </span>
              Beacon Locksmith
            </div>
            <p style={{ margin: '0 0 12px', color: 'var(--ink-2)', maxWidth: 280 }}>
              Mobile locksmith service across Greater Boston. Licensed, bonded, insured.
            </p>
            <p style={{ margin: 0, color: 'var(--accent)', fontWeight: 600 }}>(617) 555-0199</p>
          </div>
          <div>
            <h4>Services</h4>
            <Link to="/services/automotive">Automotive</Link>
            <Link to="/services/residential">Residential</Link>
            <Link to="/services/commercial">Commercial</Link>
            <Link to="/services/safes">Safes</Link>
            <Link to="/services/smart-locks">Smart locks</Link>
          </div>
          <div>
            <h4>Areas</h4>
            <Link to="/areas/boston">Boston</Link>
            <Link to="/areas/cambridge">Cambridge</Link>
            <Link to="/areas/brookline">Brookline</Link>
            <Link to="/areas/newton">Newton</Link>
            <Link to="/areas">All 30+ areas</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/work">Our work</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Beacon Locksmith · Boston, MA</span>
          <span>Licensed & insured · MA-LOCK-47829</span>
        </div>
      </div>
    </footer>
  )
}
