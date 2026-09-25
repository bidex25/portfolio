import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const socials = [
  { icon: Github,    href: 'https://github.com/bidex25',                         label: 'GitHub' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/bidex/',                label: 'LinkedIn' },
  { icon: Twitter,   href: 'https://twitter.com/thebidex',                       label: 'Twitter / X' },
  { icon: Instagram, href: 'https://instagram.com/thebidex/',                    label: 'Instagram' },
]

const footerLinks = [
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-poppins font-black text-xl">
              <span className="text-white">Bidex</span>
              <span className="text-gold">Tech</span>
            </Link>
            <p className="text-gray-dim text-sm mt-1 font-inter">
              Web Development &amp; Digital Marketing
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-gray-dim text-sm hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-dim hover:text-gold transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-dim text-xs font-inter">
          © {new Date().getFullYear()} Abidemi Abolaji — BidexTech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
