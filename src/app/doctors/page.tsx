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
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const allDoctors = [
  {
    name: 'Dr. Aryan Sharma',
    specialty: 'Cardiology',
    credentials: 'MBBS MD DM',
    years: 18,
    rating: 4.9,
    img: 'https://i.pravatar.cc/300?img=1',
    college: 'AIIMS Delhi',
    bio: 'Pioneer of minimally invasive cardiac intervention in India. Trained at Johns Hopkins.',
  },
  {
    name: 'Dr. Priya Mehta',
    specialty: 'Dermatology',
    credentials: 'MBBS MD',
    years: 12,
    rating: 4.8,
    img: 'https://i.pravatar.cc/300?img=5',
    college: 'Grant Medical College, Mumbai',
    bio: 'Expert in laser dermatology and clinical aesthetics. Gold medallist, University of Mumbai.',
  },
  {
    name: 'Dr. Rohan Gupta',
    specialty: 'Orthopedics',
    credentials: 'MBBS MS MCh',
    years: 15,
    rating: 4.9,
    img: 'https://i.pravatar.cc/300?img=8',
    college: 'NIMHANS, Bangalore',
    bio: 'Da Vinci robotic surgery specialist with over 800 successful joint replacements.',
  },
  {
    name: 'Dr. Kavitha Nair',
    specialty: 'Neurology',
    credentials: 'MBBS DM',
    years: 14,
    rating: 4.9,
    img: 'https://i.pravatar.cc/300?img=10',
    college: 'JIPMER, Puducherry',
    bio: 'Leading authority on epilepsy and movement disorders. Fellowship from UCL London.',
  },
  {
    name: 'Dr. Amir Khan',
    specialty: 'ENT',
    credentials: 'MBBS MS',
    years: 10,
    rating: 4.8,
    img: 'https://i.pravatar.cc/300?img=15',
    college: 'Maulana Azad Medical College, Delhi',
    bio: 'Cochlear implant surgeon and voice specialist. Trained at Royal National ENT Hospital, London.',
  },
  {
    name: 'Dr. Sunita Reddy',
    specialty: 'Oncology',
    credentials: 'MBBS MD DNB',
    years: 16,
    rating: 4.9,
    img: 'https://i.pravatar.cc/300?img=20',
    college: 'Nizam\'s Institute, Hyderabad',
    bio: 'Medical oncologist specialising in breast and GI cancers. Member, ESMO and ASCO.',
  },
  {
    name: 'Dr. Vikram Bose',
    specialty: 'Cardiology',
    credentials: 'MBBS MD',
    years: 11,
    rating: 4.8,
    img: 'https://i.pravatar.cc/300?img=25',
    college: 'Calcutta Medical College',
    bio: 'Specialist in preventive cardiology and heart failure management. Runs LuxCare\'s cardiac wellness programme.',
  },
  {
    name: 'Dr. Meera Iyer',
    specialty: 'Dermatology',
    credentials: 'MBBS MD',
    years: 9,
    rating: 4.8,
    img: 'https://i.pravatar.cc/300?img=30',
    college: 'St. John\'s Medical College, Bangalore',
    bio: 'Young achiever in cosmetic dermatology and trichology. Named among India\'s Top 40 Under 40 Dermatologists.',
  },
];

const tabs = ['All', 'Cardiology', 'Dermatology', 'Orthopedics', 'Neurology', 'ENT', 'Oncology'];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-xs ${i < Math.floor(rating) ? 'text-[#C9A84C]' : 'text-slate-300'}`}>★</span>
      ))}
      <span className="text-xs text-slate-500 ml-1">{rating}</span>
    </div>
  );
}

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  const filtered = activeTab === 'All'
    ? allDoctors
    : allDoctors.filter((d) => d.specialty === activeTab);

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
              <span className="text-[#C9A84C]">Our Specialists</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white mb-4">
              Our Specialists
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 text-lg font-light">
              25+ world-class physicians, each a leader in their field.
            </motion.p>
          </div>
        </section>

        {/* FILTER TABS */}
        <section className="bg-white border-b border-slate-100 sticky top-[72px] z-30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm ${
                    activeTab === tab
                      ? 'bg-[#C9A84C] text-[#0A1628]'
                      : 'text-slate-500 hover:text-[#0A1628] hover:bg-slate-50'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR GRID */}
        <section ref={gridRef} className="py-16 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-6">

            {/* Count */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-slate-400 text-sm mb-10">
              Showing <span className="text-[#C9A84C] font-semibold">{filtered.length}</span> specialist{filtered.length !== 1 ? 's' : ''}
              {activeTab !== 'All' && <> in <span className="text-[#0A1628] font-semibold">{activeTab}</span></>}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  variants={fadeUp}
                  initial="hidden"
                  animate={gridInView ? 'visible' : 'hidden'}
                  custom={i}
                  className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-[#C9A84C]">

                  {/* Photo */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Specialty badge */}
                    <div className="absolute top-3 left-3 bg-[#0A1628]/90 text-[#C9A84C] text-xs px-2 py-1 rounded-sm font-medium">
                      {doc.specialty}
                    </div>
                    {/* Rating badge */}
                    <div className="absolute top-3 right-3 bg-[#C9A84C] text-[#0A1628] text-xs font-bold px-2 py-1 rounded-sm">
                      ★ {doc.rating}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-['Cormorant_Garamond'] text-lg text-[#0A1628] mb-0.5">{doc.name}</h3>
                    <p className="text-slate-400 text-xs mb-1">{doc.credentials}</p>
                    <p className="text-[#C9A84C] text-xs mb-2">{doc.college}</p>
                    <StarRating rating={doc.rating} />
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed line-clamp-2">{doc.bio}</p>
                    <div className="flex items-center gap-1 mt-2 mb-4">
                      <span className="text-slate-400 text-xs">{doc.years} yrs experience</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <Link href="/doctors"
                        className="flex-1 text-center border border-[#0A1628] text-[#0A1628] text-xs py-2 hover:bg-[#0A1628] hover:text-white transition-colors duration-200">
                        View Profile
                      </Link>
                      <Link href="/appointments"
                        className="flex-1 text-center bg-[#C9A84C] text-[#0A1628] text-xs font-bold py-2 hover:bg-[#F5E6C8] transition-colors duration-200">
                        Book
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-24">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-slate-500">No specialists found for this filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A1628] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto px-6">
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-white mb-4">
              Not Sure Which Specialist to See?
            </h2>
            <p className="text-slate-300 font-light mb-8">
              Our care coordinators will guide you to the right specialist based on your needs.
            </p>
            <Link href="/contact"
              className="inline-block bg-[#C9A84C] text-[#0A1628] font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#F5E6C8] transition-colors duration-300">
              Talk to a Coordinator
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
