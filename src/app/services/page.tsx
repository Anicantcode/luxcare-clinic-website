'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const services = [
  {
    icon: '❤️',
    title: 'Cardiology',
    desc: 'India\'s leading cardiac care unit combining interventional cardiology, electrophysiology and cardiac rehabilitation under one roof. Our team has performed over 3,000 successful procedures.',
    treatments: ['Angioplasty & Stenting', 'Bypass Surgery (CABG)', 'Echocardiography & Stress Tests', 'Cardiac Rehabilitation'],
  },
  {
    icon: '✨',
    title: 'Dermatology',
    desc: 'Advanced skin science and medical aesthetics using the latest laser platforms, bio-stimulators and evidence-based protocols. From acne to complex skin disorders, we deliver visible results.',
    treatments: ['Laser Skin Resurfacing', 'PRP Hair & Skin Therapy', 'Chemical Peels & Microneedling', 'Hair Restoration Surgery'],
  },
  {
    icon: '🦴',
    title: 'Orthopedics',
    desc: 'Robotic-assisted joint replacements, complex spine surgeries and sports injury rehabilitation. Our surgeons are trained at globally renowned institutions with outcomes that rival international benchmarks.',
    treatments: ['Robotic Knee Replacement', 'Hip Arthroplasty', 'Minimally Invasive Spine Surgery', 'Sports Rehabilitation'],
  },
  {
    icon: '🧠',
    title: 'Neurology',
    desc: 'Comprehensive brain and spine care supported by 3T MRI, intraoperative neuromonitoring and a dedicated neuro-ICU. We treat the full spectrum of neurological conditions.',
    treatments: ['Stroke Management Unit', 'Epilepsy Monitoring & Surgery', 'Memory & Dementia Clinic', 'Parkinson\'s Disease Care'],
  },
  {
    icon: '👂',
    title: 'ENT',
    desc: 'Precision ear, nose and throat care from diagnosis to complex reconstructive surgery. Our cochlear implant programme is among the busiest in South Asia.',
    treatments: ['Cochlear Implants', 'Functional Endoscopic Sinus Surgery', 'Voice Restoration & Laryngology', 'Sleep Apnea & Snoring'],
  },
  {
    icon: '🎗️',
    title: 'Oncology',
    desc: 'Comprehensive cancer care delivered by a multidisciplinary tumour board. We combine the latest systemic therapies with psychological support and palliative excellence.',
    treatments: ['Chemotherapy & Immunotherapy', 'Radiation Therapy (IMRT/IGRT)', 'Targeted Therapy', 'Palliative & Supportive Care'],
  },
];

const pricingTiers = [
  {
    name: 'Standard',
    price: '₹1,500',
    sub: 'per consultation',
    popular: false,
    features: [
      'Specialist consultation (30 min)',
      'Digital health records',
      'Prescription & follow-up notes',
      'WhatsApp health updates',
      'Basic diagnostic referral',
    ],
  },
  {
    name: 'Premium',
    price: '₹3,500',
    sub: 'per consultation',
    popular: true,
    features: [
      'Senior consultant (60 min)',
      'Priority appointment booking',
      'Comprehensive diagnostic panel',
      'Diet & lifestyle counselling',
      'Monthly wellness check-in call',
      'Dedicated care coordinator',
    ],
  },
  {
    name: 'Concierge',
    price: '₹8,000',
    sub: 'per consultation',
    popular: false,
    features: [
      'Department head consultation',
      'Same-day appointment guarantee',
      'Full body diagnostic workup',
      'Personal health concierge',
      'Home visit option (Mumbai/Delhi)',
      'Annual health report & review',
      'Airport & hotel assistance',
    ],
  },
];

