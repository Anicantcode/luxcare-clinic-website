'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const specialties = [
  { id: 'cardiology', name: 'Cardiology', icon: '🫀' },
  { id: 'dermatology', name: 'Dermatology', icon: '🧴' },
  { id: 'orthopedics', name: 'Orthopedics', icon: '🦴' },
  { id: 'neurology', name: 'Neurology', icon: '🧠' },
  { id: 'ent', name: 'ENT', icon: '👂' },
  { id: 'oncology', name: 'Oncology', icon: '🔬' },
]

const doctorsBySpecialty: Record<string, { id: number; name: string; credentials: string; rating: number; img: string }[]> = {
  cardiology: [
    { id: 1, name: 'Dr. Aryan Sharma', credentials: 'MBBS, MD Cardiology, FACC', rating: 4.9, img: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Dr. Priya Menon', credentials: 'MBBS, DM Cardiology, FESC', rating: 4.8, img: 'https://i.pravatar.cc/150?img=47' },
    { id: 3, name: 'Dr. Rajan Iyer', credentials: 'MBBS, MD, DNB Cardiology', rating: 4.7, img: 'https://i.pravatar.cc/150?img=12' },
  ],
  dermatology: [
    { id: 4, name: 'Dr. Sneha Kapoor', credentials: 'MBBS, MD Dermatology', rating: 4.9, img: 'https://i.pravatar.cc/150?img=48' },
    { id: 5, name: 'Dr. Vikram Nair', credentials: 'MBBS, DVD, DNB Dermatology', rating: 4.8, img: 'https://i.pravatar.cc/150?img=13' },
  ],
  orthopedics: [
    { id: 6, name: 'Dr. Suresh Pillai', credentials: 'MBBS, MS Ortho, FRCS', rating: 4.9, img: 'https://i.pravatar.cc/150?img=14' },
    { id: 7, name: 'Dr. Kavita Singh', credentials: 'MBBS, MS Ortho, DNB', rating: 4.7, img: 'https://i.pravatar.cc/150?img=49' },
  ],
  neurology: [
    { id: 8, name: 'Dr. Rahul Desai', credentials: 'MBBS, DM Neurology, FAAN', rating: 4.9, img: 'https://i.pravatar.cc/150?img=15' },
    { id: 9, name: 'Dr. Ananya Bose', credentials: 'MBBS, MD, DM Neurology', rating: 4.8, img: 'https://i.pravatar.cc/150?img=50' },
  ],
  ent: [
    { id: 10, name: 'Dr. Kiran Reddy', credentials: 'MBBS, MS ENT, DNB', rating: 4.8, img: 'https://i.pravatar.cc/150?img=16' },
    { id: 11, name: 'Dr. Pooja Verma', credentials: 'MBBS, MS ENT, DLORCS', rating: 4.7, img: 'https://i.pravatar.cc/150?img=51' },
  ],
  oncology: [
    { id: 12, name: 'Dr. Anil Mathur', credentials: 'MBBS, MD Oncology, MRCP', rating: 4.9, img: 'https://i.pravatar.cc/150?img=17' },
    { id: 13, name: 'Dr. Leena Shah', credentials: 'MBBS, DNB Oncology, FASCO', rating: 4.8, img: 'https://i.pravatar.cc/150?img=52' },
  ],
}

const availableDates = [3, 5, 6, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 28]
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const monthDays = Array.from({ length: 31 }, (_, i) => i + 1)
const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-4 h-4 ${s <= Math.floor(rating) ? 'text-[#C9A84C]' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-400 text-sm ml-1">{rating}</span>
    </div>
  )
}

