import { motion } from 'framer-motion'
import { ArrowRight, Globe, Megaphone, Layout, TrendingUp, type LucideIcon } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'
import TiltCard from '@/components/ui/TiltCard'

interface Card { icon: LucideIcon; title: string; desc: string }

const cards: Card[] = [
  { icon: Globe,      title: 'Website Development', desc: 'Custom, fast, conversion-focused websites and web apps.' },
  { icon: Megaphone,  title: 'Digital Marketing',   desc: 'Facebook, Google & TikTok ads that drive real revenue.' },
  { icon: Layout,     title: 'WordPress Solutions', desc: 'Speed-optimised WordPress sites built to rank and convert.' },
  { icon: TrendingUp, title: 'Growth Strategy',     desc: 'End-to-end digital strategy combining web and marketing.' },
]

export default function IntroStrip() {
  return (
    <section className="section-padded bg-black">
      <div className="section-inner">
        <div className="grid items-center gap-16 intro-grid-responsive" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)' }}>

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Who I Am</span>
            <h2 className="h2-fluid font-poppins font-black text-white mb-0">
              Developer.<br />Marketer.<br />Strategist.
            </h2>
            <div className="gold-divider" />
            <p className="leading-relaxed mb-8" style={{ fontSize: 'clamp(14px,1.3vw,16px)', color: 'rgba(224,224,224,0.8)' }}>
              I don't just build websites — I build platforms that attract traffic, convert
              visitors, and generate measurable results. Based in Lagos, serving clients
              locally and globally.
            </p>
            <a href="/about" className="btn-gold-full" style={{ display: 'inline-flex' }}>
              Learn More <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right: 2×2 cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <TiltCard className="card h-full p-6 cursor-default" intensity={6}>
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                  >
                    <Icon size={20} style={{ color: '#D4AF37' }} />
                  </div>
                  <h3 className="font-poppins font-bold text-white text-sm mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A0A0A0' }}>{desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
