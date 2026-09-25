import { MessageSquare, Lightbulb, Zap, Target, type LucideIcon } from 'lucide-react'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'

interface Reason { icon: LucideIcon; title: string; desc: string }

const reasons: Reason[] = [
  { icon: MessageSquare, title: 'Clear Communication',    desc: "You'll always know what's happening. No ghosting, no jargon — updates at every stage in plain language." },
  { icon: Lightbulb,     title: 'Thinks Like a Marketer', desc: "Most devs build what you ask for. I think about whether it will actually convert visitors into customers." },
  { icon: Zap,           title: 'Fast & Mobile-First',    desc: 'Every site loads in under 2 seconds and works perfectly on mobile — because most of your customers are on phones.' },
  { icon: Target,        title: 'Results Over Aesthetics', desc: "Pretty is good. Profitable is better. I design with one goal: helping your business get more customers online." },
]

export default function WhyMe() {
  return (
    <section className="section-padded" style={{ background: '#1A1A1A' }}>
      <div className="section-inner">
        <SectionReveal className="text-center mb-14">
          <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Why Work With Me</span>
          <h2 className="h2-fluid font-poppins font-black text-white">
            Not Just a Developer.<br />
            <span style={{ color: '#D4AF37' }}>A Business Partner.</span>
          </h2>
          <div className="gold-divider-center" />
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div
                className="rounded-2xl p-6 h-full cursor-default"
                style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 280ms, transform 280ms cubic-bezier(0.16,1,0.3,1)' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(212,175,55,0.25)'; d.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(255,255,255,0.07)'; d.style.transform = 'none'; }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  <Icon size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="font-poppins font-bold text-white mb-3" style={{ fontSize: 16 }}>{title}</h3>
                <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.7, fontFamily: 'Inter' }}>{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