const technologies = [
  {
    name: '3T MRI Scanner',
    label: 'Diagnostic Imaging',
    desc: 'Our Siemens MAGNETOM 3T MRI delivers ultra-high resolution images, enabling early detection of lesions invisible on standard machines. Critical for brain, spine and cardiac imaging.',
  },
  {
    name: 'Da Vinci Robotic Surgery',
    label: 'Surgical Precision',
    desc: 'The Da Vinci Xi system offers our surgeons unparalleled dexterity and 3D visualisation. Patients benefit from smaller incisions, less pain, and dramatically faster recovery.',
  },
  {
    name: 'AI Diagnostic Platform',
    label: 'First in India',
    desc: 'Our proprietary AI platform, co-developed with IIT Bombay, cross-references symptoms, labs and imaging to flag diagnostic possibilities — reducing misdiagnosis by 40%.',
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const gridRef = useRef(null);
  const pricingRef = useRef(null);
  const techRef = useRef(null);

  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' });
  const techInView = useInView(techRef, { once: true, margin: '-80px' });

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF9F6]">

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0d1f3c 100%)' }}>
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#C9A84C]">Services</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white mb-4">
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 text-lg font-light">
              Twelve Centres of Excellence, One Vision of Perfect Health
            </motion.p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section ref={gridRef} className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={gridInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Specialties</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#0A1628] mt-3">
                Centres of Excellence
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  variants={fadeUp} initial="hidden" animate={gridInView ? 'visible' : 'hidden'} custom={i * 0.1}
                  className="border border-slate-100 bg-[#FAF9F6] hover:border-[#C9A84C] transition-all duration-300 rounded-sm overflow-hidden">
                  <div className="p-8">
                    <div className="text-3xl mb-4">{svc.icon}</div>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#0A1628] mb-3">{svc.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="text-[#C9A84C] text-xs tracking-wide font-semibold uppercase flex items-center gap-2 hover:gap-3 transition-all">
                      {expanded === i ? 'Show Less ↑' : 'View Treatments ↓'}
                    </button>
                  </div>
                  {expanded === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 bg-[#0A1628] px-8 py-6">
                      <ul className="space-y-2 mb-6">
                        {svc.treatments.map((t) => (
                          <li key={t} className="text-slate-300 text-sm flex items-center gap-3">
                            <span className="text-[#C9A84C] text-xs">✦</span> {t}
                          </li>
                        ))}
                      </ul>
                      <Link href="/appointments"
                        className="inline-block bg-[#C9A84C] text-[#0A1628] text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#F5E6C8] transition-colors">
                        Book Consultation
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section ref={pricingRef} className="py-24 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={pricingInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Consultation Plans</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white mt-3">
                Choose Your Care Level
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  variants={fadeUp} initial="hidden" animate={pricingInView ? 'visible' : 'hidden'} custom={i}
                  className={`relative p-8 rounded-sm transition-all duration-300 ${
                    tier.popular
                      ? 'bg-[#C9A84C] text-[#0A1628]'
                      : 'border border-[#1e2d4a] hover:border-[#C9A84C] text-white'
                  }`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A1628] text-[#C9A84C] text-xs font-bold px-4 py-1 tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-['Cormorant_Garamond'] text-2xl mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold mb-1">{tier.price}</div>
                  <div className={`text-xs mb-8 ${tier.popular ? 'text-[#0A1628]/70' : 'text-slate-400'}`}>{tier.sub}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${tier.popular ? 'text-[#0A1628]' : 'text-slate-300'}`}>
                        <span className="mt-0.5 text-xs">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/appointments"
                    className={`block text-center py-3 text-sm font-bold tracking-widest uppercase transition-colors ${
                      tier.popular
                        ? 'bg-[#0A1628] text-[#C9A84C] hover:bg-[#0d1f3c]'
                        : 'bg-[#C9A84C] text-[#0A1628] hover:bg-[#F5E6C8]'
                    }`}>
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SHOWCASE */}
        <section ref={techRef} className="py-24 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" animate={techInView ? 'visible' : 'hidden'} className="text-center mb-16">
              <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-light">Infrastructure</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#0A1628] mt-3">
                Technology That Heals
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  variants={fadeUp} initial="hidden" animate={techInView ? 'visible' : 'hidden'} custom={i}
                  className="bg-white border border-slate-100 hover:border-[#C9A84C] p-8 rounded-sm transition-all duration-300 hover:shadow-lg">
                  <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-xs tracking-widest uppercase px-3 py-1 mb-6">
                    {tech.label}
                  </span>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#0A1628] mb-4">{tech.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
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
