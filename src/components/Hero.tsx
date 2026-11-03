'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Compass, CaretDown, Check } from '@phosphor-icons/react';
import * as Select from '@radix-ui/react-select';
import { DatePicker } from './DatePicker';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WaterSplashCanvas } from './WaterSplashCanvas';

interface HeroProps {
  onSearchPackages?: (filters: { region: string; category: string }) => void;
  onOpenPlanner?: (defaultContext?: string) => void;
}

interface MediaSlide {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  label: string;
  caption: string;
}

// TIP: for production, download videos into /public/videos and use
// local paths like '/videos/ocean.mp4' (most reliable).
const HERO_SLIDES: MediaSlide[] = [
  {
    id: 's1',
    type: 'image',
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=2560',
    label: 'Himalayan Ridge',
    caption: 'Nanda Devi & Auli Snow Meadows',
  },
  {
    id: 's2',
    type: 'video',
    src: 'https://videos.pexels.com/video-files/19368789/19368789-hd_1920_1080_30fps.mp4',
    poster:
      'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=2560',
    label: 'Sacred River',
    caption: 'Rishikesh Ganga Valley & White Water',
  },
  {
    id: 's3',
    type: 'image',
    src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=2560',
    label: 'Kumaon Foothills',
    caption: 'Jim Corbett & Nainital Emerald Hills',
  },
  {
    id: 's4',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster:
      'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=2560',
    label: 'Devbhoomi Pines',
    caption: 'Mandakini Valley & Kedarnath Trails',
  },
  {
    id: 's5',
    type: 'image',
    src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=2560',
    label: 'Alpine Lakes',
    caption: 'Tungnath High Bugyals & Chandrashila',
  },
  {
    id: 's6',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster:
      'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=2560',
    label: 'Royal Thar Dunes',
    caption: 'Jaisalmer & Rajasthan Heritage Circuits',
  },
];

// Shared field styles (58px tall, 12px radius, glass fill, hairline border)
const FIELD =
  'h-[52px] sm:h-[58px] w-full rounded-xl border border-white/25 bg-white/10 px-4 sm:px-[17px] text-base sm:text-[17px] text-white outline-none transition-colors hover:bg-white/[0.14] focus:border-white/60';
const LABEL =
  'mb-3 sm:mb-[18px] block text-base sm:text-[18px] leading-6 text-white/90';

const DESTINATION_OPTIONS = [
  { value: 'All', label: 'All Destinations', subtitle: 'Uttarakhand, Himalayas & India' },
  { value: 'Kedarnath', label: 'Kedarnath & Badrinath', subtitle: 'Sacred Dham Pilgrimage' },
  { value: 'Rishikesh', label: 'Rishikesh & Haridwar', subtitle: 'Ganga Valley & Rafting' },
  { value: 'Auli', label: 'Auli & Chopta', subtitle: 'Snow Meadows & Tungnath' },
  { value: 'Jim Corbett', label: 'Jim Corbett Safari', subtitle: 'Tiger Reserve Expedition' },
  { value: 'Nainital', label: 'Nainital & Mussoorie', subtitle: 'Lakes & Ridge Escapes' },
  { value: 'Kashmir', label: 'Kashmir & Ladakh', subtitle: 'High Passes & Valleys' },
  { value: 'Rajasthan', label: 'Rajasthan Heritage', subtitle: 'Royal Forts & Palaces' },
];

const TRAVELER_OPTIONS = [
  { value: '01 person', label: '01 Person', subtitle: 'Solo Explorer' },
  { value: '02 persons', label: '02 Persons', subtitle: 'Couple / Duo' },
  { value: '04 persons', label: '04 Persons', subtitle: 'Family Vacation' },
  { value: '08+ persons', label: '08+ Persons', subtitle: 'Group / Corporate' },
];

