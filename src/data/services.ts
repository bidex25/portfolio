import { Monitor, Megaphone, Globe, TrendingUp } from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'webdev',
    icon: Monitor,
    title: 'Website Development',
    description:
      'From sleek landing pages to full-scale web applications — built for speed, SEO, and conversions.',
    features: [
      'Business & portfolio websites',
      'Landing pages optimised for conversion',
      'E-commerce (WooCommerce & custom)',
      'Web apps (React + Node.js / PHP)',
      'API integrations & payment gateways',
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Paid ads and organic growth strategies that put your business in front of the right people.',
    features: [
      'Meta (Facebook & Instagram) Ads',
      'Google Ads (Search, Display, Shopping)',
      'TikTok Ads',
      'SEO (on-page & technical)',
      'Analytics & performance reporting',
    ],
  },
  {
    id: 'wordpress',
    icon: Globe,
    title: 'WordPress Solutions',
    description:
      'Professional WordPress sites built fast, optimised for search, and easy for you to manage.',
    features: [
      'Custom theme design & development',
      'WooCommerce stores',
      'Speed optimisation & caching',
      'SEO setup (Yoast / Rank Math)',
      'Ongoing maintenance & support',
    ],
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Growth Strategy',
    description:
      'Strategic consulting that connects your digital presence to your business revenue goals.',
    features: [
      'Digital audit & opportunity mapping',
      'Conversion rate optimisation (CRO)',
      'Tech + marketing strategy alignment',
      'KPI setting & performance tracking',
      'Monthly reporting & recommendations',
    ],
  },
]
