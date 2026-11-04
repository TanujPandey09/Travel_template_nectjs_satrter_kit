'use client';

import React from 'react';

interface StepItem {
  step: string;
  desc: string;
  titleLine1: string;
  titleLine2: string;
  renderIcon: () => React.ReactNode;
}

const STEPS: StepItem[] = [
  {
    step: 'Step 01',
    desc: 'Pick your dream travel location from a wide range of beautiful places, curated circuits, and hidden valleys around the world.',
    titleLine1: 'Select',
    titleLine2: 'destination',
    renderIcon: () => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        className="shrink-0 text-slate-900 group-hover:text-[#FF5B37] transition-colors duration-300"
      >
        {/* Globe with meridians and latitude */}
        <circle cx="22" cy="24" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="22" cy="24" rx="7" ry="16" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 24h32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 15c4 2 8 2 13 0s9-2 13 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 33c4-2 8-2 13 0s9 2 13 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Map Location Pin with route marker trail */}
        <path
          d="M36 28c0-4.5 3.5-8 8-8s8 3.5 8 8c0 6-8 14-8 14s-8-8-8-14z"
          stroke="currentColor"
          strokeWidth="2"
          fill="white"
        />
        <circle cx="44" cy="28" r="2.5" fill="currentColor" />
        <path d="M26 38c3 4 7 5 11 2" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: 'Step 02',
    desc: 'Select the best travel package that fits your budget and preferences, choose your chauffeur fleet, then confirm.',
    titleLine1: 'Customize',
    titleLine2: 'itinerary',
    renderIcon: () => (
      <svg
        width="60"
        height="48"
        viewBox="0 0 60 48"
        fill="none"
        className="shrink-0 text-slate-900 group-hover:text-[#FF5B37] transition-colors duration-300"
      >
        {/* Ticket / Reservation Card */}
        <rect
          x="3"
          y="6"
          width="50"
          height="26"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        {/* Text inside */}
        <text
          x="28"
          y="23"
          textAnchor="middle"
          fontSize="10"
          fontWeight="900"
          fontFamily="inherit"
          letterSpacing="0.12em"
          fill="currentColor"
        >
          RESERVE
        </text>
        {/* Click cursor pointer */}
        <path
          d="M14 26l6 14 3.5-3.5 4.5 4.5 2.5-2.5-4.5-4.5 4.5-1.5L14 26z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="white"
        />
      </svg>
    ),
  },
  {
    step: 'Step 03',
    desc: 'Relax and enjoy your journey while we take care of everything, ensuring a smooth, safe, and unforgettable voyage.',
    titleLine1: 'Embark &',
    titleLine2: 'experience',
    renderIcon: () => (
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        className="shrink-0 text-slate-900 group-hover:text-[#FF5B37] transition-colors duration-300"
      >
        {/* Globe Base */}
        <circle cx="24" cy="30" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 25c3-2 8-1 12 1s7 4 10 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 36c4 2 8 0 12-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M26 14c-1 3-1 6 0 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        {/* Airplane in orbit around the globe */}
        <g transform="translate(26, 4)">
          <path
            d="M6 14l7-9 3.5 1-3 7 7.5 2 2.5-2 2.5 1-1 3.5 3.5 1-1 2.5-3.5-1-1 3.5-2.5-1 2-2.5-7.5-2-3 7-3.5-1 7-9z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="white"
          />
        </g>
        {/* Flight vapor trail */}
        <path d="M10 16c6-6 16-8 23-4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const BookingFlowSteps: React.FC = () => {
  return (
    <section
      aria-label="How It Works - Booking Flow"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full border-b border-slate-100 select-none"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header matching uploaded screenshot 1:1 */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-12 sm:mb-16">
          {/* Tilted Floating Pill Tag: How It Works? */}
          <div className="inline-block px-4 py-1 bg-white border border-slate-200/90 rounded-full shadow-2xs text-xs font-semibold text-slate-700 -rotate-3 hover:rotate-0 transition-transform mb-3.5">
            <span>How It Works?</span>
          </div>

          {/* Heading matching screenshot */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Create journeys with<br className="hidden sm:inline" /> effortless booking flow
          </h2>
        </div>

        {/* 3 Step Cards Grid matching screenshot 1:1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="group rounded-3xl sm:rounded-[36px] border border-slate-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shadow-xs hover:border-[#FF5B37]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Top Section: Step Indicator, Divider Line, and Description */}
              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-[#FF5B37] transition-colors block">
                  {step.step}
                </span>

                {/* Hairline horizontal divider matching screenshot */}
                <div className="w-full border-b border-slate-100 my-4 sm:my-5" />

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Section: 2-Line Bold Title on Left + Outline Vector Icon on Right */}
              <div className="flex items-end justify-between gap-4 pt-8 sm:pt-10">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-[1.15] tracking-tight">
                  <span className="block">{step.titleLine1}</span>
                  <span className="block">{step.titleLine2}</span>
                </h3>

                <div className="group-hover:scale-105 transition-transform duration-300">
                  {step.renderIcon()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
