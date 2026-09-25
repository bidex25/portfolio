import { ExternalLink, Target, User, TrendingUp, Lightbulb } from 'lucide-react'
import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group flex flex-col overflow-hidden"
      style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, transition: 'border-color 300ms, transform 300ms cubic-bezier(0.16,1,0.3,1)' }}
      onMouseEnter={e => { const d = e.currentTarget; d.style.borderColor = 'rgba(212,175,55,0.3)'; d.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { const d = e.currentTarget; d.style.borderColor = 'rgba(255,255,255,0.07)'; d.style.transform = 'none'; }}
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
      <div className="relative overflow-hidden" style={{ height: 180, background: '#0a0a0a' }}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span key={tag} style={{ padding: '2px 10px', borderRadius: 100, background: 'rgba(212,175,55,0.1)', color: '#D4AF37', fontSize: 11, fontFamily: 'Inter' }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-poppins font-bold text-white mb-1" style={{ fontSize: 18 }}>{project.title}</h3>
        {project.client && (
          <p style={{ color: '#A0A0A0', fontSize: 11, fontFamily: 'Inter', marginBottom: 16 }}>{project.client}</p>
        )}

        {/* Case study rows */}
        <div className="space-y-3 mb-5 flex-1">
          {[
            { icon: Target,     label: 'Problem',    text: project.problem  },
            { icon: User,       label: 'My Role',    text: project.role     },
            { icon: TrendingUp, label: 'Result',     text: project.result   },
            ...(project.learned ? [{ icon: Lightbulb, label: 'Key Learning', text: project.learned }] : []),
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="flex gap-2">
              <Icon size={13} style={{ color: '#D4AF37', flexShrink: 0, marginTop: 3 }} />
              <div>
                <span style={{ color: 'rgba(160,160,160,0.6)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 2, fontFamily: 'Inter' }}>
                  {label}
                </span>
                <p style={{ color: '#E0E0E0', fontSize: 13, lineHeight: 1.6, fontFamily: 'Inter' }}>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium"
          style={{ color: '#D4AF37', fontSize: 13, fontFamily: 'Inter', textDecoration: 'none' }}
        >
          View Live Site <ExternalLink size={13} />
        </a>
      </div>
    </article>
  )
}
