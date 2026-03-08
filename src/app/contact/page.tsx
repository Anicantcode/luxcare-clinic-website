'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const locations = [
  {
    city: 'Mumbai',
    area: 'Bandra West',
    address: '14, Hill Road, Bandra West, Mumbai 400050',
    phone: '+91 22 6789 0000',
    hours: 'Mon–Sat 8AM–8PM, Sun 10AM–4PM',
    icon: '🏙️',
  },
  {
    city: 'New Delhi',
    area: 'Connaught Place',
    address: 'G-12, Outer Circle, Connaught Place, New Delhi 110001',
    phone: '+91 11 4567 8900',
    hours: 'Mon–Sat 8AM–8PM, Sun 10AM–4PM',
    icon: '🕌',
  },
  {
    city: 'Bangalore',
    area: 'Koramangala',
    address: '80 Feet Road, 4th Block, Koramangala, Bangalore 560034',
    phone: '+91 80 2345 6700',
    hours: 'Mon–Sat 8AM–8PM, Sun 10AM–4PM',
    icon: '🌿',
  },
]

const formFields = [
  { id: 'name', label: 'Full Name', type: 'text', colSpan: 'md:col-span-1' },
  { id: 'email', label: 'Email Address', type: 'email', colSpan: 'md:col-span-1' },
  { id: 'phone', label: 'Phone Number (+91)', type: 'tel', colSpan: 'md:col-span-1' },
  { id: 'subject', label: 'Subject', type: 'text', colSpan: 'md:col-span-1' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [focusedField, setFocusedField] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const isFloating = (id: string) => focusedField === id || !!form[id as keyof typeof form]

  return (
    <main className="min-h-screen bg-[#0A1628] text-white relative">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Connect <span className="text-[#C9A84C]">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-xl"
          >
            We are here, whenever you need us
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
            <p className="text-gray-400 text-sm mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              We respond within 2 hours
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#C9A84C]/20 border-4 border-[#C9A84C] flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#C9A84C] mb-2">Message Sent!</h3>
                <p className="text-gray-400">Our team will reach out to you within 2 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="mt-6 px-6 py-2.5 border border-[#C9A84C] text-[#C9A84C] rounded-lg hover:bg-[#C9A84C]/10 transition-colors text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {formFields.map(field => (
                    <div key={field.id} className={`relative ${field.colSpan}`}>
                      <input
                        type={field.type}
                        id={field.id}
                        value={form[field.id as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField('')}
                        required={field.id !== 'phone'}
                        className="w-full bg-[#060d1a] border-2 border-gray-700 rounded-xl px-4 pt-6 pb-2 text-white focus:border-[#C9A84C] focus:outline-none transition-colors duration-200"
                        placeholder=" "
                      />
                      <label
                        htmlFor={field.id}
                        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
                          isFloating(field.id) ? 'top-2 text-[10px] text-[#C9A84C] font-medium' : 'top-[18px] text-sm text-gray-500'
                        }`}
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full bg-[#060d1a] border-2 border-gray-700 rounded-xl px-4 pt-6 pb-2 text-white focus:border-[#C9A84C] focus:outline-none transition-colors duration-200 resize-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 pointer-events-none transition-all duration-200 ${
                      isFloating('message') ? 'top-2 text-[10px] text-[#C9A84C] font-medium' : 'top-[18px] text-sm text-gray-500'
                    }`}
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A84C] text-[#0A1628] font-bold rounded-xl hover:bg-[#F5E6C8] transition-colors text-base tracking-wide"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Location Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-bold mb-8">Our Locations</h2>
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="bg-[#060d1a] border-2 border-[#C9A84C]/25 hover:border-[#C9A84C]/60 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl mt-0.5">{loc.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-lg text-white">{loc.city}</h3>
                      <span className="text-[#C9A84C] text-sm">— {loc.area}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{loc.address}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-[#C9A84C] hover:underline font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {loc.phone}
                      </a>
                      <span className="text-gray-500 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {loc.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '< 2 hr', label: 'Response Time' },
                { value: '24/7', label: 'Emergency Line' },
                { value: '3 Cities', label: 'Locations' },
              ].map(stat => (
                <div key={stat.label} className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-4 text-center">
                  <p className="text-[#C9A84C] font-bold text-xl">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-red-950/60 border border-red-800/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
            </div>
            <div>
              <p className="text-red-300 text-xs font-semibold uppercase tracking-widest mb-1">Medical Emergency</p>
              <h3 className="text-white font-bold text-xl md:text-2xl">
                Call 1800-LUXCARE
                <span className="text-red-300 text-base font-normal ml-2">(1800-589-2273)</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Available</span>
            <span className="bg-red-900/60 border border-red-700 text-red-300 font-bold px-4 py-1.5 rounded-full text-sm">
              24/7 · All Days
            </span>
            <a
              href="tel:18005892273"
              className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-3 rounded-full shadow-2xl shadow-green-900/40 group"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm">Chat on WhatsApp</span>
      </motion.a>
    </main>
  )
}
