import { ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'
import SectionReveal from '@/components/ui/SectionReveal'
import { featuredProjects } from '@/data/projects'

export default function FeaturedWork() {
  return (
    <section className="section-padded" style={{ background: '#1A1A1A' }}>
      <div className="section-inner">
        <SectionReveal className="mb-14">
          <span className="eyebrow">What I Build</span>
          <h2 className="h2-fluid font-poppins font-black text-white">
            Web <span style={{ color: '#D4AF37' }}>Development</span>
          </h2>
          <div className="gold-divider" />
          <p className="max-w-xl leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)', fontSize: 'clamp(14px,1.3vw,16px)' }}>
            I build fast, modern websites and web apps — designed to look great, load in seconds,
            and convert visitors into paying customers.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-14">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <div
                className="group overflow-hidden flex flex-col"
                style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, transition: 'border-color 300ms, transform 300ms cubic-bezier(0.16,1,0.3,1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.3)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
              >
                {/* Browser bar */}
                <div style={{ background: '#222', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.55)' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(234,179,8,0.55)' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(34,197,94,0.55)' }} />
                  </div>
                  <span className="truncate" style={{ color: 'rgba(160,160,160,0.4)', fontSize: 11, fontFamily: 'Inter', marginLeft: 6 }}>
                    {project.url.replace('https://', '')}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ height: 220, background: '#222' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} style={{ padding: '2px 10px', borderRadius: 100, background: 'rgba(212,175,55,0.1)', color: '#D4AF37', fontSize: 11, fontFamily: 'Inter' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-poppins font-bold text-white mb-2" style={{ fontSize: 18 }}>{project.title}</h3>
                  <p className="leading-relaxed mb-4 flex-1" style={{ color: 'rgba(224,224,224,0.7)', fontSize: 14, fontFamily: 'Inter' }}>{project.solution}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium"
                    style={{ color: '#D4AF37', fontSize: 13, fontFamily: 'Inter' }}
                  >
                    Live Site <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tech stack */}
        <SectionReveal className="mb-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span style={{ color: '#A0A0A0', fontSize: 12, fontFamily: 'Inter' }}>Stack I use:</span>
            {['HTML5','CSS3','JavaScript','React','Node.js','PHP','WordPress','MySQL','TypeScript','Git'].map(s => (
              <span key={s} style={{ padding: '3px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#A0A0A0', fontSize: 11, fontFamily: 'Inter' }}>
                {s}
              </span>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <Link to="/projects" className="inline-flex items-center gap-2 font-medium group" style={{ color: '#D4AF37', fontFamily: 'Inter', fontSize: 14 }}>
            View All Projects
            <motion.span whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
              <ArrowRight size={15} />
            </motion.span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
