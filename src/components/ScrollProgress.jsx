import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.2 })
  return (
    <div className="scroll-bar">
      <motion.div className="fill" style={{ scaleX }} />
    </div>
  )
}
