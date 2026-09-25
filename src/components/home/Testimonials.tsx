import { Star } from 'lucide-react'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padded" style={{ background: '#1A1A1A' }}>
      <div className="section-inner">
        <SectionReveal className="mb-14">
          <span className="eyebrow">Client Reviews</span>
          <h2 className="h2-fluid font-poppins font-black text-white">What Clients Say</h2>
          <div className="gold-divider" />
          <p style={{ color: 'rgba(224,224,224,0.65)', fontSize: 'clamp(14px,1.3vw,16px)', fontFamily: 'Inter' }}>
            Real feedback from businesses I've built for.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <StaggerItem key={t.id}>
              <div
                className="relative rounded-2xl p-7 flex flex-col h-full overflow-hidden cursor-default"
                style={{
                  background: 'linear-gradient(150deg, #0D0D0D 0%, #050505 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'border-color 280ms, transform 280ms cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => {
                  const d = e.currentTarget as HTMLDivElement
                  d.style.borderColor = 'rgba(212,175,55,0.3)'
                  d.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={e => {
                  const d = e.currentTarget as HTMLDivElement
                  d.style.borderColor = 'rgba(255,255,255,0.07)'
                  d.style.transform = 'none'
                }}
              >
                {/* Top shimmer accent */}
                <div
                  className="absolute top-0 left-8 right-8 h-px pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)' }}
                />

                {/* Decorative oversized quote mark */}
                <div
                  className="absolute -top-2 right-5 font-cormorant font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: 120, color: 'rgba(212,175,55,0.06)', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5 relative">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} style={{ fill: '#D4AF37', color: '#D4AF37' }} />
                  ))}
                </div>

                {/* Quote text */}
                <p
                  className="leading-relaxed flex-1 mb-6 relative"
                  style={{ color: 'rgba(224,224,224,0.82)', fontSize: 14, fontFamily: 'Inter', fontStyle: 'italic', lineHeight: 1.85 }}
                >
                  "{t.quote}"
                </p>

                {/* Divider */}
                <div className="mb-5" style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

                {/* Author — anonymous */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-poppins font-bold text-sm shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.07))',
                      border: '1px solid rgba(212,175,55,0.3)',
                      color: '#D4AF37',
                    }}
                  >
                    {t.company.charAt(0)}
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-white" style={{ fontSize: 12 }}>{t.role}</p>
                    <p style={{ color: '#A0A0A0', fontSize: 11, fontFamily: 'Inter', letterSpacing: '0.02em' }}>{t.company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
