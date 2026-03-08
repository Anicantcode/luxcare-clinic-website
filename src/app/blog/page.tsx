'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = ['All', 'Cardiology', 'Dermatology', 'Wellness', 'Technology', 'Nutrition', 'Mental Health']

const articles = [
  {
    id: 1,
    category: 'Cardiology',
    title: 'Understanding Preventive Cardiology: Why Indians Are at Higher Risk',
    excerpt: 'Indians develop heart disease a decade earlier than Western populations. Leading cardiologist Dr. Meera Krishnan explains the genetic, dietary, and lifestyle factors — and what you can do today.',
    author: 'Dr. Meera Krishnan',
    date: 'March 5, 2026',
    readTime: '5 min read',
    img: 'https://picsum.photos/600/400?random=31',
  },
  {
    id: 2,
    category: 'Dermatology',
    title: 'Laser vs Chemical Peel: What's Right for Your Skin Type',
    excerpt: 'With India's diverse skin tones ranging from Type III to Type VI on the Fitzpatrick scale, choosing the wrong resurfacing treatment can cause hyperpigmentation. Here's how to decide.',
    author: 'Dr. Sneha Kapoor',
    date: 'Feb 28, 2026',
    readTime: '4 min read',
    img: 'https://picsum.photos/600/400?random=32',
  },
  {
    id: 3,
    category: 'Wellness',
    title: 'Yoga & Heart Health: Evidence-Based Benefits for Indian Lifestyles',
    excerpt: 'A landmark AIIMS study confirms what yogis have known for millennia — consistent pranayama practice lowers systolic blood pressure by up to 12 mmHg in high-stress urban professionals.',
    author: 'Dr. Ananya Bose',
    date: 'Feb 20, 2026',
    readTime: '6 min read',
    img: 'https://picsum.photos/600/400?random=33',
  },
  {
    id: 4,
    category: 'Technology',
    title: 'AI in Radiology: How Machines Are Detecting Cancer Earlier',
    excerpt: 'LuxCare's partnership with IIT Bombay has brought deep-learning radiology models that detect early-stage lung nodules with 94% sensitivity — outperforming the global radiologist average.',
    author: 'Dr. Rahul Desai',
    date: 'Feb 14, 2026',
    readTime: '7 min read',
    img: 'https://picsum.photos/600/400?random=34',
  },
  {
    id: 5,
    category: 'Nutrition',
    title: 'The Anti-Inflammatory Indian Diet: Superfoods You Already Own',
    excerpt: 'Turmeric, tulsi, amla, and jeera are more than kitchen staples — they are clinically validated anti-inflammatory agents. Our nutritionist maps the science to your masala dabba.',
    author: 'Dt. Priya Nambiar',
    date: 'Feb 7, 2026',
    readTime: '5 min read',
    img: 'https://picsum.photos/600/400?random=35',
  },
  {
    id: 6,
    category: 'Mental Health',
    title: 'Addressing Mental Health Stigma in High-Achieving Indian Families',
    excerpt: '"Log kya kahenge" continues to delay treatment for anxiety and depression in India's professional class. Dr. Pooja Verma discusses culturally sensitive therapy approaches that are finally breaking through.',
    author: 'Dr. Pooja Verma',
    date: 'Jan 30, 2026',
    readTime: '8 min read',
    img: 'https://picsum.photos/600/400?random=36',
  },
]

const categoryColors: Record<string, string> = {
  Cardiology: 'bg-red-900/50 text-red-300',
  Dermatology: 'bg-pink-900/50 text-pink-300',
  Wellness: 'bg-green-900/50 text-green-300',
  Technology: 'bg-blue-900/50 text-blue-300',
  Nutrition: 'bg-yellow-900/50 text-yellow-300',
  'Mental Health': 'bg-purple-900/50 text-purple-300',
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(45deg, #C9A84C 1px, transparent 1px), linear-gradient(-45deg, #C9A84C 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase"
          >
            LuxCare Health Journal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Health <span className="text-[#C9A84C]">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-xl"
          >
            Expert perspectives from India's finest medical minds
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-gray-700 bg-white/5 flex flex-col lg:flex-row group"
        >
          <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
              alt="Cardiac Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1628]/60 hidden lg:block" />
          </div>
          <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-900/50 text-red-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Cardiology</span>
              <span className="text-gray-500 text-xs">Featured</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              The Future of Cardiac Care in India: How Minimally Invasive Surgery is Changing Lives
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              India faces one of the world's highest burdens of cardiovascular disease. Dr. Aryan Sharma discusses how robotic-assisted angioplasty is reducing recovery times from weeks to days, and why LuxCare's cath lab is leading this revolution.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>Dr. Aryan Sharma</span>
              <span>•</span>
              <span>March 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <button className="self-start px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg hover:bg-[#F5E6C8] transition-colors">
              Read Article →
            </button>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#C9A84C] text-[#0A1628] font-semibold'
                  : 'bg-white/5 border border-gray-700 text-gray-300 hover:border-[#C9A84C]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white/5 border border-gray-700 rounded-2xl overflow-hidden hover:border-[#C9A84C]/50 transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                <span className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-800 text-gray-300'}`}>
                  {article.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-xs font-medium text-gray-300">{article.author}</p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <button className="text-[#C9A84C] text-sm font-semibold hover:underline whitespace-nowrap">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
