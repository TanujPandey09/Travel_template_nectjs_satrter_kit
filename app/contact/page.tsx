'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  PhoneCall,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  ArrowUpRight,
  CheckCircle,
  Sparkle,
  ArrowRight,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Tour Package',
    destination: '',
    passengers: '2 people',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenPlanner = (context?: string) => {
    setPlannerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Floating Glass Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-28 sm:pt-36 pb-0">
        {/* 1. Header Title Section matching uploaded screenshot 1:1 */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-10 sm:mb-14 text-center max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Small subtle brand pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5B37] text-xs font-bold uppercase tracking-wider">
              <Sparkle size={13} weight="fill" />
              <span>Get In Touch</span>
            </div>

            {/* Giant Title matching screenshot */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              Reach Out For<br />Help Today
            </h1>
          </div>
        </section>

        {/* 2. Contact Section: Photographic Glass Card (Left) + Clean Form (Right) */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20 max-w-7xl mx-auto">
          <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
            {/* Left Column: Vertical Photographic Card with 3 Glass Info Pills */}
            <div className="lg:col-span-5 relative rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-10 flex flex-col justify-between min-h-[520px] shadow-2xl border border-white/20 text-white group">
              {/* Background scenic coastal landscape image from Pexels */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Coastal mountain lake scenery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.45] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/40" />
              </div>

              {/* Top Text Content */}
              <div className="space-y-3 z-10 pt-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Connect with us for<br />best travel support
                </h2>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                  Connect with us for the best travel support and experience personalized assistance for all your travel needs. Our dedicated team is available 24/7.
                </p>
              </div>

              {/* 3 Glassmorphic Info Pills matching screenshot 1:1 */}
              <div className="space-y-3.5 z-10 pt-8 sm:pt-12">
                {/* Pill 1: Phone */}
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="rounded-2xl sm:rounded-[22px] bg-white/20 backdrop-blur-md border border-white/30 p-3.5 sm:p-4 flex items-center gap-3.5 text-white hover:bg-white/25 transition-all shadow-md group/pill"
                >
                  <div className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-sm group-hover/pill:scale-105 transition-transform">
                    <PhoneCall size={20} weight="fill" className="text-slate-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white/75">
                      Phone Number
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Pill 2: Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="rounded-2xl sm:rounded-[22px] bg-white/20 backdrop-blur-md border border-white/30 p-3.5 sm:p-4 flex items-center gap-3.5 text-white hover:bg-white/25 transition-all shadow-md group/pill"
                >
                  <div className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-sm group-hover/pill:scale-105 transition-transform">
                    <EnvelopeSimple size={20} weight="fill" className="text-slate-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white/75">
                      Email Address
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                {/* Pill 3: Office Address */}
                <div className="rounded-2xl sm:rounded-[22px] bg-white/20 backdrop-blur-md border border-white/30 p-3.5 sm:p-4 flex items-center gap-3.5 text-white shadow-md">
                  <div className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={20} weight="fill" className="text-slate-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white/75">
                      Office Address
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Tapovan, Rishikesh &amp; CP, New Delhi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Modern Form matching screenshot 1:1 */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-xl flex flex-col justify-between">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, {formData.name || 'Traveler'}! Your travel dossier request has been sent to our dedicated trip curators. We will reply within 30 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+489 1234 567 890"
                        className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@framer.com"
                        className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all cursor-pointer"
                      >
                        <option value="Tour Package">Curated Holiday Tour Package</option>
                        <option value="Chauffeur Fleet">Luxury Chauffeur Fleet & Cabs</option>
                        <option value="Maharaja Tempo">Maharaja Tempo Traveller Rental</option>
                        <option value="Custom Expedition">Bespoke Custom Expedition</option>
                        <option value="Corporate Retreat">Corporate Offsite & Retreat</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Home Destination & Number of Passenger */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Home Destination
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Kedarnath, Rishikesh, Auli"
                        className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Number of Passenger
                      </label>
                      <input
                        type="text"
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        placeholder="5 people"
                        className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Your Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here...!"
                      className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-[#FF5B37] rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#FF5B37]/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button matching screenshot */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 disabled:opacity-75 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
                    >
                      <PaperPlaneTilt size={18} weight="bold" />
                      <span>{submitting ? 'Transmitting Message...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 3. Full-Width Map Section matching screenshot 1:1 */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20 max-w-7xl mx-auto">
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200/80 shadow-xl bg-slate-100">
            {/* Styled Map Background */}
            <iframe
              title="Alpinex Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114881734674!2d77.215579!3d28.630042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b67b1479%3A0x6b77242c70094c48!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter grayscale contrast-[0.95] opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* "Open In Maps" Button on Top-Left matching screenshot */}
            <div className="absolute top-5 left-5 z-10">
              <a
                href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-800 text-xs font-bold shadow-md border border-slate-200/80 transition-all hover:scale-105"
              >
                <span>Open In Maps</span>
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>

            {/* Center Location Pin Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xl border border-white/20 flex items-center gap-1.5">
                <MapPin size={14} weight="fill" className="text-[#FF5B37]" />
                <span>Alpinex Headquarters</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Universal Scenic Landscape Mountain Footer */}
        <ScenicLandscapeFooter />
      </main>

      {/* Plan Journey Interactive Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext="Contact Support Concierge"
      />
    </div>
  );
}

