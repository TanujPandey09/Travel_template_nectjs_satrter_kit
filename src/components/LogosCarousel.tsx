'use client';

import React from 'react';

interface LogoItem {
  name: string;
  badge: string;
  icon: string;
}

const PARTNER_LOGOS: LogoItem[] = [
  { name: 'Tripadvisor', badge: '★ 4.9 Verified', icon: '🦉' },
  { name: 'Booking.com', badge: 'Premier Partner', icon: '🏨' },
  { name: 'Airbnb', badge: 'Superhost Fleet', icon: '🏡' },
  { name: 'National Geographic', badge: 'Expedition Partner', icon: '🌍' },
  { name: 'Expedia', badge: 'Global Network', icon: '✈️' },
  { name: 'Skyscanner', badge: 'Certified Operator', icon: '🧭' },
  { name: 'Agoda', badge: 'VIP Alliance', icon: '⭐' },
  { name: 'Emirates Skywards', badge: 'Miles Partner', icon: '🛫' },
  { name: 'Incredible India', badge: 'Ministry Approved', icon: '🇮🇳' },
  { name: 'MakeMyTrip', badge: 'Top Rated Agency', icon: '🎒' },
];

export const LogosCarousel: React.FC = () => {
  // Duplicate array to create a seamless infinite loop
  const infiniteLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      aria-label="Partner Brand Marquee"
      className="py-6 sm:py-7 bg-white border-y border-slate-100 overflow-hidden select-none w-full relative"
    >
      {/* Subtle edge fade gradient mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-3 sm:mb-4">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by Global Travel Networks & Hospitality Leaders
        </p>
      </div>

      {/* Infinite Horizontal Carousel Track */}
      <div className="flex w-max items-center gap-8 sm:gap-12 animate-marquee hover:[animation-play-state:paused]">
        {infiniteLogos.map((partner, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100/80 hover:border-orange-200 hover:bg-orange-50/40 transition-colors shadow-2xs shrink-0 cursor-default"
          >
            <span className="text-xl sm:text-2xl">{partner.icon}</span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-extrabold text-slate-900 tracking-tight leading-tight">
                {partner.name}
              </span>
              <span className="text-[10px] font-semibold text-[#FF5B37] leading-none mt-0.5">
                {partner.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

