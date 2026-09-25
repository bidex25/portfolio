import { ArrowRight, Megaphone, Search, Music, BarChart2, LineChart, Smartphone, PenLine, Target, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'

interface Skill { icon: LucideIcon; title: string; desc: string }

const skills: Skill[] = [
  { icon: Megaphone,  title: 'Meta Ads',         desc: 'Facebook & Instagram campaigns built to generate leads, drive traffic, and close sales.' },
  { icon: Search,     title: 'Google Ads',        desc: 'Search, Display & Shopping campaigns targeting high-intent buyers at the right moment.' },
  { icon: Music,      title: 'TikTok Ads',        desc: 'Creative short-form video campaigns reaching massive, high-engagement audiences.' },
  { icon: BarChart2,  title: 'SEO',               desc: 'On-page and technical SEO that gets your business found on Google — organically.' },
  { icon: LineChart,  title: 'Google Analytics',  desc: 'Tracking setup and dashboards so every marketing decision is backed by data.' },
  { icon: Smartphone, title: 'Social Media',      desc: 'Consistent, on-brand content that builds an engaged and growing following.' },
  { icon: PenLine,    title: 'Content Strategy',  desc: 'Strategic content that educates, entertains, and converts — aligned with your goals.' },
  { icon: Target,     title: 'CRO',               desc: 'Landing page and funnel improvements designed to turn more visitors into customers.' },
]

export default function MarketingSection() {
  return (
    <section className="section-padded bg-black">
      <div className="section-inner">
        <SectionReveal className="mb-14">
          <span className="eyebrow">How I Grow Businesses</span>
          <h2 className="h2-fluid font-poppins font-black text-white">
            Digital <span style={{ color: '#D4AF37' }}>Marketing</span>
          </h2>
          <div className="gold-divider" />
          <p className="max-w-xl leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)', fontSize: 'clamp(14px,1.3vw,16px)' }}>
            Data-driven campaigns that attract the right audience, build brand awareness,
            and turn clicks into paying customers.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skills.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div
                className="p-5 rounded-2xl cursor-default"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 250ms, transform 250ms cubic-bezier(0.16,1,0.3,1)' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(212,175,55,0.3)'; d.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(255,255,255,0.06)'; d.style.transform = 'none'; }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.18)' }}
                >
                  <Icon size={18} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="font-poppins font-semibold text-white mb-1" style={{ fontSize: 13 }}>{title}</h3>
                <p style={{ color: '#A0A0A0', fontSize: 12, lineHeight: 1.6, fontFamily: 'Inter' }}>{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal>
          <Link to="/services" className="inline-flex items-center gap-2 font-medium" style={{ color: '#D4AF37', fontFamily: 'Inter', fontSize: 14 }}>
            View Marketing Services <ArrowRight size={15} />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
