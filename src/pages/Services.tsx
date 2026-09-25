import { Check, MessageCircle } from 'lucide-react'
import type { CSSProperties } from 'react'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'
import TiltCard from '@/components/ui/TiltCard'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      {/* Page hero */}
      <section style={{ background: '#1A1A1A', paddingTop: 'calc(78px + 60px)', paddingBottom: 70 }}>
        <div className="section-inner text-center">
          <SectionReveal>
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>What I Offer</span>
            <h1
              className="font-poppins font-black text-white"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 16 }}
            >
              Services
            </h1>
            <p style={{ color: 'rgba(224,224,224,0.7)', fontSize: 'clamp(14px,1.3vw,18px)', maxWidth: 520, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
              End-to-end digital services — from building your website to filling it with traffic that converts.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padded bg-black">
        <div className="section-inner">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {services.map(service => {
              const ServiceIcon = service.icon
              return (
              <StaggerItem key={service.id}>
                <TiltCard
                  intensity={5}
                  className="h-full rounded-2xl p-8"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 280ms' } as CSSProperties}
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                  >
                    <ServiceIcon size={26} style={{ color: '#D4AF37' }} />
                  </div>
                  <h2 className="font-poppins font-bold text-white mb-3" style={{ fontSize: 'clamp(18px,2.5vw,24px)' }}>{service.title}</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: '#A0A0A0', fontSize: 14, fontFamily: 'Inter' }}>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map(f => (
                      <li key={f} className="flex items-start gap-2" style={{ fontSize: 13, color: '#E0E0E0', fontFamily: 'Inter' }}>
                        <Check size={14} style={{ color: '#D4AF37', flexShrink: 0, marginTop: 2 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ background: '#1A1A1A' }}>
        <div className="section-inner" style={{ maxWidth: 640, margin: '0 auto' }}>
      <SectionReveal className="text-center">
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Let's Talk</span>
          <h2 className="h2-fluid font-poppins font-black text-white mb-4">Not sure what you need?</h2>
          <div className="gold-divider-center" />
          <p className="leading-relaxed mb-8" style={{ color: 'rgba(224,224,224,0.7)', fontSize: 'clamp(14px,1.3vw,17px)', fontFamily: 'Inter' }}>
            Let's talk through your goals. I'll tell you honestly what will make the biggest
            difference for your business.
          </p>
          <a
            href="https://wa.me/2348086506919?text=Hi%20Abidemi%2C%20I%27d%20like%20to%20know%20which%20service%20is%20right%20for%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-full"
            style={{ display: 'inline-flex', fontSize: 14, paddingInline: 36, paddingBlock: 16 }}
          >
            <MessageCircle size={17} /> Let's Talk
          </a>
        </SectionReveal>
        </div>
      </section>
    </>
  )
}
