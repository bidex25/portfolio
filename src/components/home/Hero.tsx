import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import GradientBackground from '@/components/ui/GradientBackground'
import ParticleField from '@/components/ui/ParticleField'
import { TextReveal } from '@/components/ui/SectionReveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#030303' }}
    >
      <GradientBackground />
      <ParticleField />

      {/* ── Content grid ── */}
      <div
        className="section-inner relative z-10 w-full"
        style={{ paddingTop: 'clamp(80px, 12vw, 100px)', paddingBottom: 'clamp(60px, 10vw, 140px)' }}
      >
        <div
          className="w-full grid items-center hero-grid-responsive"
          style={{ gridTemplateColumns: 'minmax(0,1fr) clamp(260px,32vw,400px)', gap: 'clamp(32px, 6vw, 80px)' }}
        >
          {/* ── Left: Text ── */}
          <div>
            {/* Eyebrow — Cormorant italic, gold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-gold block shrink-0" style={{ background: '#D4AF37' }} />
              <span className="eyebrow" style={{ margin: 0, fontSize: 'clamp(13px, 1.1vw, 15px)' }}>
                Based in Lagos, Nigeria
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="h1-fluid font-poppins font-black uppercase leading-none mb-6">
              <TextReveal text="I Build." className="text-white whitespace-nowrap" delay={0.15} />
              <TextReveal text="I Market." className="gold-shimmer whitespace-nowrap" delay={0.3} />
              <TextReveal text="I Deliver." className="text-white whitespace-nowrap" delay={0.45} />
            </h1>

            {/* Description */}
            <motion.p
              className="mb-6 max-w-lg leading-relaxed"
              style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'rgba(224,224,224,0.75)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              I build <strong className="text-white font-medium">fast, conversion-focused websites</strong> — then drive
              traffic to them with paid ads and SEO.{' '}
              <strong className="text-white font-medium">One person. Full stack. Real results.</strong>
            </motion.p>

            {/* Role pills */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-10 font-poppins"
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>Web Developer</span>
              <span style={{ color: 'rgba(212,175,55,0.3)' }}>◆</span>
              <span>Digital Marketer</span>
              <span style={{ color: 'rgba(212,175,55,0.3)' }}>◆</span>
              <span>Ads Strategist</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://wa.me/2348086506919?text=Hi%20Abidemi%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-full"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a href="/projects" className="btn-ghost-full">
                View My Work <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            className="relative order-first md:order-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold glow halo behind photo */}
            <div
              className="absolute -inset-4 -z-10 rounded-xl"
              style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 68%)' }}
            />

            <div
              className="relative overflow-hidden max-h-72 sm:max-h-96 md:max-h-none"
              style={{ aspectRatio: '3/4', borderRadius: 6 }}
            >
              <img
                src="/assets/img/studio.webp"
                alt="Abidemi Abolaji — BidexTech"
                className="w-full h-full object-cover object-center"
                style={{ filter: 'brightness(0.92) contrast(1.05)' }}
              />

              {/* Left-edge fade — blends photo into background */}
              <div
                className="absolute inset-y-0 left-0 w-2/5 pointer-events-none z-10"
                style={{ background: 'linear-gradient(to right, #030303 0%, transparent 100%)' }}
              />

              {/* Bottom fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-10"
                style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.6) 0%, transparent 100%)' }}
              />

              {/* Available badge */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl px-4 py-3 z-20"
                style={{ background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0 bg-green-400"
                  style={{ boxShadow: '0 0 8px rgba(34,197,94,0.7)', animation: 'blink 2s ease-in-out infinite' }}
                />
                <span className="font-poppins font-semibold text-white text-xs tracking-wide">Available for Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-5 left-[5vw] z-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div
          className="w-10 h-px"
          style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)', animation: 'scrollPulse 2s ease-in-out infinite' }}
        />
        <span
          className="font-poppins font-semibold uppercase"
          style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(212,175,55,0.45)' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
