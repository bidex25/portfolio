import { motion } from 'framer-motion'
import { type ReactNode, type CSSProperties } from 'react'

// ── TextReveal ──────────────────────────────────────────────────────────────
// Splits text into words, each sliding up from a masked clip on scroll-entry.
interface TextRevealProps {
  text: string
  className?: string
  style?: CSSProperties
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  inline?: boolean
}

export function TextReveal({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.07,
  as: Tag = 'span',
  inline = false,
}: TextRevealProps) {
  const words = text.split(' ')
  return (
    <Tag className={className} style={{ display: inline ? 'inline' : 'block', ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.08em', verticalAlign: 'bottom' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '105%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: SectionRevealProps) {
  const initial =
    direction === 'up'    ? { opacity: 0, y: 40 }  :
    direction === 'left'  ? { opacity: 0, x: -40 } :
    direction === 'right' ? { opacity: 0, x: 40 }  :
                            { opacity: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
