'use client';

import React, { useEffect, useRef } from 'react';
import {
  Backpack,
  Bus,
  MapTrifold,
  Star,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const ExperienceInMotion: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaImgRef = useRef<HTMLImageElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (mediaImgRef.current && sectionRef.current) {
        gsap.fromTo(
          mediaImgRef.current,
          { yPercent: -6, scale: 1.08 },
          {
            yPercent: 6,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      const rows = featuresRef.current?.querySelectorAll('.feature-row');
      if (rows) {
        gsap.from(rows, {
          x: 25,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      aria-label="Why Choose Us - Experience In Motion"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full border-t border-slate-100 select-none overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header matching uploaded screenshot 1:1 */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-12 sm:mb-16">
          {/* Tilted Floating Pill Tag: Why Choose Us? */}
          <div className="inline-block px-4 py-1 bg-white border border-slate-200/90 rounded-full shadow-2xs text-xs font-semibold text-slate-700 -rotate-3 hover:rotate-0 transition-transform mb-3.5">
            <span>Why Choose Us?</span>
          </div>

          {/* Heading matching screenshot */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Experience Devbhoomi<br className="hidden sm:inline" /> in motion
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Himalayan Landscape Photo + Rotating Circular Stamp Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-lg shadow-2xl bg-slate-900 group">
              <img
                ref={mediaImgRef}
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Snow-capped Garhwal Himalayan peaks and alpine valley in Uttarakhand"
                className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Rotating Circular Text Stamp Badge intersecting right edge matching screenshot */}
            <div className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center">
                {/* SVG Rotating Curved Text */}
                <svg
                  className="w-full h-full animate-spin"
                  style={{ animationDuration: '20s' }}
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[7.8px] uppercase font-bold tracking-[0.18em] fill-slate-800">
                    <textPath href="#circlePath" startOffset="0%">
                      CURATED HIMALAYAN EXPEDITIONS &amp; TOURS •
                    </textPath>
                  </text>
                </svg>

                {/* Center Crosshair / Camera Icon from Reference Screenshot */}
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-800">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
                    <rect x="5" y="5" width="14" height="14" rx="3" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Clean Value Features (NO colored square boxes) + Trustpilot & Yelp */}
          <div ref={featuresRef} className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="divide-y divide-slate-100">
              {/* Feature 1: Unlimited explore places */}
              <div className="feature-row pb-6 sm:pb-7 flex items-start gap-4 sm:gap-6 group">
                <div className="shrink-0 text-slate-900 pt-0.5 group-hover:text-[#FF5B37] transition-colors">
                  <Backpack size={36} weight="regular" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    Bespoke Himalayan routes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                    Discover sacred trails, alpine bugyals, and tiger corridors across Uttarakhand with tailor-made expedition blueprints.
                  </p>
                </div>
              </div>

              {/* Feature 2: Easy booking & refund */}
              <div className="feature-row py-6 sm:py-7 flex items-start gap-4 sm:gap-6 group">
                <div className="shrink-0 text-slate-900 pt-0.5 group-hover:text-[#FF5B37] transition-colors">
                  <Bus size={36} weight="regular" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    Hill-certified chauffeurs &amp; fleet
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                    Travel high ghat passes safely with verified mountain drivers, GPS tracking, and transparent per-km or fixed quotes.
                  </p>
                </div>
              </div>

              {/* Feature 3: Classy & expert guides */}
              <div className="feature-row pt-6 sm:pt-7 flex items-start gap-4 sm:gap-6 group">
                <div className="shrink-0 text-slate-900 pt-0.5 group-hover:text-[#FF5B37] transition-colors">
                  <MapTrifold size={36} weight="regular" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    Native stewards &amp; 24/7 concierge
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                    Experience deep cultural respect and seamless logistics with licensed local guides and 24/7 route coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Trust Marks matching screenshot 1:1: Trustpilot & Yelp without any colored cards */}
            <div className="pt-6 sm:pt-8 border-t border-slate-100 flex flex-wrap items-center gap-10 sm:gap-14">
              {/* Trustpilot (Pure vector mark + clean stars) */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#00B67A">
                    <polygon points="12 2, 15 9, 22 12, 15 15, 12 22, 9 15, 2 12, 9 9" />
                  </svg>
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    Trustpilot
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-0.5 text-[#00B67A]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} weight="fill" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800 ml-1">4.9 out of 5</span>
                </div>
              </div>

              {/* Yelp (Pure vector mark + clean stars) */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-base sm:text-lg text-slate-900 tracking-tighter">
                    yelp
                  </span>
                  {/* Iconic Yelp 5-petal burst */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#D32323">
                    <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm7.6 4.4a1.5 1.5 0 0 1 0 2.1l-4.6 4.6a1.5 1.5 0 0 1-2.1-2.1l4.6-4.6a1.5 1.5 0 0 1 2.1 0zM4.4 6.4a1.5 1.5 0 0 1 2.1 0l4.6 4.6a1.5 1.5 0 0 1-2.1 2.1L4.4 8.5a1.5 1.5 0 0 1 0-2.1zm2.5 12.2a1.5 1.5 0 0 1 2.1-.5l5.5 3.2a1.5 1.5 0 0 1-1.5 2.6l-5.5-3.2a1.5 1.5 0 0 1-.6-2.1zm10.2 0a1.5 1.5 0 0 1-.6 2.1l-5.5 3.2a1.5 1.5 0 0 1-1.5-2.6l5.5-3.2a1.5 1.5 0 0 1 2.1.5z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-0.5 text-[#D32323]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} weight="fill" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800 ml-1">4.9 out of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
