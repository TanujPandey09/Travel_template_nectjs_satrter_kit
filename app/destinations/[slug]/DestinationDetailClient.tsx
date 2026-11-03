'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  Mountains,
  CalendarBlank,
  AirplaneTilt,
  Train,
  Star,
  CheckCircle,
  ShieldCheck,
  PhoneCall,
  WhatsappLogo,
  ArrowRight,
  CaretRight,
  Sparkle,
  SuitcaseSimple,
  SunHorizon,
  CaretDown,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { DestinationDetail } from '@/data/destinationsData';
import { AGENCY_CONFIG } from '@/data/travelData';

interface DestinationDetailClientProps {
  destination: DestinationDetail;
  relatedDestinations: DestinationDetail[];
}

export const DestinationDetailClient: React.FC<DestinationDetailClientProps> = ({
  destination,
  relatedDestinations,
}) => {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');
  const [selectedTravelers, setSelectedTravelers] = useState('2 Persons');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || `Expedition to ${destination.name}`);
    setPlannerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            BREADCRUMBS
           ========================================================================= */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-4 max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <CaretRight size={12} weight="bold" />
          <Link href="/destinations" className="hover:text-slate-900 transition-colors">
            Destinations
          </Link>
          <CaretRight size={12} weight="bold" />
          <span className="text-slate-900 font-bold truncate">{destination.name}</span>
        </div>

        {/* =========================================================================
            HERO SHOWCASE
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-10 max-w-7xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] bg-slate-900 shadow-2xl flex flex-col justify-end p-6 sm:p-12 text-white">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.62] contrast-[1.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/30" />

            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between gap-3 z-10">
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                <Sparkle size={13} weight="fill" className="text-[#FF5B37]" />
                <span>{destination.category}</span>
              </span>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-bold text-white">
                <Star size={14} weight="fill" className="text-amber-400" />
                <span>{destination.rating}</span>
                <span className="text-white/70">({destination.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Hero Main Content */}
            <div className="relative z-10 max-w-3xl space-y-3">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B37] flex items-center gap-1.5">
                <MapPin size={15} weight="fill" />
                <span>{destination.district}, {destination.state}</span>
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                {destination.name}
              </h1>

              <p className="text-sm sm:text-lg text-white/90 leading-relaxed font-normal">
                {destination.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            KEY SPECS BAR
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 sm:p-5 rounded-3xl bg-slate-50 border border-slate-200/80">
            {/* Spec 1: Altitude */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Mountains size={16} weight="bold" className="text-[#FF5B37]" />
                <span>Elevation</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                {destination.altitude}
              </p>
            </div>

            {/* Spec 2: Best Season */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <SunHorizon size={16} weight="bold" className="text-amber-500" />
                <span>Best Season</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                {destination.bestSeason}
              </p>
            </div>

            {/* Spec 3: Ideal Duration */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <CalendarBlank size={16} weight="bold" className="text-emerald-600" />
                <span>Duration</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                {destination.idealDuration}
              </p>
            </div>

            {/* Spec 4: Nearest Airport */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <AirplaneTilt size={16} weight="bold" className="text-sky-600" />
                <span>Airport</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-1">
                {destination.nearestAirport}
              </p>
            </div>

            {/* Spec 5: Nearest Railhead */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col justify-between col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Train size={16} weight="bold" className="text-purple-600" />
                <span>Railhead</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-1">
                {destination.nearestRailhead}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            TWO-COLUMN MAIN CONTENT (Left: Dossier / Right: Sticky Booking Card)
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* ----------------- LEFT COLUMN: DETAILED DOSSIER ----------------- */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Overview */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Destination Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Experience {destination.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {destination.overview}
                </p>
              </div>

              {/* 2. Key Highlights */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Signature Highlights
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  What Makes This Journey Unforgettable
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-[#FF5B37]/40 hover:shadow-md transition-all space-y-2"
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-50 text-[#FF5B37] text-[10px] font-bold uppercase tracking-wider">
                        {h.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {h.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Day-by-Day Curated Itinerary */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Master Itinerary
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  Day-by-Day Expedition Blueprint
                </h2>
                <div className="space-y-4">
                  {destination.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 hover:shadow-md transition-shadow space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-slate-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                            0{day.day}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            {day.title}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 hidden sm:inline">
                          Day {day.day}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {day.activity}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-100">
                        <span className="flex items-center gap-1.5">
                          <strong className="text-slate-800">Stay:</strong> {day.stay}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <strong className="text-slate-800">Meals:</strong> {day.meals}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Recommended Chauffeur Fleet */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Hill Safety &amp; Vehicles
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  Recommended Chauffeur Fleet for This Terrain
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.fleetRecommendation.map((fleet, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-2"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                        {fleet.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">{fleet.vehicle}</h3>
                      <p className="text-xs text-slate-500 font-semibold">Capacity: {fleet.capacity}</p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        <strong>Why this vehicle:</strong> {fleet.why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Seasonal Weather Guide */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Climate &amp; Clothing
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  Seasonal Weather Guide
                </h2>
                <div className="divide-y divide-slate-100 border border-slate-200/90 rounded-2xl bg-white overflow-hidden">
                  {destination.weatherGuide.map((w, idx) => (
                    <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                      <div className="sm:w-1/3">
                        <span className="font-extrabold text-slate-900 block">{w.season}</span>
                        <span className="text-slate-500 text-xs">{w.months}</span>
                      </div>
                      <div className="sm:w-1/4 font-black text-[#FF5B37]">{w.temp}</div>
                      <div className="sm:w-5/12 text-slate-600 text-xs leading-relaxed">{w.advice}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Destination FAQs */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Common Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  Frequently Asked Questions About {destination.name}
                </h2>
                <div className="space-y-3">
                  {destination.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <CaretDown
                            size={18}
                            weight="bold"
                            className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF5B37]' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ----------------- RIGHT COLUMN: STICKY BOOKING CARD ----------------- */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Bespoke Expedition Package
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      {destination.startingPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ person base</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Includes private mountain chauffeur, fuel, toll/state taxes, and boutique stay.
                  </p>
                </div>

                {/* Quick Selection Dropdowns */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Traveler Party Size
                    </label>
                    <select
                      value={selectedTravelers}
                      onChange={(e) => setSelectedTravelers(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer focus:outline-none focus:border-[#FF5B37]"
                    >
                      <option value="2 Persons">2 Persons (Couple / Private SUV)</option>
                      <option value="4 Persons">4 Persons (Family Innova Crysta)</option>
                      <option value="6 Persons">6 Persons (Family / SUV)</option>
                      <option value="8+ Persons">8+ Persons (Maharaja Tempo Traveller)</option>
                    </select>
                  </div>
                </div>

                {/* Primary Booking Button */}
                <button
                  type="button"
                  onClick={() => handleOpenPlanner(`Expedition to ${destination.name} (${selectedTravelers})`)}
                  className="w-full py-4 rounded-full bg-slate-950 hover:bg-[#FF5B37] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Book Expedition</span>
                  <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </button>

                {/* Quick Call & WhatsApp CTAs */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20an%20expedition%20to%20${encodeURIComponent(destination.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-emerald-200/60"
                  >
                    <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${AGENCY_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall size={16} weight="fill" className="text-[#FF5B37]" />
                    <span>Call Concierge</span>
                  </a>
                </div>

                {/* Trust Pillars */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>100% Hill-Certified Mountain Chauffeur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Transparent Billing &amp; All Taxes Pre-Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SuitcaseSimple size={16} weight="fill" className="text-[#FF5B37] shrink-0" />
                    <span>Free Date Rescheduling up to 14 Days Before</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            RELATED CIRCUITS
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto border-t border-slate-100 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
                Explore More of Devbhoomi
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Recommended Nearby Circuits
              </h2>
            </div>
            <Link
              href="/destinations"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#FF5B37] transition-colors flex items-center gap-1"
            >
              <span>View All 45+ Circuits</span>
              <ArrowRight size={13} weight="bold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedDestinations.map((rel) => (
              <Link
                key={rel.slug}
                href={`/destinations/${rel.slug}`}
                className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#FF5B37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={rel.heroImage}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-slate-900">
                    {rel.category}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-bold flex items-center justify-between">
                    <span>{rel.altitude}</span>
                    <span>Starts {rel.startingPrice}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF5B37] transition-colors mb-1">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Universal Scenic Mountain Footer */}
      <ScenicLandscapeFooter />

      {/* Plan Journey Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext={plannerContext}
      />
    </div>
  );
};

