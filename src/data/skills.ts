import {
  Atom, Server, Code2, Database, Palette,
  Globe, FileCode, GitBranch,
  Megaphone, Search, Music, TrendingUp,
} from 'lucide-react'
import type { Skill } from '@/types'

export const skills: Skill[] = [
  { name: 'React',         icon: Atom,      category: 'dev' },
  { name: 'Node.js',       icon: Server,    category: 'dev' },
  { name: 'PHP',           icon: Code2,     category: 'dev' },
  { name: 'MySQL',         icon: Database,  category: 'dev' },
  { name: 'CSS / Tailwind',icon: Palette,   category: 'dev' },
  { name: 'WordPress',     icon: Globe,     category: 'dev' },
  { name: 'TypeScript',    icon: FileCode,  category: 'dev' },
  { name: 'Git / GitHub',  icon: GitBranch, category: 'dev' },
  { name: 'Facebook Ads',  icon: Megaphone, category: 'marketing' },
  { name: 'Google Ads',    icon: Search,    category: 'marketing' },
  { name: 'TikTok Ads',    icon: Music,     category: 'marketing' },
  { name: 'SEO',           icon: TrendingUp,category: 'marketing' },
]
