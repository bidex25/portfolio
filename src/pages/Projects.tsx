import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'
import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <>
      {/* Page hero */}
      <section style={{ background: '#1A1A1A', paddingTop: 'calc(78px + 60px)', paddingBottom: 70 }}>
        <div className="section-inner text-center">
          <SectionReveal>
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Portfolio</span>
            <h1
              className="font-poppins font-black text-white"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 16 }}
            >
              Projects
            </h1>
            <p style={{ color: 'rgba(224,224,224,0.7)', fontSize: 'clamp(14px,1.3vw,18px)', maxWidth: 520, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
              Six live, client-facing projects — each one a real business problem solved with code and strategy.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padded bg-black">
        <div className="section-inner">
          <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map(project => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
