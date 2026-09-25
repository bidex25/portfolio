import { MessageCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionReveal from '@/components/ui/SectionReveal'
import MagneticButton from '@/components/ui/MagneticButton'

export default function CTABanner() {
  return (
    <section
      className="section-padded relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #050505 0%, #111 50%, #050505 100%)',
      }}
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
      />

      {/* Animated gold orb */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, top: '50%', left: '50%', x: '-50%', y: '-50%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 60%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <SectionReveal className="relative z-10 text-center max-w-3xl mx-auto">
        <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Ready to Grow?</span>
        <h2
          className="font-poppins font-black text-white mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Let's Build Something<br />
          <span style={{ color: '#D4AF37' }}>That Works</span>
        </h2>
        <p className="mb-10 leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)', fontSize: 'clamp(15px,1.4vw,18px)', maxWidth: 520, margin: '0 auto 40px' }}>
          Whether you're starting from scratch or scaling up — I'm based in Lagos (GMT+1) and
          typically respond within 24 hours.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <a
              href="https://wa.me/2348086506919?text=Hi%20Abidemi%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-full"
              style={{ fontSize: 14, paddingInline: 36, paddingBlock: 16 }}
            >
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:abolajiabidemi2000@gmail.com"
              className="btn-ghost-full"
              style={{ fontSize: 14, paddingInline: 36, paddingBlock: 16 }}
            >
              <Mail size={17} /> Send an Email
            </a>
          </MagneticButton>
        </div>
      </SectionReveal>
    </section>
  )
}
