import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
]

const cvOptions = [
  { label: 'Web Dev CV',      file: '/assets/cv-webdev.pdf',    name: 'Abidemi-Abolaji-WebDev-CV.pdf' },
  { label: 'Marketing CV',    file: '/assets/cv-marketing.pdf', name: 'Abidemi-Abolaji-Marketing-CV.pdf' },
  { label: 'Combined Resume', file: '/assets/resume.pdf',       name: 'Abidemi-Abolaji-Resume.pdf' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [cvOpen, setCvOpen]       = useState(false)
  const location = useLocation()
  const cvRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); setCvOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  function handleCvDownload(file: string, name: string) {
    const a = document.createElement('a')
    a.href = file
    a.download = name
    a.click()
    setCvOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-poppins font-black text-xl tracking-tight">
            <span className="text-white">Bidex</span>
            <span className="text-gold">Tech</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-gray-dim hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CV Dropdown */}
            <div ref={cvRef} className="relative ml-2">
              <button
                onClick={() => setCvOpen((v) => !v)}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-gold/40 text-sm text-white hover:border-gold hover:text-gold transition-colors duration-200"
              >
                Download CV <ChevronDown size={14} className={`transition-transform ${cvOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-52 bg-charcoal border border-white/10 rounded-xl shadow-xl overflow-hidden"
                  >
                    {cvOptions.map((cv) => (
                      <button
                        key={cv.file}
                        onClick={() => handleCvDownload(cv.file, cv.name)}
                        className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-DEFAULT hover:bg-white/5 hover:text-gold transition-colors text-left"
                      >
                        <Download size={13} className="shrink-0" />
                        {cv.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col pt-20 px-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.path}
                  className={`block py-4 text-2xl font-poppins font-bold border-b border-white/10 ${
                    location.pathname === link.path ? 'text-gold' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              {cvOptions.map((cv) => (
                <button
                  key={cv.file}
                  onClick={() => handleCvDownload(cv.file, cv.name)}
                  className="flex items-center gap-2 text-gray-dim hover:text-gold transition-colors text-sm py-2"
                >
                  <Download size={14} /> {cv.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