export const Hero: React.FC<HeroProps> = ({
  onSearchPackages,
  onOpenPlanner,
}) => {
  const [destination, setDestination] = useState('All');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelerCount, setTravelerCount] = useState('01 person');

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Slides whose video failed to load -> fall back to poster image
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);

  // GSAP parallax scrub
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 10,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Background slide auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchPackages?.({ region: destination, category: 'All' });
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenPlanner?.(`Expedition to ${destination} (${travelerCount})`);
    }
  };

  return (
    <section
      ref={heroRef}
      // `isolate` makes the -z-10 background paint ABOVE bg-slate-950
      className="relative isolate flex h-[92vh] max-h-[960px] min-h-[680px] w-full items-end justify-center overflow-hidden bg-slate-950 select-none lg:min-h-[720px]"
    >
      {/* Background carousel with parallax */}
      <div
        ref={heroBgRef}
        className="absolute inset-x-0 -top-[8%] -z-10 h-[116%] overflow-hidden will-change-transform"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeSlideIndex;
          const showVideo = slide.type === 'video' && !failed[slide.id];

          return (
            <div
              key={slide.id}
              data-hero-active={isActive ? 'true' : 'false'}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${isActive
                  ? 'z-10 opacity-100'
                  : 'pointer-events-none z-0 opacity-0'
                }`}
            >
              {showVideo ? (
                isActive && (
                  <video
                    key={slide.id}
                    src={slide.src}
                    poster={slide.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onError={() =>
                      setFailed((f) => ({ ...f, [slide.id]: true }))
                    }
                    className="h-full w-full object-cover object-center"
                  />
                )
              ) : (
                <img
                  src={slide.type === 'video' ? slide.poster : slide.src}
                  alt={slide.caption}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
          );
        })}

        {/* Water ripple: bends the active slide on click */}
        <WaterSplashCanvas />

        {/* Soft legibility gradients (lighter than before: image stays vivid) */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />
        <div className="pointer-events-none absolute inset-0 z-20 w-full bg-gradient-to-r from-slate-950/40 via-transparent to-transparent lg:w-3/5" />
      </div>

      {/* Content: pinned to the bottom, heading left, form right */}
      <div className="relative z-20 grid w-full grid-cols-1 items-end gap-8 sm:gap-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pb-10 sm:pb-14 pt-24 sm:pt-28 max-w-7xl mx-auto lg:grid-cols-12">
        {/* Left: rating + headline */}
        <div className="text-left lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-[17px]"
          >
            <span className="text-white/80">4.8 Stars on</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#34E0A1" />
                <circle cx="8.2" cy="12.5" r="3.2" fill="#fff" />
                <circle cx="15.8" cy="12.5" r="3.2" fill="#fff" />
                <circle cx="8.2" cy="12.5" r="1.4" fill="#000" />
                <circle cx="15.8" cy="12.5" r="1.4" fill="#000" />
              </svg>
              Tripadvisor
            </span>
            <span className="text-white/80">(586,679 reviews)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white"
          >
            Your Himalayan
            <br />
            journey is one
            <br />
            click away
          </motion.h1>
        </div>

        {/* Right: glass booking card */}
        <div className="flex lg:col-span-5 lg:justify-end">
          <motion.div
            data-no-ripple
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-[498px] rounded-[20px] border border-white/25 bg-gradient-to-b from-white/[0.17] to-white/[0.07] px-5 pb-5 pt-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-[29px] sm:pb-[29px] sm:pt-[33px]"
          >
            <form onSubmit={handleSearchSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-[13px]">
                <div>
                  <label htmlFor="hero-dest" className={LABEL}>
                    Where to
                  </label>
                  <Select.Root value={destination} onValueChange={setDestination}>
                    <Select.Trigger
                      id="hero-dest"
                      aria-label="Where to"
                      className="flex h-[52px] sm:h-[58px] w-full cursor-pointer items-center justify-between rounded-xl border border-white/25 bg-white/10 px-3.5 sm:px-4 text-sm sm:text-base text-white outline-none transition-all hover:bg-white/[0.14] focus:border-white/60 focus:ring-2 focus:ring-white/20 text-left"
                    >
                      <Select.Value>
                        <span className="truncate pr-1 font-medium">
                          {DESTINATION_OPTIONS.find((d) => d.value === destination)?.label || 'All Destinations'}
                        </span>
                      </Select.Value>
                      <Select.Icon className="text-white shrink-0 ml-1">
                        <CaretDown size={18} weight="bold" />
                      </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                      <Select.Content
                        position="popper"
                        sideOffset={8}
                        className="z-50 min-w-[240px] max-w-[320px] max-h-[360px] overflow-auto rounded-2xl border border-white/20 bg-slate-950/95 p-1.5 text-white shadow-2xl backdrop-blur-2xl ring-1 ring-black/50"
                      >
                        <Select.Viewport className="p-1 space-y-0.5">
                          {DESTINATION_OPTIONS.map((dest) => (
                            <Select.Item
                              key={dest.value}
                              value={dest.value}
                              className="relative flex cursor-pointer select-none items-center rounded-xl py-2.5 pl-8 pr-3 text-sm font-medium text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white data-[highlighted]:bg-white/10 data-[highlighted]:text-white data-[state=checked]:text-[#FF5B37] data-[state=checked]:font-semibold"
                            >
                              <Select.ItemIndicator className="absolute left-2.5 flex items-center justify-center text-[#FF5B37]">
                                <Check size={16} weight="bold" />
                              </Select.ItemIndicator>
                              <div className="flex flex-col min-w-0">
                                <Select.ItemText className="font-medium text-sm text-white">
                                  {dest.label}
                                </Select.ItemText>
                                {dest.subtitle && (
                                  <span className="text-[11px] text-white/50 truncate">
                                    {dest.subtitle}
                                  </span>
                                )}
                              </div>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>

                <div>
                  <label htmlFor="hero-depart" className={LABEL}>
                    Departure
                  </label>
                  <DatePicker
                    id="hero-depart"
                    value={departureDate}
                    onChange={setDepartureDate}
                    placeholder="Select date"
                    ariaLabel="Departure date"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="mt-6 grid grid-cols-2 gap-[13px] sm:mt-9">
                <div>
                  <label htmlFor="hero-return" className={LABEL}>
                    Return date
                  </label>
                  <DatePicker
                    id="hero-return"
                    value={returnDate}
                    minDate={departureDate || undefined}
                    onChange={setReturnDate}
                    placeholder="Select date"
                    ariaLabel="Return date"
                  />
                </div>

                <div>
                  <label htmlFor="hero-traveler" className={LABEL}>
                    Traveler
                  </label>
                  <Select.Root value={travelerCount} onValueChange={setTravelerCount}>
                    <Select.Trigger
                      id="hero-traveler"
                      aria-label="Traveler"
                      className="flex h-[52px] sm:h-[58px] w-full cursor-pointer items-center justify-between rounded-xl border border-white/25 bg-white/10 px-3.5 sm:px-4 text-sm sm:text-base text-white outline-none transition-all hover:bg-white/[0.14] focus:border-white/60 focus:ring-2 focus:ring-white/20 text-left"
                    >
                      <Select.Value>
                        <span className="truncate pr-1 font-medium">
                          {TRAVELER_OPTIONS.find((t) => t.value === travelerCount)?.label || travelerCount}
                        </span>
                      </Select.Value>
                      <Select.Icon className="text-white shrink-0 ml-1">
                        <CaretDown size={18} weight="bold" />
                      </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                      <Select.Content
                        position="popper"
                        sideOffset={8}
                        className="z-50 min-w-[220px] max-w-[280px] overflow-auto rounded-2xl border border-white/20 bg-slate-950/95 p-1.5 text-white shadow-2xl backdrop-blur-2xl ring-1 ring-black/50"
                      >
                        <Select.Viewport className="p-1 space-y-0.5">
                          {TRAVELER_OPTIONS.map((item) => (
                            <Select.Item
                              key={item.value}
                              value={item.value}
                              className="relative flex cursor-pointer select-none items-center rounded-xl py-2.5 pl-8 pr-3 text-sm font-medium text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white data-[highlighted]:bg-white/10 data-[highlighted]:text-white data-[state=checked]:text-[#FF5B37] data-[state=checked]:font-semibold"
                            >
                              <Select.ItemIndicator className="absolute left-2.5 flex items-center justify-center text-[#FF5B37]">
                                <Check size={16} weight="bold" />
                              </Select.ItemIndicator>
                              <div className="flex flex-col min-w-0">
                                <Select.ItemText className="font-medium text-sm text-white">
                                  {item.label}
                                </Select.ItemText>
                                {item.subtitle && (
                                  <span className="text-[11px] text-white/50 truncate">
                                    {item.subtitle}
                                  </span>
                                )}
                              </div>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
              </div>

              {/* Action (compact, left aligned, like the reference) */}
              <button
                type="submit"
                className="mt-6 inline-flex h-[52px] cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-5 text-base font-medium text-slate-900 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all hover:bg-slate-100 active:scale-[0.97] sm:mt-[34px] sm:h-[57px] sm:text-[18px]"
              >
                <Compass size={24} weight="regular" />
                <span>Explore Now</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};