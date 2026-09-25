import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'dwtacc',
    title: 'Digital World Tech Academy',
    url: 'https://digitalworldtech.academy',
    image: '/assets/img/proj-digitalworld.webp',
    tags: ['React', 'PHP', 'LMS'],
    client: 'Digital World Tech Academy',
    role: 'Frontend Developer + LMS Module Developer',
    problem:
      'The academy needed a professional web presence and a custom Learning Management System to deliver courses online, issue certificates, and manage student progress.',
    solution:
      'Built the entire marketing frontend in React with a PHP backend for the LMS module — including student dashboards, course progress tracking, and certificate generation.',
    result:
      'The platform now enrolls 100+ students monthly. Students self-enroll, track progress, and receive digital certificates automatically — no manual admin required.',
    featured: true,
  },
  {
    id: 'bms',
    title: 'Business Management System',
    url: 'https://reports.digitalworldtech.academy',
    github: 'https://github.com/bidex25/reports-dashboard',
    image: '/assets/img/proj-bizmanager.webp',
    tags: ['React', 'TypeScript', 'PHP', 'MySQL'],
    client: 'Digital World Tech Academy',
    role: 'Lead Frontend Developer',
    problem:
      'The academy had multiple subsidiaries with no unified system for tracking reports, tasks, and team performance across branches.',
    solution:
      'Built a multi-subsidiary management platform in React + TypeScript with role-based access control (RBAC), a real-time notification system, task management, and cross-branch reporting dashboards backed by a PHP/MySQL API.',
    result:
      'All staff now submit reports and reviews directly through the dashboard instead of WhatsApp or email. Management gets consolidated reports across every subsidiary in one place — no more chasing updates.',
    learned:
      'RBAC across nested subsidiaries required a careful permission model — used a hierarchical roles table with scoped access rather than flat permission flags.',
    featured: true,
  },
  {
    id: 'device-care',
    title: 'Device Care Consult',
    url: 'https://devicecaregroup.com',
    image: '/assets/img/proj-devicecare.webp',
    tags: ['WordPress', 'WooCommerce', 'Paystack'],
    client: 'Device Care Consult, Ghana',
    role: 'Full-stack WordPress Developer',
    problem:
      'The client had no online presence and was losing customers who searched for device repair services in Ghana. All bookings were phone-based, creating scheduling chaos.',
    solution:
      'Built a WooCommerce-powered service booking platform on WordPress with Paystack payment integration, a custom repair request flow, and a product store for accessories.',
    result:
      'Launched in under 3 weeks. The client now receives online bookings daily and processes payments without manual follow-up — eliminating the phone-only bottleneck entirely.',
    learned:
      "Paystack's GHS currency handling required custom gateway configuration beyond the standard WooCommerce setup.",
  },
  {
    id: 'qaxum',
    title: 'Qaxum',
    url: 'https://qaxum.com',
    image: '/assets/img/proj-qaxum.webp',
    tags: ['React', 'Node.js', 'WhatsApp API'],
    client: 'Aevo Technologies',
    role: 'Frontend Developer (React)',
    problem:
      'African SMBs needed a low-friction way to share their business identity and sell products without needing a full website or technical setup.',
    solution:
      'Built the React frontend for Qaxum — a platform that lets businesses create digital business cards and WhatsApp-powered stores with a drag-and-drop builder and shareable links.',
    result:
      'Product launched and onboarded early business users across Nigeria. Businesses can set up a full WhatsApp storefront in under 10 minutes.',
  },
  {
    id: 'bestmobile',
    title: 'Best Mobile',
    url: 'https://bestmobile-admin-website.vercel.app',
    image: '/assets/img/proj-bestmobile.webp',
    tags: ['React', 'Node.js', 'Stripe'],
    client: 'Aevo Technologies',
    role: 'Frontend Developer (React)',
    problem:
      'Vehicle owners in the US needed an on-demand mobile repair service — similar to Uber for mechanics — with transparent pricing and real-time technician tracking.',
    solution:
      'Built the customer-facing React frontend for Best Mobile, including service booking flow, Stripe payment integration, technician availability display, and job status tracking.',
    result:
      'Delivered a complete booking-to-payment frontend — from service selection through Stripe checkout to live job tracking — and deployed to Vercel. Stripe integration validated end-to-end.',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
