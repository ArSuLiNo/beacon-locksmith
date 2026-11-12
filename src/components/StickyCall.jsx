import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

export default function StickyCall() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a href="tel:+16175550199" className={`stick${show ? ' show' : ''}`}>
      <Icon name="phone" size={16} /> Call (617) 555-0199
    </a>
  )
}
