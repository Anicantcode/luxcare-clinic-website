'use client';

import { useRef } from 'react';
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

const values = [
  {
    icon: '⭐',
    title: 'Excellence',
    desc: 'We accept nothing less than the highest standards in every interaction — from diagnosis to discharge.',
  },
  {
    icon: '🤝',
    title: 'Compassion',
    desc: 'Every patient is treated like a member of our own family, with warmth, dignity and personalised attention.',
  },
  {
    icon: '🔬',
    title: 'Innovation',
    desc: 'Pioneering India\'s adoption of robotic surgery and AI diagnostics, setting new benchmarks in care.',
  },
];

const timeline = [
  { year: '2009', event: 'Clinic founded in Mumbai with 5 specialists and a vision for world-class medicine.' },
  { year: '2012', event: 'Delhi branch inaugurated at Connaught Place, serving North India\'s elite.' },
  { year: '2015', event: 'First robotic surgery performed in Western India — a landmark in Indian healthcare.' },
  { year: '2018', event: 'Achieved JCI International Accreditation, joining a global top-5% of hospitals.' },
  { year: '2022', event: 'Bangalore Centre inaugurated by the Union Health Minister at UB City.' },
  { year: '2024', event: 'AI Diagnostic Centre launched — first of its kind in India, powered by deep learning.' },
];

const team = [
  { name: 'Dr. Aryan Sharma', spec: 'Cardiology', img: 'https://i.pravatar.cc/300?img=1' },
  { name: 'Dr. Priya Mehta', spec: 'Dermatology', img: 'https://i.pravatar.cc/300?img=5' },
  { name: 'Dr. Rohan Gupta', spec: 'Orthopedics', img: 'https://i.pravatar.cc/300?img=8' },
  { name: 'Dr. Kavitha Nair', spec: 'Neurology', img: 'https://i.pravatar.cc/300?img=10' },
  { name: 'Dr. Amir Khan', spec: 'ENT', img: 'https://i.pravatar.cc/300?img=15' },
  { name: 'Dr. Sunita Reddy', spec: 'Oncology', img: 'https://i.pravatar.cc/300?img=20' },
];

const accreditations = [
  { label: 'JCI International', sub: 'Global Hospital Accreditation' },
  { label: 'NABH Certified', sub: 'National Board of Hospitals' },
  { label: 'ISO 9001:2015', sub: 'Quality Management System' },
  { label: 'Times Healthcare', sub: 'Excellence Award 2023' },
];

export default function AboutPage() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const teamRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: '-80px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' });

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF9F6]">

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0d1f3c 100%)' }}>
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 text-center px-6">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#C9A84C]">About</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white mb-4">
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 text-lg font-light">
              Founded in 2009 with a singular vision — redefining Indian healthcare.
            </motion.p>
          </div>
        </section>

        {/* FOUNDING STORY */}
        <section ref={storyRef} className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate={storyInView ? 'visible' : 'hidden'}>
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Founding Vision</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#0A1628] mt-3 mb-6">
                Born from a Dream,<br />Built with Purpose
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in 2009 by Dr. Aryan Sharma with a singular vision — to create a healthcare institution
                that Indians could be proud of on the world stage.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                After training at Johns Hopkins and the Mayo Clinic, Dr. Sharma returned to India with a mission:
                world-class medicine, delivered with the warmth and dignity every patient deserves.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, LuxCare stands as a testament to that dream — three cities, 25+ specialists, and over
                15,000 lives transformed.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp} initial="hidden" animate={storyInView ? 'visible' : 'hidden'} custom={1}
              className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A84C] opacity-30 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600"
                alt="LuxCare clinic interior"
                className="w-full h-80 object-cover rounded-sm shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section ref={valuesRef} className="py-24 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={valuesInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">What We Stand For</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white mt-3">
                Our Core Values
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp} initial="hidden" animate={valuesInView ? 'visible' : 'hidden'} custom={i}
                  className="text-center p-8 border border-[#1e2d4a] hover:border-[#C9A84C] transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-2xl mx-auto mb-6">
                    {v.icon}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-white mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section ref={timelineRef} className="py-24 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={timelineInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Milestones</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#0A1628] mt-3">
                Our Journey
              </h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/30" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  variants={fadeUp} initial="hidden" animate={timelineInView ? 'visible' : 'hidden'} custom={i * 0.1}
                  className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <div className="font-['Cormorant_Garamond'] text-3xl text-[#C9A84C] font-bold">{t.year}</div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">{t.event}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C9A84C] border-4 border-white shadow-md z-10" />
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM GRID */}
        <section ref={teamRef} className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={teamInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Leadership</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#0A1628] mt-3">
                Our Medical Council
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  variants={fadeUp} initial="hidden" animate={teamInView ? 'visible' : 'hidden'} custom={i * 0.1}
                  className="group bg-[#FAF9F6] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#C9A84C] rounded-sm overflow-hidden">
                  <div className="overflow-hidden h-48">
                    <img src={doc.img} alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-['Cormorant_Garamond'] text-lg text-[#0A1628]">{doc.name}</h3>
                    <p className="text-[#C9A84C] text-xs mt-1">{doc.spec}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCREDITATIONS */}
        <section className="py-20 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Certifications</span>
              <h2 className="font-['Cormorant_Garamond'] text-3xl text-white mt-3">Recognised Globally</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {accreditations.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="border border-[#C9A84C]/40 p-6 text-center hover:border-[#C9A84C] transition-colors">
                  <div className="text-[#C9A84C] font-semibold text-sm mb-1">{a.label}</div>
                  <div className="text-slate-400 text-xs">{a.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
