'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'h1',
    title: 'Sacred Mandakini River & Kedarnath Massif',
    subtitle: 'Garhwal Himalayas, Uttarakhand',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'h2',
    title: 'Emerald Kumaon Lakes & Deodar Forests',
    subtitle: 'Nainital & Bhimtal, Uttarakhand',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'h3',
    title: 'Royal Lake Palaces & Thar Desert Dunes',
    subtitle: 'Rajasthan Heritage Circuit',
    image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const EditorialHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const imgs = gridRef.current?.querySelectorAll('.highlight-img');
      if (imgs) {
        imgs.forEach((img) => {
          gsap.fromTo(
            img,
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
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full border-t border-slate-100"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-bold text-[#FF5B37] uppercase tracking-widest block mb-2">
            Himalayan &amp; Pan-India Horizons
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Unforgettable landscapes across Devbhoomi &amp; India
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Sacred mountain shrines, emerald lake hideaways, and royal desert palaces.
          </p>
        </div>

        {/* 3 Vertical Architectural Cards Grid with Parallax Scrub */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-slate-100 cursor-pointer bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="highlight-img w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-amber-300 block">{item.subtitle}</span>
                <h3 className="text-lg font-bold leading-snug group-hover:text-orange-200 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight size={18} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
