import { motion } from 'framer-motion'

const tools = [
  'React', 'Node.js', 'PHP', 'WordPress', 'MySQL', 'TypeScript',
  'Facebook Ads', 'Google Ads', 'TikTok Ads', 'SEO',
]

export default function StatsBar() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: '#1A1A1A',
        borderTop: '1px solid rgba(212,175,55,0.15)',
        borderBottom: '1px solid rgba(212,175,55,0.15)',
      }}
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #1A1A1A, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #1A1A1A, transparent)' }} />

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...tools, ...tools].map((tool, i) => (
          <span key={i} className="flex items-center gap-2 shrink-0" style={{ color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter' }}>
            <span style={{ color: '#D4AF37', fontSize: 8 }}>◆</span>
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
