"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = ["All", "Cardiology", "Wellness", "Nutrition", "Technology", "Research"];

const posts = [
  { id: 1, title: "Advances in Minimally Invasive Cardiac Surgery", category: "Cardiology", date: "Feb 28, 2026", excerpt: "New robotic techniques are reducing recovery times for cardiac patients by up to 60%, transforming outcomes at LuxCare.", img: "https://picsum.photos/seed/blog1/600/400" },
  { id: 2, title: "The Science of Luxury Recovery", category: "Wellness", date: "Feb 20, 2026", excerpt: "Studies confirm patients in premium environments recover 30% faster. Here's what the research says.", img: "https://picsum.photos/seed/blog2/600/400" },
  { id: 3, title: "Personalised Nutrition Plans for Post-Surgery", category: "Nutrition", date: "Feb 15, 2026", excerpt: "Our team of dietitians shares how tailored nutrition accelerates wound healing and boosts immunity.", img: "https://picsum.photos/seed/blog3/600/400" },
  { id: 4, title: "AI in Oncology: Early Detection Saves Lives", category: "Technology", date: "Feb 10, 2026", excerpt: "LuxCare deploys AI-powered imaging that detects tumours 2 years earlier than conventional screening.", img: "https://picsum.photos/seed/blog4/600/400" },
  { id: 5, title: "Groundbreaking Research in Neuroplasticity", category: "Research", date: "Feb 5, 2026", excerpt: "Our neurology department publishes findings on stroke recovery that are reshaping global protocols.", img: "https://picsum.photos/seed/blog5/600/400" },
  { id: 6, title: "Holistic Wellness: Ayurveda Meets Modern Medicine", category: "Wellness", date: "Jan 28, 2026", excerpt: "How integrating ancient Ayurvedic practices with evidence-based medicine creates superior patient outcomes.", img: "https://picsum.photos/seed/blog6/600/400" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6 bg-gradient-to-b from-navy to-navy-dark text-center">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">Insights & Knowledge</p>
          <h1 className="text-5xl font-serif font-bold text-white mb-6">LuxCare <span className="gold-text">Journal</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Expert perspectives on health, wellness, and the future of luxury healthcare.</p>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm transition ${activeCategory === c ? "bg-yellow-400 text-navy font-semibold" : "glass text-gray-300 hover:border-yellow-400/40"}`}>
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="glass rounded-xl overflow-hidden hover:border-yellow-400/40 transition">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-yellow-400 uppercase">{p.category}</span>
                    <span className="text-xs text-gray-500">{p.date}</span>
                  </div>
                  <h3 className="font-serif text-white text-lg mb-2 leading-tight">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.excerpt}</p>
                  <Link href="#" className="inline-block mt-3 text-yellow-400 text-sm hover:underline">Read More →</Link>
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
