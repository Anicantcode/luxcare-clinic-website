'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const stats = [
  { value: '15,000+', label: 'Patients Healed' },
  { value: '25+', label: 'Medical Specialists' },
  { value: '15', label: 'Years of Excellence' },
  { value: '4.9★', label: 'Patient Rating' },
];

const services = [
  { icon: '❤️', title: 'Cardiology', desc: 'Heart care with cutting-edge intervention techniques and compassionate follow-up.' },
  { icon: '✨', title: 'Dermatology', desc: 'Advanced skin science & aesthetic treatments using the latest laser technology.' },
  { icon: '🦴', title: 'Orthopedics', desc: 'Robotic joint replacement & sports medicine by India\'s leading surgeons.' },
  { icon: '🧠', title: 'Neurology', desc: 'Comprehensive brain & spine care with state-of-the-art neuroimaging.' },
  { icon: '👂', title: 'ENT', desc: 'Precision ear, nose & throat treatments from diagnosis to surgery.' },
  { icon: '🎗️', title: 'Oncology', desc: 'Comprehensive cancer care combining cutting-edge therapy with deep compassion.' },
];

const doctors = [
  { name: 'Dr. Aryan Sharma', cred: 'MBBS MD DM (Cardiology)', exp: '18 years', college: 'AIIMS Delhi', rating: '4.9', img: 'https://i.pravatar.cc/300?img=1' },
  { name: 'Dr. Priya Mehta', cred: 'MBBS MD (Dermatology)', exp: '12 years', college: 'Grant Medical Mumbai', rating: '4.8', img: 'https://i.pravatar.cc/300?img=5' },
  { name: 'Dr. Rohan Gupta', cred: 'MBBS MS MCh (Orthopedics)', exp: '15 years', college: 'NIMHANS', rating: '4.9', img: 'https://i.pravatar.cc/300?img=8' },
];

const testimonials = [
  {
    text: 'The level of care I received was unlike anything I\'ve experienced. The doctors are extraordinarily skilled and the facility is breathtaking.',
    name: 'Rajesh Khanna', city: 'Mumbai', type: 'Cardiac Patient',
  },
  {
    text: 'After years of searching, I finally found a clinic that combines medical excellence with genuine compassion. My skin transformation has been remarkable.',
    name: 'Ananya Singh', city: 'New Delhi', type: 'Dermatology Patient',
  },
  {
    text: 'Post my knee replacement, I was back on the golf course in 6 weeks. The physiotherapy team and robotic precision made all the difference.',
    name: 'Vikram Malhotra', city: 'Bangalore', type: 'Orthopedic Patient',
  },
];

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#C9A84C] opacity-20"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const doctorsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' });
  const doctorsInView = useInView(doctorsRef, { once: true, margin: '-80px' });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-80px' });

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF9F6]">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0d1f3c 50%, #0A1628 100%)' }}>
          <Particles />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="inline-block text-[#C9A84C] tracking-[0.3em] text-sm uppercase mb-6 font-light">
                LuxCare Medical Centre
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
              Where Healing<br />
              <span className="text-[#C9A84C]">Meets Elegance</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              India's most prestigious multi-specialty clinic, where world-class medicine meets five-star hospitality.
            </motion.p>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointments"
                className="px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-semibold tracking-wide rounded-sm hover:bg-[#F5E6C8] transition-colors duration-300">
                Book a Consultation
              </Link>
              <Link href="/services"
                className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-semibold tracking-wide rounded-sm hover:bg-[#C9A84C] hover:text-[#0A1628] transition-colors duration-300">
                Explore Our Care
              </Link>
            </motion.div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C9A84C] opacity-70">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </section>

        {/* STATS */}
        <section ref={statsRef} className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp} initial="hidden" animate={statsInView ? 'visible' : 'hidden'} custom={i}
                  className="text-center py-8 px-4 border-r border-slate-100 last:border-r-0 odd:border-r md:border-r">
                  <div className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#C9A84C] font-bold mb-2">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-sm tracking-widest uppercase font-light">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section ref={servicesRef} className="py-24 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={servicesInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Our Specialties</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white mt-3">
                Centres of Excellence
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  variants={fadeUp} initial="hidden" animate={servicesInView ? 'visible' : 'hidden'} custom={i * 0.1}
                  className="group border border-[#1e2d4a] p-8 rounded-sm hover:border-[#C9A84C] transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl text-white mb-3">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <Link href="/services"
                    className="text-[#C9A84C] text-sm tracking-wide group-hover:underline">
                    Explore →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR SPOTLIGHT */}
        <section ref={doctorsRef} className="py-24 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={doctorsInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Our Experts</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#0A1628] mt-3">
                Meet Our Visionaries
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctors.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  variants={fadeUp} initial="hidden" animate={doctorsInView ? 'visible' : 'hidden'} custom={i}
                  className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm overflow-hidden group">
                  <div className="relative overflow-hidden h-64">
                    <img src={doc.img} alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#0A1628] text-xs font-bold px-2 py-1 rounded-sm">
                      ★ {doc.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Cormorant_Garamond'] text-xl text-[#0A1628] mb-1">{doc.name}</h3>
                    <p className="text-slate-500 text-xs mb-1">{doc.cred}</p>
                    <p className="text-[#C9A84C] text-xs mb-4">{doc.college} · {doc.exp}</p>
                    <Link href="/appointments"
                      className="block text-center bg-[#0A1628] text-[#C9A84C] text-sm py-3 hover:bg-[#C9A84C] hover:text-[#0A1628] transition-colors duration-300">
                      Book Appointment
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section ref={testimonialsRef} className="py-24" style={{ background: 'rgba(245,230,200,0.3)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={testimonialsInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Patient Stories</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#0A1628] mt-3">
                Voices of Trust
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp} initial="hidden" animate={testimonialsInView ? 'visible' : 'hidden'} custom={i}
                  className="bg-white p-8 rounded-sm shadow-sm">
                  <div className="font-['Cormorant_Garamond'] text-6xl text-[#C9A84C] leading-none mb-4">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-[#C9A84C] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed mb-6 text-sm">{t.text}</p>
                  <div>
                    <div className="font-semibold text-[#0A1628] text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.city} · {t.type}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative py-24 overflow-hidden" style={{ background: '#0A1628' }}>
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white mb-6">
              Experience Healthcare Like Never Before
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 mb-10 text-lg font-light">
              Join 15,000+ patients who chose excellence. Book your consultation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="/appointments"
                className="inline-block px-12 py-5 bg-[#C9A84C] text-[#0A1628] font-bold tracking-widest text-sm uppercase hover:bg-[#F5E6C8] transition-colors duration-300"
                style={{ animation: 'pulse 2s infinite' }}>
                Book Your Appointment
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
