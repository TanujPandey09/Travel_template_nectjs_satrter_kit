'use client';

import React from 'react';

interface PartnerBrand {
  id: string;
  name: string;
  sub: string;
  accent?: string;
  renderLogo: () => React.ReactNode;
}

const PARTNERS: PartnerBrand[] = [
  {
    id: 'virtuoso',
    name: 'VIRTUOSO.',
    sub: 'LUXURY TRAVEL',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <polygon points="12 2, 15 9, 22 12, 15 15, 12 22, 9 15, 2 12, 9 9" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'natgeo',
    name: 'NATIONAL GEOGRAPHIC',
    sub: 'EXPEDITIONS',
    renderLogo: () => (
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="shrink-0 text-amber-500">
        <rect x="2" y="2" width="16" height="20" rx="1" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    id: 'four-seasons',
    name: 'FOUR SEASONS',
    sub: 'HOTELS & RESORTS',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <path
          d="M12 21V7M12 7C9.5 4.5 5.5 4.5 3.5 6.5M12 7C14.5 4.5 18.5 4.5 20.5 6.5M12 12C9 10 5 11 3 14M12 12C15 10 19 11 21 14M12 16C10 15 7 16 5 18M12 16C14 15 17 16 19 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'ritz-carlton',
    name: 'THE RITZ-CARLTON',
    sub: 'MEMBERS NETWORK',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <path
          d="M4 17L2 7L7 11L12 4L17 11L22 7L20 17H4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'aman',
    name: 'A M A N',
    sub: 'SANCTUARIES',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'conde-nast',
    name: 'CONDÉ NAST',
    sub: 'TRAVELER VERIFIED',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8H16M12 8V16M9 16H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'belmond',
    name: 'BELMOND',
    sub: 'TRAINS & SAFARIS',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <path
          d="M6 5H13C15 5 16.5 6.2 16.5 8C16.5 9.3 15.6 10.3 14.4 10.7C16 11.1 17 12.3 17 14C17 16 15 17.5 13 17.5H6V5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="6" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 'tripadvisor',
    name: 'Tripadvisor',
    sub: 'TRAVELERS CHOICE',
    accent: 'text-emerald-600',
    renderLogo: () => (
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="shrink-0 text-slate-900">
        <circle cx="6.5" cy="11.5" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="17.5" cy="11.5" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="6.5" cy="11.5" r="1.8" fill="currentColor" />
        <circle cx="17.5" cy="11.5" r="1.8" fill="currentColor" />
        <path d="M11 11.5H13M12 6L9 8.5M12 6L15 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'iata',
    name: 'IATA',
    sub: 'ACCREDITED AGENT',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: 'emirates',
    name: 'Emirates',
    sub: 'SKYWARDS PARTNER',
    accent: 'text-rose-600',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <path
          d="M3 13C3 7.5 7.5 4 12 4C16.5 4 21 7.5 21 13C21 17 17.5 20 12 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'relais-chateaux',
    name: 'RELAIS & CHÂTEAUX',
    sub: 'FINE LIVING',
    renderLogo: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-slate-900">
        <path
          d="M12 3C12 3 7 7 7 12C7 16 12 21 12 21C12 21 17 16 17 12C17 7 12 3 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="12" cy="11" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
];

export const PartnerLogos: React.FC = () => {
  // Exactly two sets for a mathematically seamless, infinite translate(-50%) loop
  const loopTrack = [...PARTNERS, ...PARTNERS];

  return (
    <section
      aria-label="Happy Sponsors and Global Luxury Partners"
      className="py-7 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 border-y border-slate-100 bg-white w-full select-none overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left Pinned Label: 12000+ Happy sponsors matching reference screenshot */}
        <div className="shrink-0 text-center md:text-left pr-0 md:pr-8 md:border-r md:border-slate-200/90 flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 text-[#FF5B37] text-[10px] font-extrabold uppercase tracking-wider mb-1">
            Global Network
          </div>
          <p className="text-sm sm:text-base font-black text-slate-900 leading-tight tracking-tight">
            12000+ Happy<br className="hidden md:inline" /> sponsors &amp; partners
          </p>
        </div>

        {/* Right: Continuous Auto-Infinite Carousel with Gradient Edge Masks */}
        <div className="flex-1 w-full overflow-hidden relative group">
          {/* Edge Fade Gradients for smooth infinite entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track: Smooth continuous scroll with pause on hover */}
          <div className="flex w-max items-center gap-8 sm:gap-12 animate-marquee group-hover:[animation-play-state:paused]">
            {loopTrack.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:bg-slate-50 transition-all duration-200 opacity-80 hover:opacity-100 shrink-0 cursor-default group/item"
              >
                <div className="group-hover/item:scale-105 transition-transform duration-200">
                  {brand.renderLogo()}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-tight whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span
                    className={`text-[9px] font-bold tracking-wider leading-none mt-0.5 whitespace-nowrap ${
                      brand.accent || 'text-slate-400'
                    }`}
                  >
                    {brand.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
