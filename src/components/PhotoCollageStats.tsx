'use client';

import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  GlobeHemisphereWest,
  Sparkle,
  ShieldCheck,
  Star,
  UsersThree,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface PhotoCollageStatsProps {
  onOpenPlanner?: (context?: string) => void;
}

const CARDS_DATA = [
  {
    id: 'pcs-top-left',
    title: 'Nanda Devi & Auli Ridge',
    location: 'Garhwal, Uttarakhand',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=900',
    rotate: -12,
    fromX: -180,
    fromY: -120,
    fromRotate: -35,
  },
  {
    id: 'pcs-top-right',
    title: 'Rishikesh Ganga Ghats',
    location: 'Tehri Garhwal, Uttarakhand',
    image: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=900',
    rotate: 12,
    fromX: 180,
    fromY: -100,
    fromRotate: 35,
  },
  {
    id: 'pcs-bottom-center',
    title: 'Jim Corbett Sal Forest',
    location: 'Nainital District, Uttarakhand',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=900',
    rotate: -4,
    fromX: 0,
    fromY: 180,
    fromRotate: -20,
  },
];

export const PhotoCollageStats: React.FC<PhotoCollageStatsProps> = ({ onOpenPlanner }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const collageStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        CARDS_DATA.forEach((card) => {
          gsap.set(`.${card.id}`, { rotate: card.rotate, opacity: 1 });
        });
        gsap.set('.pcs-medallion', { scale: 1, opacity: 1, rotate: -6 });
        return;
      }

      // 1. Scrubbed Flight Animation on Cards (like CtaBanner)
      // As user scrolls down, photos fly into their fanned position from outside;
      // when scrolling back up, they smoothly retreat.
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'top 25%',
          scrub: 0.8,
        },
      });

      // Fly in each of the 3 photographic cards
      CARDS_DATA.forEach((card) => {
        tl.fromTo(
          `.${card.id}`,
          {
            x: card.fromX,
            y: card.fromY,
            rotate: card.fromRotate,
            scale: 0.65,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotate: card.rotate,
            scale: 1,
            opacity: 1,
          },
          0
        );
      });

      // Central Medallion pops in
      tl.fromTo(
        '.pcs-medallion',
        { scale: 0, rotate: 60, opacity: 0 },
        { scale: 1, rotate: -6, opacity: 1, duration: 0.6 },
        0.3
      );

      // 2. Parallax drift on the images inside the cards
      gsap.utils.toArray<HTMLElement>('.pcs-img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      });

      // 3. Staggered reveal for left text elements
      if (leftColRef.current) {
        gsap.from(leftColRef.current.children, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Global Discovery Network"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-slate-50/70 w-full border-b border-slate-100 select-none overflow-hidden relative"
    >
      {/* Ambient background decorative light blur */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Big Stat + Narrative + Trust Badges */}
        <div ref={leftColRef} className="lg:col-span-5 flex flex-col items-start space-y-5">
          {/* Tilted Floating Pill Tag */}
          <div className="inline-block px-3.5 py-1 bg-white border border-slate-200/90 rounded-full shadow-2xs text-xs font-semibold text-slate-700 -rotate-3 hover:rotate-0 transition-transform">
            <span>Expedition Reach</span>
          </div>

          {/* Huge Stat Highlight */}
          <div className="flex items-baseline gap-2">
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none">
              45<span className="text-[#FF5B37]">+</span>
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Curated Circuits
              </span>
              <span className="text-sm font-extrabold text-slate-800">
                Devbhoomi &amp; India
              </span>
            </div>
          </div>

          {/* Headline in Plus Jakarta Sans */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Curated rare journeys across Devbhoomi &amp; India&apos;s grandest frontiers
          </h2>

          {/* Body Narrative */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From the sacred heights of Kedarnath and ski meadows of Auli to tranquil Corbett forests, Kashmir valleys, and Rajasthan desert dunes. Every expedition is guided by vetted local stewards and backed by our private luxury chauffeur network.
          </p>

          {/* 3 Horizontal Value Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
              <ShieldCheck size={20} weight="fill" className="text-emerald-600 shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold text-slate-900 block leading-tight">100% Vetted</span>
                <span className="text-[10px] text-slate-500">Chauffeur Fleet</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
              <Star size={20} weight="fill" className="text-amber-500 shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold text-slate-900 block leading-tight">4.9 / 5 Stars</span>
                <span className="text-[10px] text-slate-500">Guest Reviews</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
              <GlobeHemisphereWest size={20} weight="fill" className="text-[#FF5B37] shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold text-slate-900 block leading-tight">1,500+</span>
                <span className="text-[10px] text-slate-500">Tours Dispatched</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => {
                if (onOpenPlanner) {
                  onOpenPlanner('PhotoCollageStats Section');
                } else {
                  window.location.hash = 'destinations';
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-[#FF5B37] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 cursor-pointer group"
            >
              <span>Explore All Tours</span>
              <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#destinations"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#FF5B37] transition-colors"
            >
              View Circuits &rarr;
            </a>
          </div>
        </div>

        {/* Right Column: Flying Fanned Cards Stage with GSAP Scrub Parallax */}
        <div
          ref={collageStageRef}
          className="lg:col-span-7 relative h-[380px] sm:h-[460px] md:h-[500px] w-full flex items-center justify-center overflow-visible"
        >
          {/* Card 1: Top-Left (Alpine Mountain Peak) */}
          <div
            className={`${CARDS_DATA[0].id} absolute left-[2%] sm:left-[6%] top-[4%] sm:top-[6%] w-[210px] sm:w-[280px] md:w-[310px] aspect-[4/3] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_45px_rgba(15,23,42,0.16)] border-[4px] border-white bg-slate-900 will-change-transform z-10`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={CARDS_DATA[0].image}
                alt={CARDS_DATA[0].title}
                className="pcs-img w-full h-full object-cover will-change-transform filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block">
                  {CARDS_DATA[0].location}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white">
                  {CARDS_DATA[0].title}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Top-Right (Emerald Karst Cove) */}
          <div
            className={`${CARDS_DATA[1].id} absolute right-[2%] sm:right-[6%] top-[10%] sm:top-[12%] w-[210px] sm:w-[280px] md:w-[310px] aspect-[4/3] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_45px_rgba(15,23,42,0.16)] border-[4px] border-white bg-slate-900 will-change-transform z-20`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={CARDS_DATA[1].image}
                alt={CARDS_DATA[1].title}
                className="pcs-img w-full h-full object-cover will-change-transform filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block">
                  {CARDS_DATA[1].location}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white">
                  {CARDS_DATA[1].title}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom-Center (Golden Sahara Desert Dunes) */}
          <div
            className={`${CARDS_DATA[2].id} absolute left-[12%] sm:left-[18%] bottom-[4%] sm:bottom-[6%] w-[230px] sm:w-[300px] md:w-[330px] aspect-[4/3] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_25px_50px_rgba(15,23,42,0.22)] border-[4px] border-white bg-slate-900 will-change-transform z-30`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={CARDS_DATA[2].image}
                alt={CARDS_DATA[2].title}
                className="pcs-img w-full h-full object-cover will-change-transform filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block">
                  {CARDS_DATA[2].location}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white">
                  {CARDS_DATA[2].title}
                </span>
              </div>
            </div>
          </div>

          {/* Center Floating Round Medallion Badge (like CtaBanner 30% sale badge) */}
          <div className="pcs-medallion absolute right-[28%] sm:right-[34%] top-[42%] sm:top-[44%] w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 text-white border-4 border-white shadow-2xl flex flex-col items-center justify-center -rotate-6 z-40 will-change-transform select-none">
            <span className="text-2xl sm:text-3xl font-black text-white leading-none">
              45<span className="text-[#FF5B37]">+</span>
            </span>
            <span className="text-[9px] font-extrabold text-[#FF5B37] tracking-widest mt-1">
              CIRCUITS
            </span>
            <span className="text-[7.5px] font-medium text-white/70 tracking-tight">
              DEVBHOOMI &amp; INDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
