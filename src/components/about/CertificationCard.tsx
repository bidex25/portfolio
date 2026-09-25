import { ExternalLink, Award } from 'lucide-react'
import type { Certification } from '@/types'

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex items-start gap-4 bg-charcoal border border-white/8 rounded-xl p-4 hover:border-gold/30 transition-colors duration-200">
      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
        <Award size={18} className="text-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-poppins font-semibold text-sm leading-tight mb-0.5">{cert.name}</p>
        <p className="text-gray-dim text-xs font-inter">{cert.issuer} · {cert.year}</p>
      </div>
      {cert.url && (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View certification"
          className="text-gray-dim hover:text-gold transition-colors shrink-0"
        >
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  )
}
