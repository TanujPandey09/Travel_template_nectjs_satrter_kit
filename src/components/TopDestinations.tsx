'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  CaretLeft,
  CaretRight,
  MapPin,
  FilmStrip,
  Camera,
  Play,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface DestinationItem {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
  video?: string;
  mediaType: 'video' | 'image';
  wide?: boolean;
}

const DESTINATIONS: DestinationItem[] = [
  {
    id: 'd1',
    name: 'Rishikesh River & Yoga Haven',
    location: 'Rishikesh',
    price: '₹4,499',
    image: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mediaType: 'image',
    wide: false,
  },
  {
    id: 'd2',
    name: 'Auli Himalayan Ski Meadows',
    location: 'Auli',
    price: '₹7,899',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mediaType: 'image',
    wide: false,
  },
  {
    id: 'd3',
    name: 'Kedarnath Sacred High Shrine',
    location: 'Kedarnath',
    price: '₹14,990',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600',
    video: 'https://videos.pexels.com/video-files/19368789/19368789-hd_1920_1080_30fps.mp4',
    mediaType: 'video',
    wide: true,
  },
  {
    id: 'd4',
    name: 'Jim Corbett Tiger Safari',
    location: 'Jim Corbett',
    price: '₹8,490',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1600',
    video: 'https://raw.githubusercontent.com/bower-media-samples/big-buck-bunny-1080p-60fps-30s/master/video.mp4',
    mediaType: 'video',
    wide: true,
  },
  {
    id: 'd5',
    name: 'Nainital Emerald Lake & Kumaon',
    location: 'Nainital',
    price: '₹5,490',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mediaType: 'image',
    wide: false,
  },
  {
    id: 'd6',
    name: 'Mussoorie & Dhanaulti Ridge',
    location: 'Mussoorie',
    price: '₹4,890',
    image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    video: 'https://raw.githubusercontent.com/bower-media-samples/big-buck-bunny-1080p-60fps-30s/master/video.mp4',
    mediaType: 'video',
    wide: false,
  },
];

const LOCATION_TABS = ['All', 'Rishikesh', 'Auli', 'Kedarnath', 'Jim Corbett', 'Nainital', 'Mussoorie'];

interface TopDestinationsProps {
  onSelectDestination?: (destName: string) => void;
}

export const TopDestinations: React.FC<TopDestinationsProps> = ({
  onSelectDestination,
}) => {
  const [activeLocation, setActiveLocation] = useState('All');
  const [mediaFilter, setMediaFilter] = useState<'all' | 'video' | 'image'>('all');
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.dest-bento-card');
      if (cards) {
        gsap.from(cards, {
          y: 35,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filtered = DESTINATIONS.filter((d) => {
    const matchesLoc = activeLocation === 'All' || d.location.toLowerCase() === activeLocation.toLowerCase();
    const matchesMedia = mediaFilter === 'all' || d.mediaType === mediaFilter;
    return matchesLoc && matchesMedia;
  });

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-[#FAFBFC] w-full border-t border-slate-100 relative overflow-hidden"
    >
      {/* Subtle background ambient blur */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header matching screenshot 3 exactly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#FF5B37] uppercase tracking-widest">
                Curated Travel Catalog
              </span>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <button
                  type="button"
                  onClick={() => setMediaFilter('all')}
                  className={`hover:text-slate-900 transition-colors cursor-pointer ${
                    mediaFilter === 'all' ? 'text-slate-900 font-bold underline' : ''
                  }`}
                >
                  All (6)
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setMediaFilter('video')}
                  className={`hover:text-slate-900 transition-colors cursor-pointer ${
                    mediaFilter === 'video' ? 'text-slate-900 font-bold underline' : ''
                  }`}
                >
                  4K Videos (3)
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setMediaFilter('image')}
                  className={`hover:text-slate-900 transition-colors cursor-pointer ${
                    mediaFilter === 'image' ? 'text-slate-900 font-bold underline' : ''
                  }`}
                >
                  Photos (3)
                </button>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Top destinations<br />travelers love
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Location Filter Pill Carousel - horizontal scroll on mobile */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/90 rounded-full shadow-2xs overflow-x-auto max-w-full">
              {LOCATION_TABS.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setActiveLocation(loc)}
                  className={`h-9 px-4 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all cursor-pointer whitespace-nowrap ${
                    activeLocation === loc
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* "More Destinations" button matching screenshot */}
            <button
              type="button"
              onClick={() => onSelectDestination?.('All Destinations')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 text-slate-800 text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <Compass size={17} weight="bold" className="text-[#FF5B37]" />
              <span>More Destinations</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Grid: EXACT SAME HEIGHT ACROSS ALL CARDS */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDestination?.(item.location)}
              className={`dest-bento-card group cursor-pointer ${
                item.wide ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {/* Media Container: Photos & Videos with Exact Same Height */}
              <div className="relative h-[250px] sm:h-[280px] md:h-[310px] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-xs group-hover:shadow-xl transition-all duration-300">
                {!isMobile && item.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92]"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}

                {/* Subtle bottom gradient on media */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Top-Left Location Badge matching screenshot */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-bold shadow-xs">
                  <MapPin size={13} weight="fill" className="text-white" />
                  <span>{item.location}</span>
                </div>

                {/* Top-Right Media Badge (4K Video or Photo) */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-xs">
                  {item.video ? (
                    <>
                      <FilmStrip size={13} weight="fill" className="text-[#FF5B37]" />
                      <span>4K Video</span>
                    </>
                  ) : (
                    <>
                      <Camera size={13} weight="bold" className="text-sky-300" />
                      <span>Photo</span>
                    </>
                  )}
                </div>
              </div>

              {/* Card Bottom Meta matching screenshot */}
              <div className="pt-3 pb-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF5B37] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  <span className="font-semibold text-slate-700">{item.price}</span> /Per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
