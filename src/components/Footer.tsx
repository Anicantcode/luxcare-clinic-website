import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Meet the Doctors', href: '/doctors' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Appointment', href: '/appointments' },
]

const specialties = [
  'Cardiology & Heart Care',
  'Orthopaedics & Spine',
  'Neurology & Brain',
  'Oncology & Cancer Care',
  'Dermatology & Aesthetics',
  'Gastroenterology',
  'Paediatrics',
  'Women's Health',
]

const locations = [
  {
    city: 'Mumbai',
    area: 'Bandra West',
    address: '14 Hill Road, Bandra West
Mumbai 400050',
  },
  {
    city: 'Delhi',
    area: 'Connaught Place',
    address: 'Block A, Connaught Place
New Delhi 110001',
  },
  {
    city: 'Bangalore',
    area: 'Koramangala',
    address: '80 Feet Road, Koramangala
Bangalore 560034',
  },
]

const socialLinks = [
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A1628' }} className="text-white">
      {/* Gold top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Column 1: Logo + About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-0.5 mb-4">
              <span
                className="text-3xl font-light tracking-widest gold-text"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                LUX
              </span>
              <span
                className="text-3xl font-light tracking-widest text-white"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                CARE
              </span>
            </div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: '0.2em' }}>
              Where Healing Meets Elegance
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              India&apos;s most trusted premium medical practice. Three decades of clinical excellence across Mumbai, Delhi, and Bangalore.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A84C', letterSpacing: '0.25em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-[#C9A84C] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A84C', letterSpacing: '0.25em' }}
            >
              Our Specialties
            </h4>
            <ul className="space-y-3">
              {specialties.map((s) => (
                <li key={s}>
                  <span className="text-white/60 text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C9A84C', opacity: 0.6 }} />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations + Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A84C', letterSpacing: '0.25em' }}
            >
              Our Locations
            </h4>
            <div className="space-y-5 mb-7">
              {locations.map((loc) => (
                <div key={loc.city}>
                  <p className="text-white text-sm font-medium mb-0.5">
                    {loc.city} <span className="text-white/40 font-normal text-xs">— {loc.area}</span>
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed whitespace-pre-line">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>

            <h4
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A84C', letterSpacing: '0.25em' }}
            >
              Get In Touch
            </h4>
            <p className="text-white/70 text-sm mb-1">+91 98765 43210</p>
            <p className="text-white/50 text-xs mb-2">Mon – Sat, 9 AM – 8 PM</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-white/40">Emergency:</span>
              <span className="text-[#C9A84C] text-sm font-medium tracking-wide">1800-589-2273</span>
            </div>
          </div>

        </div>

        {/* Gold Divider */}
        <div className="h-px w-full mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs" style={{ letterSpacing: '0.05em' }}>
            &copy; {new Date().getFullYear()} Dr. Aryan Sharma &amp; Associates. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>
            Crafted with care for India&apos;s finest
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="text-white/30 text-xs hover:text-white/60 transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
