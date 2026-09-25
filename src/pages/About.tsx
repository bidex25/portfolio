import { MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'
import CertificationCard from '@/components/about/CertificationCard'
import { skills } from '@/data/skills'
import { certifications } from '@/data/certifications'

export default function About() {
  const devSkills = skills.filter(s => s.category === 'dev')
  const mktSkills = skills.filter(s => s.category === 'marketing')

  return (
    <>
      {/* ── Page Hero ── */}
      <section style={{ background: '#1A1A1A', paddingTop: 'calc(78px + 60px)', paddingBottom: 70 }}>
        <div className="section-inner text-center">
          <SectionReveal>
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>About Me</span>
            <h1
              className="font-poppins font-black text-white"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              The Developer Who<br />Thinks Like a Marketer
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* ── About grid ── */}
      <section className="section-padded bg-black">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-6 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />

                <div className="relative overflow-hidden" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <img
                    src="/assets/img/about-photo.jpg"
                    alt="Abidemi Abolaji"
                    className="w-full object-cover"
                    style={{ aspectRatio: '4/5', objectPosition: 'center top' }}
                    loading="lazy"
                  />

                  {/* Available badge */}
                  <div
                    className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: 'rgba(5,5,5,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 bg-green-400" style={{ boxShadow: '0 0 8px rgba(34,197,94,0.7)', animation: 'blink 2s ease-in-out infinite' }} />
                    <div>
                      <p className="font-poppins font-semibold text-white" style={{ fontSize: 12 }}>Available for Projects</p>
                      <p className="flex items-center gap-2 mt-0.5" style={{ color: '#A0A0A0', fontSize: 11, fontFamily: 'Inter' }}>
                        <MapPin size={10} /> Lagos, Nigeria
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                        <Clock size={10} /> GMT+1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {['Fullstack Developer', 'Digital Marketer', 'Ads Strategist', 'WordPress Expert'].map(tag => (
                  <span
                    key={tag}
                    className="font-poppins font-semibold"
                    style={{ padding: '4px 14px', borderRadius: 100, border: '1px solid rgba(212,175,55,0.35)', color: '#D4AF37', fontSize: 11, letterSpacing: '0.04em' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-4 leading-relaxed" style={{ color: 'rgba(224,224,224,0.8)', fontSize: 'clamp(14px,1.3vw,16px)' }}>
                I started with HTML, CSS and JavaScript — the curiosity of "how do websites work?"
                quickly turned into building them professionally. Along the way, I noticed a pattern:
                most developers don't understand marketing, and most marketers don't understand the tech.
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: 'rgba(224,224,224,0.8)', fontSize: 'clamp(14px,1.3vw,16px)' }}>
                So I became both. I build conversion-focused websites with React, Node.js, PHP and
                WordPress — then drive traffic to them with Meta Ads, Google Ads, TikTok Ads and SEO.
              </p>

              <blockquote
                className="my-8 pl-4 italic leading-relaxed"
                style={{ color: 'rgba(160,160,160,0.9)', fontSize: 15, borderLeft: '2px solid rgba(212,175,55,0.4)', fontFamily: 'Inter' }}
              >
                "My focus is simple: create digital solutions that are not just beautiful, but profitable."
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/2348086506919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-full"
                >
                  Let's Work Together
                </a>
                <a href="/contact" className="btn-ghost-full">Contact Me</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section-padded" style={{ background: '#1A1A1A' }}>
        <div className="section-inner">
          <SectionReveal className="mb-14">
            <span className="eyebrow">Technical Skills</span>
            <h2 className="h2-fluid font-poppins font-black text-white">What I Work With</h2>
            <div className="gold-divider" />
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { label: 'Development', items: devSkills },
              { label: 'Marketing',   items: mktSkills },
            ].map(group => (
              <div key={group.label}>
                <p
                  className="font-poppins font-semibold uppercase mb-4"
                  style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(212,175,55,0.7)' }}
                >
                  {group.label}
                </p>
                <StaggerContainer className="grid grid-cols-2 gap-3">
                  {group.items.map(skill => {
                    const SkillIcon = skill.icon
                    return (
                    <StaggerItem key={skill.name}>
                      <div
                        className="flex items-center gap-3 rounded-xl px-4 py-3"
                        style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 250ms' }}
                        onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.3)'}
                        onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}
                      >
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                          style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.15)' }}
                        >
                          <SkillIcon size={15} style={{ color: '#D4AF37' }} />
                        </div>
                        <span className="font-inter font-medium text-white" style={{ fontSize: 13 }}>{skill.name}</span>
                      </div>
                    </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section-padded bg-black">
        <div className="section-inner">
          <SectionReveal className="mb-10">
            <span className="eyebrow">Credentials</span>
            <h2 className="h2-fluid font-poppins font-black text-white">Certifications</h2>
            <div className="gold-divider" />
          </SectionReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map(cert => (
              <StaggerItem key={cert.id}>
                <CertificationCard cert={cert} />
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ── Photo banner ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: 400, background: '#050505' }}
      >
        <img
          src="/assets/img/hotel-mural.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0.9) 100%)' }} />
        <SectionReveal className="relative z-10 text-center section-inner py-20">
          <h2 className="h2-fluid font-poppins font-black text-white mb-6">
            Ready to <span style={{ color: '#D4AF37' }}>Collaborate?</span>
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)', fontSize: 'clamp(15px,1.4vw,18px)', maxWidth: 480, margin: '0 auto 32px' }}>
            Let's build something that grows your business.
          </p>
          <a href="/contact" className="btn-gold-full" style={{ display: 'inline-flex' }}>
            Get In Touch
          </a>
        </SectionReveal>
      </section>
    </>
  )
}
