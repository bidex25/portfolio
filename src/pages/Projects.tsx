import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal, { StaggerContainer, StaggerItem, TextReveal } from '@/components/ui/SectionReveal'
import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

type Filter = 'all' | 'webdev' | 'marketing'

const filters: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Dev',      value: 'webdev' },
  { label: 'Marketing',    value: 'marketing' },
]

export default function Projects() {
  const [active, setActive] = useState<Filter>('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      {/* Page hero */}
      <section style={{ background: '#1A1A1A', paddingTop: 'calc(78px + 60px)', paddingBottom: 70 }}>
        <div className="section-inner text-center">
          <SectionReveal>
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Portfolio</span>
            <TextReveal
              as="h1"
              text="Projects"
              delay={0.1}
              className="font-poppins font-black text-white"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 16 }}
            />
            <p style={{ color: 'rgba(224,224,224,0.7)', fontSize: 'clamp(14px,1.3vw,18px)', maxWidth: 520, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
              Real work for real businesses — web development and digital marketing.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter tabs + grid */}
      <section className="section-padded bg-black">
        <div className="section-inner">

          {/* Tabs */}
          <SectionReveal className="flex justify-center mb-12">
            <div
              className="inline-flex items-center gap-1 p-1 rounded-full"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {filters.map(f => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  aria-pressed={active === f.value}
                  className="relative px-5 py-2 rounded-full text-sm font-poppins font-semibold transition-colors duration-200"
                  style={{ color: active === f.value ? '#050505' : '#A0A0A0', zIndex: 1 }}
                >
                  {active === f.value && (
                    <motion.div
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: '#D4AF37', zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {f.label}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <StaggerContainer
                className={
                  filtered.length === 1
                    ? 'flex justify-center'
                    : filtered.length === 2
                    ? 'grid md:grid-cols-2 gap-8 max-w-2xl mx-auto'
                    : 'grid md:grid-cols-2 xl:grid-cols-3 gap-8'
                }
              >
                {filtered.map(project => (
                  <StaggerItem key={project.id} className={filtered.length === 1 ? 'w-full max-w-sm' : ''}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  )
}
