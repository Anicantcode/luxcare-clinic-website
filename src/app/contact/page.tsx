"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6 bg-gradient-to-b from-navy to-navy-dark text-center">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h1 className="text-5xl font-serif font-bold text-white mb-6"><span className="gold-text">Contact</span> Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">We&apos;re here to help. Reach out to our team for appointments, enquiries, or emergencies.</p>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="glass rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-serif text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">We&apos;ll get back to you within 2 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="btn-gold mt-4">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-serif text-white mb-6">Send a Message</h2>
                  {(["name", "email", "phone"] as const).map(f => (
                    <div key={f}>
                      <label className="text-sm text-gray-400 capitalize">{f}</label>
                      <input type="text" value={form[f]} onChange={e => setForm(prev => ({ ...prev, [f]: e.target.value }))}
                        required className="w-full mt-1 px-4 py-3 bg-navy-light border border-gray-700 rounded text-white focus:border-yellow-400 outline-none" />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm text-gray-400">Message</label>
                    <textarea value={form.message} onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      required rows={4} className="w-full mt-1 px-4 py-3 bg-navy-light border border-gray-700 rounded text-white focus:border-yellow-400 outline-none" />
                  </div>
                  <button type="submit" className="btn-gold w-full">Send Message</button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-white mb-4">Our Locations</h2>
              {[
                { city: "Mumbai", address: "LuxCare Tower, Bandra West, Mumbai 400050", phone: "+91 22 4000 1000" },
                { city: "Delhi", address: "LuxCare Plaza, Connaught Place, New Delhi 110001", phone: "+91 11 4000 2000" },
                { city: "Bangalore", address: "LuxCare Centre, Koramangala, Bangalore 560034", phone: "+91 80 4000 3000" },
              ].map(loc => (
                <div key={loc.city} className="glass rounded-xl p-5">
                  <h3 className="font-serif text-yellow-400 mb-1">{loc.city}</h3>
                  <p className="text-gray-300 text-sm">{loc.address}</p>
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-yellow-400 text-sm mt-1 hover:underline block">{loc.phone}</a>
                </div>
              ))}

              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-5">
                <p className="text-red-400 font-bold text-sm mb-1">🚨 Emergency</p>
                <p className="text-white text-xl font-bold">1800-LUXCARE</p>
                <p className="text-gray-400 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
