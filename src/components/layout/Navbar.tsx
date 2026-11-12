import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
]

const WA_LINK = 'https://wa.me/2348086506919?text=Hi%20Abidemi%2C%20I%27d%20like%20to%20discuss%20a%20project.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const ease = [0.16, 1, 0.3, 1] as const
  const dur  = 0.9

  return (
    <>
      {/* ── Desktop nav ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
        animate={{ paddingTop: scrolled ? 14 : 0 }}
        transition={{ duration: dur, ease }}
      >
        <motion.div
          className="pointer-events-auto flex items-center overflow-hidden w-full"
          animate={{
            maxWidth:         scrolled ? 560  : 1160,
            paddingLeft:      scrolled ? 22   : 24,
            paddingRight:     scrolled ? 22   : 24,
            paddingTop:       scrolled ? 9    : 0,
            paddingBottom:    scrolled ? 9    : 0,
            height:           scrolled ? 50   : 64,
            borderRadius:     scrolled ? 100  : 0,
            backgroundColor:  scrolled ? 'rgba(6,6,6,0.92)'          : 'rgba(0,0,0,0)',
            borderColor:      scrolled ? 'rgba(255,255,255,0.11)'     : 'rgba(255,255,255,0)',
            boxShadow:        scrolled ? '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)'
                                       : '0 0px 0px rgba(0,0,0,0)',
          }}
          style={{ borderWidth: 1, borderStyle: 'solid', backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
          transition={{ duration: dur, ease }}
        >
          {/* Logo — exits when pill forms */}
          <AnimatePresence mode="popLayout" initial={false}>
            {!scrolled && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0, marginRight: 0 }}
                transition={{ duration: 0.6, ease }}
                style={{ overflow: 'hidden', flexShrink: 0, marginRight: 'auto', whiteSpace: 'nowrap' }}
              >
                <Link to="/" className="font-poppins font-black text-xl tracking-tight">
                  <span className="text-white">Bidex</span>
                  <span style={{ color: '#D4AF37' }}>Tech</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav links */}
          <motion.div
            className="flex items-center"
            animate={{ gap: scrolled ? 0 : 4, marginLeft: scrolled ? 'auto' : 0, marginRight: scrolled ? 'auto' : 0 }}
            transition={{ duration: dur, ease }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-full font-inter transition-colors duration-200 whitespace-nowrap"
                style={{
                  padding: scrolled ? '6px 14px' : '8px 16px',
                  fontSize: scrolled ? 13 : 14,
                  color: location.pathname === link.path ? '#D4AF37' : 'rgba(160,160,160,0.9)',
                  transition: 'color 200ms, padding 900ms cubic-bezier(0.16,1,0.3,1), font-size 900ms cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => { if (location.pathname !== link.path) (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { if (location.pathname !== link.path) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(160,160,160,0.9)' }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            animate={{ marginLeft: scrolled ? 10 : 8 }}
            transition={{ duration: dur, ease }}
            style={{ flexShrink: 0 }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full text-white whitespace-nowrap"
              style={{
                padding: scrolled ? '6px 16px' : '8px 20px',
                fontSize: scrolled ? 12 : 13,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                background: '#D4AF37',
                color: '#050505',
                transition: 'padding 900ms cubic-bezier(0.16,1,0.3,1), opacity 200ms',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              <MessageCircle size={13} />
              {scrolled ? 'Hire Me' : "Let's Work"}
            </a>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* ── Mobile nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 h-14"
           style={{ background: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none', transition: 'background 300ms, border 300ms' }}>
        <Link to="/" className="font-poppins font-black text-lg tracking-tight">
          <span className="text-white">Bidex</span><span style={{ color: '#D4AF37' }}>Tech</span>
        </Link>
        <button className="text-white p-2" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-8 md:hidden"
            style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)' }}
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
                  className="block py-4 text-2xl font-poppins font-bold"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: location.pathname === link.path ? '#D4AF37' : '#fff' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-poppins font-bold text-sm"
                style={{ background: '#D4AF37', color: '#050505' }}
              >
                <MessageCircle size={16} /> Let's Work Together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
