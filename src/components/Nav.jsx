import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark"><Icon name="key" size={16} /></span>
          Beacon
        </Link>
        <div className="nav-links">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Our Work</NavLink>
          <NavLink to="/areas">Areas</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/emergency">Emergency</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <a href="tel:+16175550199" className="call-btn">
          <span className="dot"></span>
          (617) 555-0199
        </a>
      </div>
    </nav>
  )
}
