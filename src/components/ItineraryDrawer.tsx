'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  MapPin,
  CheckCircle,
  XCircle,
  WhatsappLogo,
  ArrowRight,
  Bed,
  ForkKnife,
  CalendarBlank,
  Users,
} from '@phosphor-icons/react';
import { TourPackage, AGENCY_CONFIG } from '../data/travelData';

interface ItineraryDrawerProps {
  selectedPackage: TourPackage | null;
  onClose: () => void;
  onBookPackage: (contextLabel: string) => void;
}

export const ItineraryDrawer: React.FC<ItineraryDrawerProps> = ({
  selectedPackage,
  onClose,
  onBookPackage,
}) => {
  const [hotelTier, setHotelTier] = useState<'3star' | '4star' | '5star'>('4star');
  const [guestCount, setGuestCount] = useState<number>(2);

  if (!selectedPackage) return null;

  const perPersonPrice =
    hotelTier === '3star'
      ? selectedPackage.basePrice3Star
      : hotelTier === '4star'
      ? selectedPackage.basePrice4Star
      : selectedPackage.basePrice5Star;

  const totalEstimate = perPersonPrice * guestCount;

  const tierLabel =
    hotelTier === '3star'
      ? '3★ Comfort'
      : hotelTier === '4star'
      ? '4★ Boutique Deluxe'
      : '5★ Luxury Palace';

  const whatsappText = encodeURIComponent(
    `Hello Travelioo, I would like to book the tour "${selectedPackage.title}" (${selectedPackage.durationDays}D/${selectedPackage.durationNights}N) in the ${tierLabel} tier for ${guestCount} travelers. Total estimated price: ₹${totalEstimate.toLocaleString('en-IN')}. Please share available dates.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        />

        {/* Slide-Over Panel */}
        <motion.aside
          aria-label="Expedition Day-by-Day Dossier"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          className="relative z-10 w-full max-w-2xl bg-white border-l border-slate-200 h-full overflow-y-auto shadow-2xl flex flex-col justify-between text-slate-900"
        >
          {/* Header */}
          <div>
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#FF5B37] uppercase tracking-wider block">
                  {selectedPackage.region} • {selectedPackage.category}
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {selectedPackage.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close itinerary drawer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Photo Showcase */}
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative shadow-md">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-white">
                  {selectedPackage.durationDays} Days / {selectedPackage.durationNights} Nights • Best Season: {selectedPackage.bestSeason}
                </div>
              </div>

              {/* Hotel Tier Switcher Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>SELECT HOTEL COMFORT TIER</span>
                  <span className="text-slate-700">Pickup: {selectedPackage.pickupDrop}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '3star', label: '3★ Standard', price: selectedPackage.basePrice3Star },
                    { id: '4star', label: '4★ Deluxe', price: selectedPackage.basePrice4Star },
                    { id: '5star', label: '5★ Luxury', price: selectedPackage.basePrice5Star },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setHotelTier(tier.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        hotelTier === tier.id
                          ? 'border-[#FF5B37] bg-white shadow-xs'
                          : 'border-slate-200 bg-slate-100/60 hover:bg-white text-slate-600'
                      }`}
                    >
                      <span className="block text-xs font-bold text-slate-900">{tier.label}</span>
                      <span className="block text-[11px] font-bold text-[#FF5B37] mt-0.5">
                        ₹{tier.price.toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Guest Counter */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/70">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Users size={16} weight="bold" className="text-[#FF5B37]" />
                    Travelers Count:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuestCount((g) => Math.max(1, g - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-slate-900">{guestCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount((g) => g + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Day-by-Day Itinerary Timeline */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4">
                  Day-by-Day Tour Schedule
                </h3>
                <div className="space-y-4">
                  {selectedPackage.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-100/80 text-[#FF5B37] text-xs font-bold">
                          Day 0{day.day}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{day.route}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{day.title}</h4>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {day.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                          >
                            • {h}
                          </span>
                        ))}
                      </div>
                      <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
                        <span>🏨 {day.stay}</span>
                        <span>🍽️ {day.meals}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle size={15} weight="fill" className="text-emerald-600" />
                    What's Included
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedPackage.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle size={15} weight="bold" className="text-slate-400" />
                    Exclusions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedPackage.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-400">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="sticky bottom-0 bg-white/95 backdrop-blur-md p-5 border-t border-slate-200/80 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Estimated Total ({guestCount} Pax):</span>
              <span className="text-2xl font-black text-slate-900">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookPackage(`Tour Package: ${selectedPackage.title} (${tierLabel}) for ${guestCount} travelers`);
                }}
                className="px-6 py-3 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-[#FF5B37]/30 transition-all cursor-pointer"
              >
                <span>Book Package</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>
          </div>
        </motion.aside>
      </div>
    </AnimatePresence>
  );
};
