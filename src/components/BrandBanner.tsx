'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface BannerWord {
  text: string;
  hoverColor: string;
  glowColor: string;
  badge: string;
  accentDot: string;
}

const ROW_WORDS_1: BannerWord[] = [
  {
    text: 'RISHIKESH',
    hoverColor: 'hover:text-[#FF5B37]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(255,91,55,0.45)]',
    badge: 'Ganga Aarti',
    accentDot: 'bg-[#FF5B37]',
  },
  {
    text: 'KEDARNATH',
    hoverColor: 'hover:text-[#06B6D4]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(6,182,212,0.45)]',
    badge: 'Char Dham Yatra',
    accentDot: 'bg-[#06B6D4]',
  },
  {
    text: 'AULI',
    hoverColor: 'hover:text-[#10B981]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(16,185,129,0.45)]',
    badge: 'Snow Peaks',
    accentDot: 'bg-[#10B981]',
  },
  {
    text: 'CORBETT',
    hoverColor: 'hover:text-[#F59E0B]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(245,158,11,0.45)]',
    badge: 'Wild Safari',
    accentDot: 'bg-[#F59E0B]',
  },
  {
    text: 'NAINITAL',
    hoverColor: 'hover:text-[#8B5CF6]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(139,92,246,0.45)]',
    badge: 'Emerald Lakes',
    accentDot: 'bg-[#8B5CF6]',
  },
  {
    text: 'MUSSOORIE',
    hoverColor: 'hover:text-[#3B82F6]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(59,130,246,0.45)]',
    badge: 'Queen of Hills',
    accentDot: 'bg-[#3B82F6]',
  },
  {
    text: 'CHOPTA',
    hoverColor: 'hover:text-[#EC4899]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(236,72,153,0.45)]',
    badge: 'Mini Switzerland',
    accentDot: 'bg-[#EC4899]',
  },
];

const ROW_WORDS_2: BannerWord[] = [
  {
    text: 'DEVBHOOMI',
    hoverColor: 'hover:text-[#8B5CF6]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(139,92,246,0.45)]',
    badge: 'Sacred Trails',
    accentDot: 'bg-[#8B5CF6]',
  },
  {
    text: 'HIMALAYAS',
    hoverColor: 'hover:text-[#06B6D4]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(6,182,212,0.45)]',
    badge: 'High Passes',
    accentDot: 'bg-[#06B6D4]',
  },
  {
    text: 'KASHMIR',
    hoverColor: 'hover:text-[#FF5B37]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(255,91,55,0.45)]',
    badge: 'Paradise Valley',
    accentDot: 'bg-[#FF5B37]',
  },
  {
    text: 'RAJASTHAN',
    hoverColor: 'hover:text-[#10B981]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(16,185,129,0.45)]',
    badge: 'Royal Havelis',
    accentDot: 'bg-[#10B981]',
  },
  {
    text: 'KERALA',
    hoverColor: 'hover:text-[#F59E0B]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(245,158,11,0.45)]',
    badge: 'Tea Hills & Backwaters',
    accentDot: 'bg-[#F59E0B]',
  },
  {
    text: 'LADAKH',
    hoverColor: 'hover:text-[#EC4899]',
    glowColor: 'group-hover/word:drop-shadow-[0_4px_24px_rgba(236,72,153,0.45)]',
    badge: 'High Desert',
    accentDot: 'bg-[#EC4899]',
  },
];

export const BrandBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (track1Ref.current && containerRef.current) {
        gsap.to(track1Ref.current, {
          xPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      if (track2Ref.current && containerRef.current) {
        gsap.to(track2Ref.current, {
          xPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-8 sm:py-12 overflow-hidden bg-white border-y border-slate-100 select-none relative pause-on-hover"
      aria-label="Artistic Brand Kinetic Typography Carousel"
    >
      {/* Side gradient masks for smooth seamless fade to white background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-20" />

      <div className="flex flex-col gap-2 sm:gap-4">
        {/* Track 1: Leftward Infinite Marquee with Parallax */}
        <div ref={track1Ref} className="w-full overflow-hidden flex">
          <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-14 pr-8 sm:pr-14">
            {ROW_WORDS_1.map((item, idx) => (
              <div
                key={`row1-a-${idx}`}
                className="group/word inline-flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-200 transition-all duration-300 uppercase ${item.hoverColor} ${item.glowColor}`}
                  style={{ WebkitTextStroke: '1px rgba(15, 23, 42, 0.12)' }}
                >
                  {item.text}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-500 tracking-wider uppercase opacity-75 group-hover/word:opacity-100 group-hover/word:border-slate-300 transition-all">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.accentDot}`} />
                  {item.badge}
                </span>
                <span className="text-slate-300 text-xl sm:text-2xl font-light select-none">✦</span>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-14 pr-8 sm:pr-14" aria-hidden="true">
            {ROW_WORDS_1.map((item, idx) => (
              <div
                key={`row1-b-${idx}`}
                className="group/word inline-flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-200 transition-all duration-300 uppercase ${item.hoverColor} ${item.glowColor}`}
                  style={{ WebkitTextStroke: '1px rgba(15, 23, 42, 0.12)' }}
                >
                  {item.text}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-500 tracking-wider uppercase opacity-75 group-hover/word:opacity-100 group-hover/word:border-slate-300 transition-all">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.accentDot}`} />
                  {item.badge}
                </span>
                <span className="text-slate-300 text-xl sm:text-2xl font-light select-none">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Reverse Direction (Rightward) Infinite Marquee with Opposite Parallax */}
        <div ref={track2Ref} className="w-full overflow-hidden flex">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 sm:gap-14 pr-8 sm:pr-14">
            {ROW_WORDS_2.map((item, idx) => (
              <div
                key={`row2-a-${idx}`}
                className="group/word inline-flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span
                  className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-200/80 transition-all duration-300 uppercase ${item.hoverColor} ${item.glowColor}`}
                  style={{ WebkitTextStroke: '1px rgba(15, 23, 42, 0.1)' }}
                >
                  {item.text}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-500 tracking-wider uppercase opacity-75 group-hover/word:opacity-100 group-hover/word:border-slate-300 transition-all">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.accentDot}`} />
                  {item.badge}
                </span>
                <span className="text-slate-300 text-lg sm:text-xl font-light select-none">✦</span>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 sm:gap-14 pr-8 sm:pr-14" aria-hidden="true">
            {ROW_WORDS_2.map((item, idx) => (
              <div
                key={`row2-b-${idx}`}
                className="group/word inline-flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span
                  className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-200/80 transition-all duration-300 uppercase ${item.hoverColor} ${item.glowColor}`}
                  style={{ WebkitTextStroke: '1px rgba(15, 23, 42, 0.1)' }}
                >
                  {item.text}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-500 tracking-wider uppercase opacity-75 group-hover/word:opacity-100 group-hover/word:border-slate-300 transition-all">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.accentDot}`} />
                  {item.badge}
                </span>
                <span className="text-slate-300 text-lg sm:text-xl font-light select-none">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
