import { Check, MessageCircle, Zap, Star, Crown } from 'lucide-react'
import type { CSSProperties } from 'react'
import SectionReveal, { StaggerContainer, StaggerItem, TextReveal } from '@/components/ui/SectionReveal'
import TiltCard from '@/components/ui/TiltCard'
import { services } from '@/data/services'

const WA_LINK = 'https://wa.me/2348086506919?text=Hi%20Abidemi%2C%20I%27d%20like%20to%20discuss%20a%20project.'

const pricingTiers = [
  {
    icon: Zap,
    label: 'Starter',
    name: 'Landing Page',
    price: '₦120k',
    usd: '$80',
    desc: 'A single high-converting page — perfect for a campaign, a service launch, or lead capture.',
    items: ['Custom design', 'Mobile-first build', 'Contact / lead form', 'Basic SEO setup', 'Delivered in ~1 week'],
  },
  {
    icon: Star,
    label: 'Most Popular',
    name: 'Business Website',
    price: '₦250k',
    usd: '$160',
    desc: 'A full multi-page site that makes your business look like it belongs at the top of Google.',
    items: ['Up to 6 pages', 'CMS (easy updates)', 'Speed & SEO optimised', 'WhatsApp / booking integration', 'Delivered in 2–3 weeks'],
    highlight: true,
  },
  {
    icon: Crown,
    label: 'Enterprise',
    name: 'Web App / E-Commerce',
    price: 'From ₦500k',
    usd: 'From $320',
    desc: 'Custom platforms, dashboards, LMS, e-commerce — built for businesses that need real software.',
    items: ['Custom React / WordPress build', 'Payment gateway integration', 'User accounts & dashboards', 'API integrations', 'Timeline discussed per project'],
  },
]

export default function Services() {
  return (
    <>
      {/* Page hero */}
      <section style={{ background: '#1A1A1A', paddingTop: 'calc(78px + 60px)', paddingBottom: 70 }}>
        <div className="section-inner text-center">
          <SectionReveal>
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>What I Offer</span>
            <TextReveal
              as="h1"
              text="Services"
              delay={0.1}
              className="font-poppins font-black text-white"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 16 }}
            />
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

      {/* Pricing */}
      <section className="section-padded" style={{ background: '#1A1A1A' }}>
        <div className="section-inner">
          <SectionReveal className="text-center mb-14">
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Investment</span>
            <TextReveal as="h2" text="Transparent Pricing" delay={0.05} className="h2-fluid font-poppins font-black text-white" />
            <div className="gold-divider-center" />
            <p style={{ color: 'rgba(224,224,224,0.65)', fontSize: 'clamp(14px,1.3vw,16px)', fontFamily: 'Inter' }}>
              Every project is unique — these are starting points. Message me for a custom quote.
            </p>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map(tier => {
              const TierIcon = tier.icon
              return (
                <StaggerItem key={tier.name}>
                  <div
                    className="relative rounded-2xl p-7 flex flex-col h-full"
                    style={{
                      background: tier.highlight ? 'linear-gradient(150deg, #1c1600 0%, #0d0a00 100%)' : '#050505',
                      border: `1px solid ${tier.highlight ? 'rgba(212,175,55,0.45)' : 'rgba(255,255,255,0.07)'}`,
                      transition: 'transform 280ms cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none' }}
                  >
                    {tier.highlight && (
                      <div
                        className="absolute top-0 left-8 right-8 h-px pointer-events-none"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)' }}
                      />
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-xl"
                        style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                      >
                        <TierIcon size={18} style={{ color: '#D4AF37' }} />
                      </div>
                      <span
                        style={{
                          padding: '3px 10px',
                          borderRadius: 100,
                          background: tier.highlight ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.05)',
                          color: tier.highlight ? '#D4AF37' : '#A0A0A0',
                          fontSize: 10,
                          fontFamily: 'Inter',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase' as const,
                        }}
                      >
                        {tier.label}
                      </span>
                    </div>

                    <h3 className="font-poppins font-bold text-white mb-1" style={{ fontSize: 18 }}>{tier.name}</h3>
                    <p style={{ color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter', lineHeight: 1.6, marginBottom: 20 }}>{tier.desc}</p>

                    <div className="mb-6">
                      <span className="font-poppins font-black text-white" style={{ fontSize: 'clamp(26px,3vw,34px)' }}>{tier.price}</span>
                      <span style={{ color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter', marginLeft: 8 }}>{tier.usd}</span>
                    </div>

                    <ul className="space-y-2 mb-8 flex-1">
                      {tier.items.map(item => (
                        <li key={item} className="flex items-start gap-2" style={{ fontSize: 13, color: '#E0E0E0', fontFamily: 'Inter' }}>
                          <Check size={13} style={{ color: '#D4AF37', flexShrink: 0, marginTop: 3 }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full font-poppins font-semibold text-sm py-3"
                      style={{
                        background: tier.highlight ? '#D4AF37' : 'rgba(255,255,255,0.05)',
                        color: tier.highlight ? '#050505' : '#E0E0E0',
                        border: tier.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                        transition: 'opacity 200ms',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                    >
                      <MessageCircle size={14} /> Get a Quote
                    </a>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-black">
        <div className="section-inner" style={{ maxWidth: 640, margin: '0 auto' }}>
      <SectionReveal className="text-center">
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Let's Talk</span>
          <TextReveal as="h2" text="Not sure what you need?" delay={0.05} className="h2-fluid font-poppins font-black text-white mb-4" />
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