export default function AppointmentsPage() {
  const [step, setStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', age: '', insurance: '', reason: '' })
  const [focusedField, setFocusedField] = useState('')
  const bookingRef = `LUX-2024-${Math.floor(1000 + Math.random() * 9000)}`

  const doctors = doctorsBySpecialty[selectedSpecialty] || []
  const selectedDoctorObj = doctors.find(d => d.id === selectedDoctor)

  const handleNext = () => setStep(s => Math.min(s + 1, 5))
  const handleBack = () => setStep(s => Math.max(s - 1, 1))

  const formFields = [
    { id: 'name', label: 'Full Name', type: 'text' },
    { id: 'phone', label: 'Phone (+91)', type: 'tel' },
    { id: 'email', label: 'Email Address', type: 'email' },
    { id: 'age', label: 'Age', type: 'number' },
    { id: 'insurance', label: 'Insurance Provider (optional)', type: 'text' },
  ]

  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Book an <span className="text-[#C9A84C]">Appointment</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg"
        >
          Premium healthcare, seamlessly scheduled
        </motion.p>
      </section>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto px-6 mb-10">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2 z-0" />
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-[#C9A84C] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
          {[1, 2, 3, 4, 5].map(s => (
            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
              <motion.div
                animate={{ scale: step === s ? 1.2 : 1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  step > s ? 'bg-[#C9A84C] text-[#0A1628]' : step === s ? 'bg-[#C9A84C] text-[#0A1628]' : 'bg-gray-700 text-gray-400'
                }`}
              >
                {step > s ? '✓' : s}
              </motion.div>
              <span className="text-xs text-gray-500 hidden md:block">
                {['Specialty', 'Doctor', 'Schedule', 'Details', 'Confirm'][s - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-semibold mb-6 text-center">Select a Specialty</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {specialties.map(sp => (
                  <button
                    key={sp.id}
                    onClick={() => setSelectedSpecialty(sp.id)}
                    className={`p-5 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-3 ${
                      selectedSpecialty === sp.id
                        ? 'border-[#C9A84C] bg-[#C9A84C]/20 text-[#C9A84C]'
                        : 'border-gray-700 bg-white/5 hover:border-[#C9A84C]/50 text-gray-300'
                    }`}
                  >
                    <span className="text-3xl">{sp.icon}</span>
                    <span className="font-medium">{sp.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!selectedSpecialty}
                  className="px-8 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg disabled:opacity-40 hover:bg-[#F5E6C8] transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-semibold mb-6 text-center">Select Your Doctor</h2>
              <div className="grid gap-4 mb-8">
                {doctors.map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 text-left ${
                      selectedDoctor === doc.id
                        ? 'border-[#C9A84C] bg-[#C9A84C]/10'
                        : 'border-gray-700 bg-white/5 hover:border-[#C9A84C]/50'
                    }`}
                  >
                    <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A84C]/40" />
                    <div>
                      <p className="font-semibold text-lg">{doc.name}</p>
                      <p className="text-gray-400 text-sm mb-1">{doc.credentials}</p>
                      <StarRating rating={doc.rating} />
                    </div>
                    {selectedDoctor === doc.id && (
                      <div className="ml-auto w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0A1628] text-sm font-bold">✓</div>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-[#C9A84C] transition-colors">← Back</button>
                <button onClick={handleNext} disabled={!selectedDoctor} className="px-8 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg disabled:opacity-40 hover:bg-[#F5E6C8] transition-colors">Next →</button>
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-semibold mb-6 text-center">Select Date & Time</h2>
              {/* Calendar */}
              <div className="bg-white/5 rounded-xl p-5 mb-6 border border-gray-700">
                <p className="text-[#C9A84C] font-semibold text-center mb-4 text-lg">March 2026</p>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayLabels.map(d => <div key={d} className="text-center text-xs text-gray-500 font-medium py-1">{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {/* offset: March 1 2026 is Sunday = 0 */}
                  {Array.from({ length: 0 }).map((_, i) => <div key={`e${i}`} />)}
                  {monthDays.map(day => {
                    const available = availableDates.includes(day)
                    const selected = selectedDate === day
                    return (
                      <button
                        key={day}
                        onClick={() => available && setSelectedDate(day)}
                        disabled={!available}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                          selected ? 'bg-[#C9A84C] text-[#0A1628] font-bold' :
                          available ? 'bg-white/10 hover:bg-[#C9A84C]/30 text-white' :
                          'text-gray-600 cursor-not-allowed'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>
              {/* Time Slots */}
              <p className="text-gray-400 mb-3 font-medium">Available Time Slots</p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {timeSlots.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                      selectedTime === t
                        ? 'border-[#C9A84C] bg-[#C9A84C]/20 text-[#C9A84C]'
                        : 'border-gray-700 text-gray-300 hover:border-[#C9A84C]/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-[#C9A84C] transition-colors">← Back</button>
                <button onClick={handleNext} disabled={!selectedDate || !selectedTime} className="px-8 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg disabled:opacity-40 hover:bg-[#F5E6C8] transition-colors">Next →</button>
              </div>
            </motion.div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-semibold mb-6 text-center">Patient Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {formFields.map(field => (
                  <div key={field.id} className={`relative ${field.id === 'name' || field.id === 'email' ? 'md:col-span-1' : ''}`}>
                    <input
                      type={field.type}
                      id={field.id}
                      value={form[field.id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField('')}
                      className="w-full bg-[#0A1628] border-2 border-gray-700 rounded-lg px-4 pt-6 pb-2 text-white focus:border-[#C9A84C] focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor={field.id}
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === field.id || form[field.id as keyof typeof form]
                          ? 'top-2 text-xs text-[#C9A84C]'
                          : 'top-4 text-sm text-gray-500'
                      }`}
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="relative mb-8">
                <textarea
                  id="reason"
                  rows={4}
                  value={form.reason}
                  onChange={e => setForm(f => ({ ...f, reason: e.target.value }))}
                  onFocus={() => setFocusedField('reason')}
                  onBlur={() => setFocusedField('')}
                  className="w-full bg-[#0A1628] border-2 border-gray-700 rounded-lg px-4 pt-6 pb-2 text-white focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="reason"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'reason' || form.reason
                      ? 'top-2 text-xs text-[#C9A84C]'
                      : 'top-4 text-sm text-gray-500'
                  }`}
                >
                  Reason for Visit
                </label>
              </div>
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-[#C9A84C] transition-colors">← Back</button>
                <button onClick={handleNext} disabled={!form.name || !form.phone || !form.email} className="px-8 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg disabled:opacity-40 hover:bg-[#F5E6C8] transition-colors">Confirm Booking →</button>
              </div>
            </motion.div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 rounded-full bg-[#C9A84C]/20 border-4 border-[#C9A84C] flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h2 className="text-3xl font-bold text-[#C9A84C] mb-2">Booking Confirmed!</h2>
              <p className="text-gray-400 mb-6">Your appointment has been scheduled successfully</p>
              <div className="bg-white/5 border border-[#C9A84C]/30 rounded-xl p-6 max-w-md mx-auto mb-8 text-left space-y-3">
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span className="text-gray-400">Booking Reference</span>
                  <span className="text-[#C9A84C] font-mono font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Doctor</span>
                  <span className="font-medium">{selectedDoctorObj?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span className="font-medium">March {selectedDate}, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Patient</span>
                  <span className="font-medium">{form.name}</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="px-6 py-3 border border-[#C9A84C] text-[#C9A84C] rounded-lg hover:bg-[#C9A84C]/10 transition-colors flex items-center gap-2">
                  📅 Add to Calendar
                </button>
                <a href="/" className="px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg hover:bg-[#F5E6C8] transition-colors">
                  Back to Home
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  )
}
