'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  MagnifyingGlass,
  MapPin,
  Mountains,
  CalendarBlank,
  Star,
  ArrowRight,
  Sparkle,
  Funnel,
  ShieldCheck,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { CtaBanner } from '@/components/CtaBanner';
import { DESTINATIONS_DATA, DestinationDetail } from '@/data/destinationsData';

const CATEGORIES = [
  'All Circuits',
  'Pilgrimage & Sacred',
  'Himalayan Ski & Snow',
  'Wildlife & Safari',
  'Lakes & Colonial Ridges',
  'Trek & High Passes',
  'Royal Heritage',
];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Circuits');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || 'Destination Expedition Inquiry');
    setPlannerModalOpen(true);
  };

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      const matchesCategory =
        selectedCategory === 'All Circuits' || dest.category === selectedCategory;
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.startingPriceNumeric - b.startingPriceNumeric;
      if (sortBy === 'price-desc') return b.startingPriceNumeric - a.startingPriceNumeric;
      if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            SECTION 1: HERO - Matching About page signature cinematic card
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20">
          <div className="relative w-full max-w-7xl mx-auto rounded-3xl sm:rounded-[40px] overflow-hidden min-h-[360px] sm:min-h-[460px] md:min-h-[500px] flex flex-col items-center justify-center p-8 sm:p-16 text-center text-white shadow-2xl bg-slate-950">
            {/* Alpine ridge and valley scenic background photo */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Panoramic Himalayan river valley and mountain ridges"
                className="w-full h-full object-cover filter brightness-[0.52] contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/50" />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Tilted Floating Pill Tag */}
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm text-xs font-semibold text-white -rotate-2 hover:rotate-0 transition-transform mb-6">
                <span>Devbhoomi &amp; Pan-India Circuits</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-3xl">
                Curated destinations &amp;<br className="hidden sm:inline" /> sacred expeditions
              </h1>

              {/* Subtle supporting narrative */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
                From sacred high-altitude Himalayan Jyotirlingas to powdery ski slopes, tiger reserves, and tranquil colonial lake valleys. Backed by our private chauffeur fleet and vetted local stewards.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FILTER & SEARCH BAR
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-4 sm:gap-5">
            {/* Top Row: Search and Sort */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlass
                  size={18}
                  weight="bold"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by destination, state, or circuit..."
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#FF5B37] focus:ring-2 focus:ring-[#FF5B37]/10 focus:outline-none transition-all"
                />
              </div>

              {/* Sort Selector & Count */}
              <div className="flex items-center justify-between md:justify-end gap-3 text-xs sm:text-sm">
                <span className="text-slate-500 font-medium whitespace-nowrap">
                  Showing <strong className="text-slate-900 font-bold">{filteredDestinations.length}</strong> circuits
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort destinations by"
                  className="h-12 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-700 cursor-pointer focus:outline-none focus:border-[#FF5B37] focus:bg-white transition-all"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated (4.9+)</option>
                </select>
              </div>
            </div>

            {/* Bottom Row: Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`h-10 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            DESTINATIONS GRID
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          {filteredDestinations.length === 0 ? (
            <div className="rounded-3xl border border-slate-200/80 p-12 text-center bg-slate-50 my-10">
              <Compass size={48} className="mx-auto text-slate-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-1">No destinations match your filter</h3>
              <p className="text-sm text-slate-500 mb-5">Try adjusting your search keyword or clearing the category tab.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Circuits');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-[#FF5B37] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((dest) => (
                <article
                  key={dest.slug}
                  className="group rounded-3xl sm:rounded-[32px] border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#FF5B37]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold text-slate-900 shadow-sm">
                        {dest.category}
                      </span>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-white">
                        <Star size={13} weight="fill" className="text-amber-400" />
                        <span>{dest.rating}</span>
                      </div>
                    </div>

                    {/* Bottom Altitude and Duration Tag */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold z-10">
                      <span className="flex items-center gap-1.5 opacity-90">
                        <Mountains size={14} weight="bold" />
                        <span>{dest.altitude}</span>
                      </span>
                      <span className="flex items-center gap-1.5 opacity-90">
                        <CalendarBlank size={14} weight="bold" />
                        <span>{dest.idealDuration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* District & State */}
                      <p className="text-xs font-bold text-[#FF5B37] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin size={13} weight="fill" />
                        <span>{dest.district}, {dest.state}</span>
                      </p>

                      {/* Destination Name */}
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#FF5B37] transition-colors mb-2">
                        <Link href={`/destinations/${dest.slug}`}>
                          {dest.name}
                        </Link>
                      </h2>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                        {dest.tagline}
                      </p>

                      {/* Two Key Highlights */}
                      <div className="space-y-1.5 pb-4 mb-4 border-b border-slate-100 text-xs text-slate-700">
                        {dest.highlights.slice(0, 2).map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B37] mt-1.5 shrink-0" />
                            <span className="line-clamp-1"><strong>{h.title}:</strong> {h.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer: Price & Actions */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Starts From
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-slate-900">
                          {dest.startingPrice}
                          <span className="text-xs font-normal text-slate-500"> /person</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenPlanner(`Inquiry: ${dest.name}`)}
                          className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          Quick Quote
                        </button>
                        <Link
                          href={`/destinations/${dest.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-[#FF5B37] text-white text-xs font-bold transition-all active:scale-95 shadow-sm group/btn"
                        >
                          <span>Explore</span>
                          <ArrowRight size={13} weight="bold" className="transition-transform group-hover/btn:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* =========================================================================
            SIGNATURE CUSTOM CIRCUITS CTA BANNER
           ========================================================================= */}
        <CtaBanner
          onOpenPlanner={handleOpenPlanner}
          pillBadge="Tailored Circuits"
          title="Want a custom multi-destination circuit across Devbhoomi?"
          subtitle="Our mountain expedition team designs combined circuits like Rishikesh + Auli + Chopta + Corbett with dedicated Toyota Innova Crysta and hand-picked boutique forest lodges."
          badgeMain="100%"
          badgeSub="CUSTOM ROUTE"
          buttonText="Consult Expedition Lead"
          context="Custom Multi-Destination Circuit Inquiry"
        />
      </main>

      {/* Universal Scenic Mountain Footer */}
      <ScenicLandscapeFooter />

      {/* Concierge Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext={plannerContext}
      />
    </div>
  );
}

