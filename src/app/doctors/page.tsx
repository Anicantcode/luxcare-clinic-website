"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const specialties = ["All", "Cardiology", "Oncology", "Neurology", "Orthopaedics", "Cosmetic Surgery"];

const doctors = [
  { name: "Dr. Arjun Mehta", specialty: "Cardiology", exp: "22 yrs", rating: 4.9, college: "AIIMS Delhi", img: "https://pravatar.cc/150?img=11" },
  { name: "Dr. Priya Sharma", specialty: "Oncology", exp: "18 yrs", rating: 4.8, college: "CMC Vellore", img: "https://pravatar.cc/150?img=5" },
  { name: "Dr. Rahul Verma", specialty: "Neurology", exp: "15 yrs", rating: 4.9, college: "PGIMER Chandigarh", img: "https://pravatar.cc/150?img=12" },
  { name: "Dr. Sneha Patel", specialty: "Orthopaedics", exp: "20 yrs", rating: 4.7, college: "KEM Mumbai", img: "https://pravatar.cc/150?img=9" },
  { name: "Dr. Vikram Singh", specialty: "Cardiology", exp: "25 yrs", rating: 5.0, college: "AIIMS Mumbai", img: "https://pravatar.cc/150?img=15" },
  { name: "Dr. Ananya Roy", specialty: "Cosmetic Surgery", exp: "12 yrs", rating: 4.8, college: "JIPMER Puducherry", img: "https://pravatar.cc/150?img=6" },
  { name: "Dr. Karan Bose", specialty: "Neurology", exp: "16 yrs", rating: 4.7, college: "NIMHANS Bangalore", img: "https://pravatar.cc/150?img=13" },
  { name: "Dr. Meera Nair", specialty: "Oncology", exp: "19 yrs", rating: 4.9, college: "Tata Memorial Mumbai", img: "https://pravatar.cc/150?img=7" },
];

export default function DoctorsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? doctors : doctors.filter(d => d.specialty === filter);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6 bg-gradient-to-b from-navy to-navy-dark text-center">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">Meet the Team</p>
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Our <span className="gold-text">Specialists</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Each doctor is handpicked for their clinical excellence, international training, and compassionate care.</p>
        </section>

        {/* Filter */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
            {specialties.map(s => (
              <button key={s} onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-full text-sm transition ${filter === s ? "bg-yellow-400 text-navy font-semibold" : "glass text-gray-300 hover:border-yellow-400/40"}`}>
                {s}
              </button>
            ))}
          </div>
        </section>

        {/* Cards */}
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(d => (
              <div key={d.name} className="glass rounded-xl overflow-hidden hover:border-yellow-400/40 transition">
                <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-serif text-white font-semibold">{d.name}</h3>
                  <p className="text-yellow-400 text-sm">{d.specialty}</p>
                  <p className="text-gray-400 text-xs mt-1">{d.college}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-400 text-sm">{"★".repeat(Math.floor(d.rating))}</span>
                    <span className="text-gray-400 text-xs">{d.rating}</span>
                    <span className="text-gray-500 text-xs ml-auto">{d.exp}</span>
                  </div>
                  <Link href="/appointments"
                    className="block mt-3 text-center text-xs btn-gold py-2 rounded">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
