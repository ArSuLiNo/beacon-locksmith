import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, as: Tag = 'div', ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
