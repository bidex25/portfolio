import type { LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  title: string
  url: string
  github?: string
  image: string
  tags: string[]
  client?: string
  role: string
  problem: string
  solution: string
  result: string
  learned?: string
  featured?: boolean
}

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export interface Skill {
  name: string
  icon: LucideIcon
  category: 'dev' | 'marketing'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  url?: string
}

export interface NavLink {
  label: string
  path: string
}
