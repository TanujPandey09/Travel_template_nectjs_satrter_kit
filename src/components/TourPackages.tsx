'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Heart,
  MagnifyingGlass,
  Compass,
  CheckCircle,
  Sparkle,
} from '@phosphor-icons/react';
import { TOUR_PACKAGES, TourPackage } from '../data/travelData';

interface TourPackagesProps {
  externalFilter: { region: string; category: string } | null;
  onSelectPackage: (pkg: TourPackage) => void;
  onOpenPlanner: (defaultContext?: string) => void;
}

const CATEGORIES = ['All', 'Domestic', 'Honeymoon', 'Spiritual', 'International'] as const;

export const TourPackages: React.FC<TourPackagesProps> = ({
  externalFilter,
  onSelectPackage,
  onOpenPlanner,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  // Live star tier selection per-card: 3-Star, 4-Star, 5-Star
  const [cardTiers, setCardTiers] = useState<Record<string, '3' | '4' | '5'>>({});

  useEffect(() => {
    if (externalFilter) {
      setActiveCategory(externalFilter.category || 'All');
      setSearchQuery(externalFilter.region === 'All' ? '' : externalFilter.region);
    }
  }, [externalFilter]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTierPrice = (pkg: TourPackage) => {
    const tier = cardTiers[pkg.id] || '3';
    if (tier === '5') return pkg.basePrice5Star;
    if (tier === '4') return pkg.basePrice4Star;
    return pkg.basePrice3Star;
  };

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      pkg.title.toLowerCase().includes(q) ||
      pkg.region.toLowerCase().includes(q) ||
      pkg.subtitle.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-slate-50/60 relative w-full border-b border-slate-100">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={14} weight="fill" />
            <span>Curated Tour Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Handcrafted Packages For Unforgettable Journeys
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From the high mountain passes of Ladakh to royal palace stays in Rajasthan. Every package includes private chauffeur transport, handpicked hotels, and customizable daily itineraries.
          </p>
        </div>

        {/* Filter Pills & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs ${
                    active
                      ? 'bg-[#FF5B37] text-white shadow-md shadow-[#FF5B37]/25'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80'
                  }`}
                >
                  {category === 'All' ? 'All Packages' : category}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <MagnifyingGlass
              size={18}
              weight="bold"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, state, tour..."
              className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5B37] shadow-2xs"
            />
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/70 p-8">
            <p className="text-lg font-bold text-slate-800">No packages match your search filter</p>
            <p className="text-sm text-slate-500 mt-2">Try clearing your search query or picking "All Packages".</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#FF5B37] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => {
              const currentTier = cardTiers[pkg.id] || '3';
              const price = getTierPrice(pkg);
              const isFav = !!favorites[pkg.id];

              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelectPackage(pkg)}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Top Left: Category Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                      {pkg.category}
                    </div>

                    {/* Top Right: Heart / Wishlist Toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(pkg.id, e)}
                      aria-label="Save to wishlist"
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                        isFav ? 'bg-red-50 text-red-500' : 'bg-white/80 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <Heart size={18} weight={isFav ? 'fill' : 'bold'} />
                    </button>

                    {/* Bottom Floating Pill: Duration */}
                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <Clock size={14} weight="bold" />
                      <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                    </div>

                    {/* Bottom Floating Pill: Rating */}
                    <div className="absolute bottom-3 right-3 bg-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                      <Star size={13} weight="fill" />
                      <span>{pkg.rating}</span>
                      <span className="text-[10px] text-amber-100">({pkg.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Location Pin */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FF5B37] mb-2">
                        <MapPin size={15} weight="fill" />
                        <span>{pkg.region}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">Best: {pkg.bestSeason}</span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => onSelectPackage(pkg)}
                        className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#FF5B37] transition-colors cursor-pointer"
                      >
                        {pkg.title}
                      </h3>

                      {/* Subtitle / Teaser */}
                      <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                        {pkg.subtitle}
                      </p>

                      {/* Included Amenities Chips */}
                      <div className="flex flex-wrap gap-1.5 my-4">
                        {pkg.amenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md"
                          >
                            <CheckCircle size={12} weight="fill" className="text-emerald-600" />
                            {amenity}
                          </span>
                        ))}
                      </div>

                      {/* Hotel Tier Switcher (Interactive Framer feature!) */}
                      <div className="pt-3 border-t border-slate-100">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1.5">
                          <span>HOTEL & STAY TIER:</span>
                          <span className="text-slate-700 capitalize font-bold">
                            {currentTier === '5' ? '5★ Heritage Palace' : currentTier === '4' ? '4★ Premium Deluxe' : '3★ Standard Comfort'}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 bg-slate-100/80 p-1 rounded-xl">
                          {(['3', '4', '5'] as const).map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setCardTiers((prev) => ({ ...prev, [pkg.id]: tier }))}
                              className={`py-1 rounded-lg text-xs font-bold transition-all ${
                                currentTier === tier
                                  ? 'bg-white text-slate-900 shadow-2xs'
                                  : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              {tier} Star
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing & Action Row */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-medium">Starting from</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-extrabold text-slate-900">
                            ₹{price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">/ person</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectPackage(pkg)}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                          Itinerary
                        </button>
                        <button
                          type="button"
                          onClick={() => onOpenPlanner(`Tour Package Booking: ${pkg.title} (${currentTier}★ tier)`)}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF5B37] hover:bg-[#E64A26] transition-colors shadow-sm shadow-[#FF5B37]/25 cursor-pointer flex items-center gap-1"
                        >
                          <span>Book</span>
                          <ArrowRight size={13} weight="bold" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
