import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import PageTransition from './components/PageTransition.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import StickyCall from './components/StickyCall.jsx'

import Home from './routes/Home.jsx'
import Services from './routes/Services.jsx'
import ServiceDetail from './routes/ServiceDetail.jsx'
import Work from './routes/Work.jsx'
import CaseStudy from './routes/CaseStudy.jsx'
import Areas from './routes/Areas.jsx'
import AreaDetail from './routes/AreaDetail.jsx'
import Pricing from './routes/Pricing.jsx'
import Emergency from './routes/Emergency.jsx'
import Contact from './routes/Contact.jsx'
import About from './routes/About.jsx'

export default function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <Nav />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:slug" element={<AreaDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <StickyCall />
    </>
  )
}
