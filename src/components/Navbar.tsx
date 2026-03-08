'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'glass-dark shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 group">
              <span
                className="text-3xl font-light tracking-widest gold-text transition-all duration-300 group-hover:tracking-[0.35em]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                LUX
              </span>
              <span
                className="text-3xl font-light tracking-widest text-white transition-all duration-300 group-hover:tracking-[0.35em]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                CARE
              </span>
              <span className="ml-2 w-px h-6 bg-gold-DEFAULT opacity-60" style={{ background: '#C9A84C' }} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-widest uppercase transition-all duration-300 group ${
                    pathname === link.href
                      ? 'text-[#C9A84C]'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{ letterSpacing: '0.12em', fontSize: '0.7rem' }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/appointments"
                className="hidden lg:block btn-gold px-6 py-2.5 rounded-full text-xs tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                Book Appointment
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-px bg-white transition-all duration-300 ${
                    mobileOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
                  }`}
                />
                <span
                  className={`block h-px bg-white transition-all duration-300 ${
                    mobileOpen ? 'w-0 opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`block h-px bg-white transition-all duration-300 ${
                    mobileOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'
                  }`}
                />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,22,40,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {/* Decorative line */}
          <div className="w-12 h-px mb-4" style={{ background: '#C9A84C' }} />

          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-4xl font-light tracking-widest transition-all duration-300 ${
                pathname === link.href ? 'text-[#C9A84C]' : 'text-white/80 hover:text-white'
              }`}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-12 h-px my-4" style={{ background: '#C9A84C' }} />

          <Link
            href="/appointments"
            className="btn-gold px-10 py-3.5 rounded-full text-sm tracking-widest uppercase mt-4"
            style={{ letterSpacing: '0.15em' }}
          >
            Book Appointment
          </Link>

          <p className="text-white/30 text-xs tracking-widest uppercase mt-4" style={{ letterSpacing: '0.2em' }}>
            +91 98765 43210
          </p>
        </div>
      </div>
    </>
  )
}
