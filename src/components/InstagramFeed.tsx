'use client';

import React from 'react';
import { Compass } from '@phosphor-icons/react';

interface InstaItem {
  id: string;
  image: string;
  alt: string;
}

const INSTA_FEED_ITEMS: InstaItem[] = [
  {
    id: 'f1',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Happy couple selfie while camping near misty mountain peak',
  },
  {
    id: 'f2',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Traveler wearing stylish sunglasses taking casual travel selfie',
  },
  {
    id: 'f3',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Father in beanie and smiling daughter taking selfie at alpine lake',
  },
  {
    id: 'f4',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Traveler in knit shirt holding camera up on sunlit coastal beach',
  },
  {
    id: 'f5',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Friends laughing while taking selfie during forest mountain hike',
  },
  {
    id: 'f6',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Couple enjoying scenic nature campsite in autumn woods',
  },
  {
    id: 'f7',
    image: 'https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Backpackers celebrating and taking selfie on high summit viewpoint',
  },
  {
    id: 'f8',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Solo traveler taking sunset selfie overlooking coastal sea cove',
  },
];

interface InstagramFeedProps {
  onOpenPlanner?: (context?: string) => void;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ onOpenPlanner }) => {
  return (
    <section
      aria-label="Alpinex Instagram Community Feed"
      className="py-14 sm:py-20 md:py-24 bg-white w-full overflow-hidden select-none border-t border-slate-100 relative"
    >
      {/* Header matching user uploaded screenshot exactly */}
      <div className="text-center mb-10 sm:mb-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-7xl mx-auto flex flex-col items-center">
        {/* Tilted Floating Pill Tag: Alpinex.Insta */}
        <div className="inline-block px-3.5 py-1 bg-white border border-slate-200/90 rounded-full shadow-xs text-xs font-semibold text-slate-700 -rotate-3 hover:rotate-0 transition-transform mb-3.5">
          <span>Alpinex.Insta</span>
        </div>

        {/* Large Bold Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Alpinex Instagram feed
        </h2>
      </div>

      {/* Infinite Horizontal Carousel (Left to Right) with Edge Gradient Fade */}
      <div className="relative w-full overflow-hidden flex pause-on-hover">
        {/* Left & Right Edge Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Track 1 */}
        <div className="flex shrink-0 animate-marquee-ltr items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
          {INSTA_FEED_ITEMS.map((item) => (
            <div
              key={`track1-${item.id}`}
              className="group/card relative w-[210px] sm:w-[250px] md:w-[270px] aspect-[3/4] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 shrink-0 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Duplicate Track 2 for Seamless Continuous Infinite Loop */}
        <div className="flex shrink-0 animate-marquee-ltr items-center gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
          {INSTA_FEED_ITEMS.map((item) => (
            <div
              key={`track2-${item.id}`}
              className="group/card relative w-[210px] sm:w-[250px] md:w-[270px] aspect-[3/4] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 shrink-0 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Centered Action Button below the Carousel matching screenshot */}
      <div className="text-center mt-9 sm:mt-12 px-4">
        <button
          type="button"
          onClick={() => onOpenPlanner?.('Instagram Feed Journey')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer"
        >
          <Compass size={17} weight="bold" className="text-[#FF5B37]" />
          <span>Start Your Journey</span>
        </button>
      </div>
    </section>
  );
};
