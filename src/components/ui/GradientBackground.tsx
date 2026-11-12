import { motion } from 'framer-motion'

// Encoded SVG noise — adds organic film-grain texture over the gradient
const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Primary gold — large, top-left, dominant */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '80vw', height: '80vw',
          top: '-30%', left: '-22%',
          background: 'radial-gradient(circle at 38% 38%, rgba(212,175,55,0.32) 0%, rgba(212,175,55,0.1) 38%, transparent 62%)',
          filter: 'blur(32px)',
        }}
        animate={{ x: [0, 50, -25, 0], y: [0, -38, 26, 0], scale: [1, 1.1, 0.94, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Deep purple — top-right contrast */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '58vw', height: '58vw',
          top: '-18%', right: '-18%',
          background: 'radial-gradient(circle at 55% 38%, rgba(120,40,210,0.26) 0%, rgba(80,20,160,0.1) 42%, transparent 65%)',
          filter: 'blur(42px)',
        }}
        animate={{ x: [0, -38, 22, 0], y: [0, 32, -22, 0], scale: [1, 0.88, 1.12, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Warm amber — bottom-left, adds depth */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '52vw', height: '52vw',
          bottom: '-8%', left: '10%',
          background: 'radial-gradient(circle, rgba(180,110,10,0.2) 0%, transparent 62%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, 32, -28, 0], y: [0, -22, 32, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Film-grain noise overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: NOISE,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.048,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Edge vignette — darkens perimeter, keeps centre glowing */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 75% at 42% 45%, transparent 25%, rgba(3,3,3,0.72) 100%)',
        }}
      />
    </div>
  )
}
