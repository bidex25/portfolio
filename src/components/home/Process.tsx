import { Users2, Palette, Settings2, Rocket, type LucideIcon } from 'lucide-react'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'

interface Step { num: string; icon: LucideIcon; title: string; desc: string }

const steps: Step[] = [
  { num: '01', icon: Users2,    title: 'Discovery', desc: 'We talk about your business, your goals, and what success looks like. I ask the right questions so I understand exactly what you need.' },
  { num: '02', icon: Palette,   title: 'Design',    desc: 'I plan the structure and visual direction — layout, user flow, wireframes — before writing a single line of code.' },
  { num: '03', icon: Settings2, title: 'Build',     desc: "Clean, fast, scalable code. You get progress updates throughout — not radio silence until it's done." },
  { num: '04', icon: Rocket,    title: 'Launch',    desc: 'We go live. I handle deployment, do a final quality check, and make sure everything works perfectly.' },
]

export default function Process() {
  return (
    <section className="section-padded bg-black">
      <div className="section-inner">
        <SectionReveal className="text-center mb-14">
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>My Process</span>
          <h2 className="h2-fluid font-poppins font-black text-white">
            How I <span style={{ color: '#D4AF37' }}>Work</span>
          </h2>
          <div className="gold-divider-center" />
          <p style={{ color: 'rgba(224,224,224,0.75)', fontSize: 'clamp(14px,1.3vw,16px)' }}>
            A simple, transparent process so you always know what to expect.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
            <StaggerItem key={step.num}>
              <div
                className="relative rounded-2xl p-6 h-full cursor-default"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 280ms, transform 280ms cubic-bezier(0.16,1,0.3,1)' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(212,175,55,0.3)'; d.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(255,255,255,0.07)'; d.style.transform = 'none'; }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-6 h-px z-0"
                    style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.3), transparent)' }}
                  />
                )}

                {/* Step number */}
                <span
                  className="font-cormorant font-bold block leading-none mb-4"
                  style={{ fontSize: 52, color: 'rgba(212,175,55,0.15)' }}
                >
                  {step.num}
                </span>

                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.18)' }}
                >
                  <Icon size={18} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="font-poppins font-bold text-white mb-2" style={{ fontSize: 16 }}>{step.title}</h3>
                <p style={{ color: '#A0A0A0', fontSize: 13, lineHeight: 1.7, fontFamily: 'Inter' }}>{step.desc}</p>
              </div>
            </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
