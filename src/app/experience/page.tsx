'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const amenities = [
  { icon: '🛏️', title: 'Private Luxury Suites', desc: 'King-size beds with pillow-top mattresses, ensuite marble bathroom with rainfall shower' },
  { icon: '🍽️', title: 'Gourmet Cuisine', desc: 'Chef-prepared multi-cuisine meals with full dietary customisation including diabetic, cardiac, and Jain options' },
  { icon: '🎩', title: 'Concierge Service', desc: '24/7 dedicated patient coordinator for every need — from family accommodation to travel arrangements' },
  { icon: '🚗', title: 'Valet Parking', desc: 'Complimentary luxury valet parking for patients and their families at all LuxCare facilities' },
  { icon: '💉', title: '24/7 Nursing', desc: 'Dedicated bedside nurse on call with response time under 90 seconds, trained in luxury patient care' },
  { icon: '🌿', title: 'Premium Linen', desc: '600-thread count Egyptian cotton linen, changed twice daily, with hypoallergenic pillow options' },
  { icon: '📺', title: 'Entertainment System', desc: '55" 4K smart TV with Netflix, Prime, Hotstar, and unlimited high-speed WiFi throughout your stay' },
  { icon: '🧘', title: 'Spa & Wellness', desc: 'Pre-discharge wellness treatments including aromatherapy, gentle massage, and meditation sessions' },
]

const rooms = [
  {
    name: 'Executive Suite',
    price: '₹18,000',
    img: 'https://picsum.photos/600/400?random=21',
    features: ['King-size bed', 'Marble ensuite', 'City view balcony'],
  },
  {
    name: 'Presidential Suite',
    price: '₹35,000',
    img: 'https://picsum.photos/600/400?random=22',
    features: ['Separate living room', 'Jacuzzi bath', 'Butler service'],
  },
  {
    name: 'Recovery Villa',
    price: '₹55,000',
    img: 'https://picsum.photos/600/400?random=23',
    features: ['Private garden', 'Full kitchen', 'Physiotherapy room'],
  },
  {
    name: 'Family Suite',
    price: '₹28,000',
    img: 'https://picsum.photos/600/400?random=24',
    features: ['2 beds + sofa set', 'Family dining area', 'Children's corner'],
  },
]

const testimonials = [
  {
    quote: 'The room was more beautiful than a 5-star hotel. The marble bathroom, the thread-count sheets — I truly forgot I was in a hospital.',
    name: 'Mrs. Deepa Rao',
    city: 'Mumbai',
    img: 'https://i.pravatar.cc/80?img=47',
  },
  {
    quote: 'The food was extraordinary. The chef personally came to discuss my cardiac diet and prepared special low-sodium, high-flavour meals every single day.',
    name: 'Mr. Sanjay Patel',
    city: 'Ahmedabad',
    img: 'https://i.pravatar.cc/80?img=60',
  },
  {
    quote: 'Having a dedicated coordinator from day one made everything seamless. Our entire family felt cared for, not just the patient.',
    name: 'Mrs. Rekha Sharma',
    city: 'Pune',
    img: 'https://i.pravatar.cc/80?img=48',
  },
]

const comparisonRows = [
  { feature: 'Private Suite', luxcare: true, standard: false, govt: false },
  { feature: 'Gourmet Chef Meals', luxcare: true, standard: false, govt: false },
  { feature: '24/7 Coordinator', luxcare: true, standard: false, govt: false },
  { feature: 'Valet Parking', luxcare: true, standard: false, govt: false },
  { feature: 'Spa & Wellness', luxcare: true, standard: false, govt: false },
  { feature: 'Nurse Response Time', luxcare: '< 2 min', standard: '15 min', govt: '45 min' },
]

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0d1f3c] to-[#0A1628]" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase"
          >
            The LuxCare Experience
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-5 leading-tight"
          >
            A Stay Unlike <span className="text-[#C9A84C]">Any Other</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-xl leading-relaxed"
          >
            Luxury hospitality meets medical excellence in our premium patient suites
          </motion.p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">World-Class <span className="text-[#C9A84C]">Amenities</span></h2>
            <p className="text-gray-400 text-lg">Every comfort, thoughtfully provided</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-white/5 border border-gray-700 hover:border-[#C9A84C]/50 rounded-xl p-6 group transition-all duration-300"
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <div className="w-8 h-0.5 bg-[#C9A84C] mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-white">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Luxury <span className="text-[#C9A84C]">Room Types</span></h2>
            <p className="text-gray-400 text-lg">Accommodations that redefine patient comfort</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl overflow-hidden border border-gray-700 hover:border-[#C9A84C]/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#0A1628] font-bold px-3 py-1 rounded-full text-sm">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6 bg-white/5">
                  <h3 className="text-xl font-bold mb-3">{room.name}</h3>
                  <ul className="space-y-2">
                    {room.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-5 w-full py-2.5 border border-[#C9A84C] text-[#C9A84C] rounded-lg hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all text-sm font-semibold">
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Patient <span className="text-[#C9A84C]">Stories</span></h2>
            <p className="text-gray-400 text-lg">Hear from those who lived the experience</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative bg-white/5 border border-gray-700 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Video-style overlay */}
                <div className="h-48 bg-gradient-to-br from-[#0d1f3c] to-[#1a2f4a] flex items-center justify-center relative">
                  <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full border-2 border-[#C9A84C] object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#0A1628] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <svg className="w-8 h-8 text-[#C9A84C]/40 mb-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-[#C9A84C]">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">How We <span className="text-[#C9A84C]">Compare</span></h2>
            <p className="text-gray-400 text-lg">The LuxCare difference, by the numbers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-x-auto rounded-2xl border border-gray-700"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-5 text-gray-400 font-medium">Feature</th>
                  <th className="p-5 text-center bg-[#C9A84C]/10">
                    <span className="text-[#C9A84C] font-bold text-base">LuxCare</span>
                  </th>
                  <th className="p-5 text-center text-gray-400 font-medium">Standard Private</th>
                  <th className="p-5 text-center text-gray-400 font-medium">Government</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="p-5 text-gray-300">{row.feature}</td>
                    <td className="p-5 text-center bg-[#C9A84C]/5">
                      {typeof row.luxcare === 'boolean' ? (
                        row.luxcare
                          ? <span className="text-[#C9A84C] text-xl">✓</span>
                          : <span className="text-gray-600 text-xl">✗</span>
                      ) : (
                        <span className="text-[#C9A84C] font-semibold">{row.luxcare}</span>
                      )}
                    </td>
                    <td className="p-5 text-center text-gray-400">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? <span className="text-green-400">✓</span> : <span className="text-gray-600">✗</span>
                      ) : row.standard}
                    </td>
                    <td className="p-5 text-center text-gray-400">
                      {typeof row.govt === 'boolean' ? (
                        row.govt ? <span className="text-green-400">✓</span> : <span className="text-gray-600">✗</span>
                      ) : row.govt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
