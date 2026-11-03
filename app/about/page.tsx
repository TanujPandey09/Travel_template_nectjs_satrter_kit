'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  Sparkle,
  Trophy,
  Medal,
  SealCheck,
  Star,
  MapPin,
  CheckCircle,
  BuildingApartment,
  UsersThree,
  ShieldCheck,
  GlobeHemisphereWest,
  Handshake,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { PartnerLogos } from '@/components/PartnerLogos';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { CtaBanner } from '@/components/CtaBanner';

export default function AboutPage() {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');

  const heroRef = useRef<HTMLDivElement>(null);
  const missionImgRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || 'Custom About Us Consultation');
    setPlannerModalOpen(true);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle parallax on hero image
      if (heroRef.current) {
        gsap.to(heroRef.current.querySelector('img'), {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Parallax on Red Sandstone Canyon image
      if (missionImgRef.current) {
        gsap.fromTo(
          missionImgRef.current.querySelector('img'),
          { scale: 1.1, yPercent: -5 },
          {
            scale: 1,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: missionImgRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Staggered reveal for milestones
      if (milestonesRef.current) {
        const cards = milestonesRef.current.querySelectorAll('.milestone-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: milestonesRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Parallax scroll effect & staggered reveal for awards
      if (awardsRef.current) {
        const rows = awardsRef.current.querySelectorAll<HTMLElement>('.award-row');
        
        // Initial entrance reveal on scroll
        gsap.fromTo(
          rows,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: awardsRef.current,
              start: 'top 82%',
            },
          }
        );

        // Continuous scrub parallax on each award card and its inner thumbnail
        rows.forEach((row, idx) => {
          const driftY = idx % 2 === 0 ? -16 : 20;
          gsap.fromTo(
            row,
            { y: driftY },
            {
              y: -driftY,
              ease: 'none',
              scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );

          const img = row.querySelector('.award-thumb-img');
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -14, scale: 1.15 },
              {
                yPercent: 14,
                scale: 1.0,
                ease: 'none',
                scrollTrigger: {
                  trigger: row,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.0,
                },
              }
            );
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Floating Glass Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            SECTION 1: HERO - "Trusted travel agency about us"
            Matching Framer reference with starry pine forest background card
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20">
          <div
            ref={heroRef}
            className="relative w-full max-w-7xl mx-auto rounded-3xl sm:rounded-[40px] overflow-hidden min-h-[360px] sm:min-h-[460px] md:min-h-[520px] flex flex-col items-center justify-center p-8 sm:p-16 text-center text-white shadow-2xl bg-slate-950"
          >
            {/* Pine forest starry night background photo */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Starry night sky over tranquil evergreen forest"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/50" />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Tilted Floating Pill Tag: Our History */}
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm text-xs font-semibold text-white -rotate-2 hover:rotate-0 transition-transform mb-6">
                <span>Our History</span>
              </div>

              {/* Main Headline matching Framer */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-3xl">
                Trusted travel agency about us
              </h1>

              {/* Subtle supporting narrative */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
                Crafting bespoke expeditions, private chauffeur circuits, and sacred wilderness journeys across Devbhoomi Uttarakhand and premier Indian destinations.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: MISSION & STORY - "About our travel agency journey and mission story today"
            Left: Red rock sandstone canyon photo
            Right: Serving Since 1990 + Heading + Mission / Vision / Value cards + Button
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Red Rock Desert Sandstone Canyon Photo */}
            <div
              ref={missionImgRef}
              className="lg:col-span-5 relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[3/4] bg-slate-100 group"
            >
              <img
                src="https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Red rock sandstone canyon buttes under clear desert sky"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill on Image */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5B37] text-white flex items-center justify-center shrink-0">
                      <Compass size={20} weight="bold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/80">Heritage</p>
                      <p className="text-sm font-extrabold text-white">34+ Years of Discovery</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white">
                    Since 1990
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5B37] text-xs font-bold uppercase tracking-wider">
                <Sparkle size={13} weight="fill" />
                <span>Serving Since 1990</span>
              </div>

              {/* Title matching reference screenshot */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.14]">
                About our travel agency journey and mission story today
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                We believe true travel is never about rushing through landmark checklists. It is about immersing in untouched landscapes, savoring local culinary secrets, and traveling with absolute peace of mind.
              </p>

              {/* 3 Horizontal Cards: Mission / Vision / Value */}
              <div className="w-full space-y-4 pt-2">
                {/* 1. Our Mission */}
                <div className="group rounded-2xl border border-slate-200/80 p-5 sm:p-6 hover:border-[#FF5B37]/50 hover:bg-orange-50/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="w-32 sm:w-36 shrink-0 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5B37]" />
                    <span className="text-base font-bold text-slate-900 tracking-tight">Our mission</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    To connect curious explorers with authentic local communities, pristine wilderness, and bespoke itineraries crafted with deep care and precision.
                  </p>
                </div>

                {/* 2. Our Vision */}
                <div className="group rounded-2xl border border-slate-200/80 p-5 sm:p-6 hover:border-[#FF5B37]/50 hover:bg-orange-50/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="w-32 sm:w-36 shrink-0 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5B37]" />
                    <span className="text-base font-bold text-slate-900 tracking-tight">Our vision</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    To be the gold standard in boutique expedition travel, where five-star comfort meets genuine cultural depth and regenerative sustainability.
                  </p>
                </div>

                {/* 3. Our Value */}
                <div className="group rounded-2xl border border-slate-200/80 p-5 sm:p-6 hover:border-[#FF5B37]/50 hover:bg-orange-50/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="w-32 sm:w-36 shrink-0 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5B37]" />
                    <span className="text-base font-bold text-slate-900 tracking-tight">Our value</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    Absolute transparency, zero hidden charges, local community empowerment, and 24/7 dedicated personal concierge support on every single journey.
                  </p>
                </div>
              </div>

              {/* Get In Touch Button matching screenshot */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-[#FF5B37] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SPONSORS / PARTNERS STRIP - "12000+ Happy sponsors"
            Pixel-perfect monochrome logos (EPSIVI, Logoipsum) matching screenshot
           ========================================================================= */}
        <PartnerLogos />

        {/* =========================================================================
            SECTION 4: MILESTONES / TIMELINE - "Our journey through travel excellence and success"
            Editorial Bento Grid: 2016 (Left tall) | 2019 + 2022 (Center stacked) | 2026 (Right tall)
           ========================================================================= */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full select-none">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-block px-3.5 py-1 bg-white border border-slate-200/90 rounded-full shadow-2xs text-[11px] font-semibold text-slate-700 -rotate-2 hover:rotate-0 transition-transform mb-3.5">
                <span>Our Journey</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Our journey through travel<br className="hidden sm:inline" /> excellence and success
              </h2>
            </div>

            {/* Asymmetric 4-Card Milestone Bento Grid matching screenshot */}
            <div
              ref={milestonesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch"
            >
              {/* Column 1: Year 2016 (Tall Card) */}
              <div className="milestone-card group rounded-3xl sm:rounded-[36px] border border-slate-200/90 p-8 sm:p-10 bg-slate-50/40 hover:bg-white hover:border-[#FF5B37]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[380px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                    Foundation
                  </span>
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6">
                    2016
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Genesis</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Founded in Tapovan, Rishikesh with three private 4x4 overland SUVs, dedicated to leading adventurous souls beyond crowded buses into untouched Garhwal bugyals and sacred Himalayan trails.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">12 Founding Circuits</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5B37]" />
                </div>
              </div>

              {/* Column 2: Stacked Cards (2019 Top, 2022 Bottom) */}
              <div className="flex flex-col gap-6 sm:gap-8 justify-between">
                {/* 2019 Card */}
                <div className="milestone-card group rounded-3xl sm:rounded-[32px] border border-slate-200/90 p-7 sm:p-8 bg-slate-50/40 hover:bg-white hover:border-[#FF5B37]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37]">
                        Expansion
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Fleet Upgrade
                      </span>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
                      2019
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Fleet Modernization</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Expanded into luxury Innova Crystas and Maharaja Tempo Travellers, launching curated multi-day Char Dham, Kumaon lakes, and Corbett private circuits.
                    </p>
                  </div>
                </div>

                {/* 2022 Card */}
                <div className="milestone-card group rounded-3xl sm:rounded-[32px] border border-slate-200/90 p-7 sm:p-8 bg-slate-50/40 hover:bg-white hover:border-[#FF5B37]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37]">
                        Sustainability
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                        Zero-Emission
                      </span>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
                      2022
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Sustainable Tourism</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Pioneered verified carbon-offset Himalayan expeditions, heritage forest lodge stewardship, and community revenue sharing with Garhwal hill villages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 3: Year 2026 (Tall Card) */}
              <div className="milestone-card group rounded-3xl sm:rounded-[36px] border border-slate-200/90 p-8 sm:p-10 bg-slate-50/40 hover:bg-white hover:border-[#FF5B37]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[380px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                    Current Milestone
                  </span>
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6">
                    2026
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">National Horizon</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Recognized as India&apos;s premier boutique expedition specialist, orchestrating private bespoke journeys across Devbhoomi and national circuits for over 50,000 delighted travelers.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">45+ Circuits Covered</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5B37]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: AWARDS & SERVICE EXCELLENCE - "Celebrating excellence in travel and service awards"
            Left: Accreditation seals & trust marks
            Right: 4 Award items with thumbnails & year badges matching screenshot
           ========================================================================= */}
        <section
          ref={awardsRef}
          className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full border-t border-slate-100"
        >
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-block px-3.5 py-1 bg-white border border-slate-200/90 rounded-full shadow-2xs text-[11px] font-semibold text-slate-700 -rotate-2 hover:rotate-0 transition-transform mb-3.5">
                <span>Recognition &amp; Honors</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
                Celebrating excellence in travel<br className="hidden sm:inline" /> and service awards
              </h2>
            </div>

            {/* 2-Column Layout matching Framer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
              {/* Left Column: Accreditations, Industry Seals, and Wreaths (Sticky on Desktop) */}
              <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-6 lg:sticky lg:top-28 self-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    Industry-Certified Standards
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every route, vehicle, and accommodation is rigorously vetted under international safety, sustainability, and hospitality benchmarks.
                  </p>
                </div>

                {/* Accreditations Box */}
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
                  {/* Seal 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-[#FF5B37]">
                      <Trophy size={24} weight="bold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Accredited</p>
                      <p className="text-sm font-extrabold text-slate-900">World Tourism Alliance 2024</p>
                    </div>
                  </div>

                  {/* Seal 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-emerald-600">
                      <SealCheck size={24} weight="bold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Certified</p>
                      <p className="text-sm font-extrabold text-slate-900">Eco-Tourism &amp; Carbon Neutral</p>
                    </div>
                  </div>

                  {/* Seal 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-amber-500">
                      <Star size={24} weight="fill" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Recognition</p>
                      <p className="text-sm font-extrabold text-slate-900">Tripadvisor Travelers&apos; Choice 2025</p>
                    </div>
                  </div>
                </div>

                {/* Quick Trust Stat */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="text-3xl font-black text-slate-900">99.8%</div>
                  <div className="text-xs text-slate-500 leading-tight">
                    Verified guest satisfaction<br />rating across 12,000+ reviews
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Award Entries with Photography Thumbnails & Parallax Glide */}
              <div className="lg:col-span-7 space-y-5">
                {/* Award 1: Excellence travel award (2021) */}
                <div className="award-row group rounded-2xl border border-slate-200/90 p-5 sm:p-6 bg-white hover:border-[#FF5B37]/50 hover:shadow-xl transition-all duration-300 flex items-center gap-4 sm:gap-6 will-change-transform">
                  {/* Thumbnail Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-sm relative">
                    <img
                      src="https://images.pexels.com/photos/7005051/pexels-photo-7005051.jpeg?auto=compress&cs=tinysrgb&w=300"
                      alt="Golden trophy award"
                      className="award-thumb-img w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        Excellence travel award
                      </h4>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#FF5B37] group-hover:text-white transition-colors text-slate-700 shrink-0">
                        2021
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      Awarded for exceptional curation of sacred Himalayan circuits and 99.8% positive guest ratings across Uttarakhand and Indian routes.
                    </p>
                  </div>
                </div>

                {/* Award 2: Trusted travel service (2023) */}
                <div className="award-row group rounded-2xl border border-slate-200/90 p-5 sm:p-6 bg-white hover:border-[#FF5B37]/50 hover:shadow-xl transition-all duration-300 flex items-center gap-4 sm:gap-6 will-change-transform">
                  {/* Thumbnail Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-sm relative">
                    <img
                      src="https://images.pexels.com/photos/7005060/pexels-photo-7005060.jpeg?auto=compress&cs=tinysrgb&w=300"
                      alt="Modern architectural trophy award"
                      className="award-thumb-img w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        Trusted travel service
                      </h4>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#FF5B37] group-hover:text-white transition-colors text-slate-700 shrink-0">
                        2023
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      Recognized for zero-breakdown chauffeur fleet maintenance, punctual dispatch, and 24/7 personalized guest concierge.
                    </p>
                  </div>
                </div>

                {/* Award 3: Customer choice award (2024) */}
                <div className="award-row group rounded-2xl border border-slate-200/90 p-5 sm:p-6 bg-white hover:border-[#FF5B37]/50 hover:shadow-xl transition-all duration-300 flex items-center gap-4 sm:gap-6 will-change-transform">
                  {/* Thumbnail Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-sm relative">
                    <img
                      src="https://images.pexels.com/photos/7005072/pexels-photo-7005072.jpeg?auto=compress&cs=tinysrgb&w=300"
                      alt="Golden ribbon medallion medal"
                      className="award-thumb-img w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        Customer choice award
                      </h4>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#FF5B37] group-hover:text-white transition-colors text-slate-700 shrink-0">
                        2024
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      Voted #1 travel experience provider by over 28,000 independent explorers across verified international review platforms.
                    </p>
                  </div>
                </div>

                {/* Award 4: Service excellence award (2025) */}
                <div className="award-row group rounded-2xl border border-slate-200/90 p-5 sm:p-6 bg-white hover:border-[#FF5B37]/50 hover:shadow-xl transition-all duration-300 flex items-center gap-4 sm:gap-6 will-change-transform">
                  {/* Thumbnail Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-sm relative">
                    <img
                      src="https://images.pexels.com/photos/7005048/pexels-photo-7005048.jpeg?auto=compress&cs=tinysrgb&w=300"
                      alt="Gold embossed service medallion"
                      className="award-thumb-img w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        Service excellence award
                      </h4>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#FF5B37] group-hover:text-white transition-colors text-slate-700 shrink-0">
                        2025
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      Honored for emergency roadside assistance readiness, clear and transparent pricing, and comprehensive traveler protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: STUDIO & ARCHITECTURAL CULTURE - 3 Modern Space Cards
            Matching the 3 architectural office / lounge photos in Framer screenshot
           ========================================================================= */}
        <section ref={galleryRef} className="pb-14 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Photo 1: Glass architectural boardroom */}
              <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Modern glass conference room and journey design studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold text-white">Route Design Studio &bull; Tapovan, Rishikesh</p>
                </div>
              </div>

              {/* Photo 2: Sunlit modern atrium courtyard */}
              <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Sunlit architectural atrium with indoor garden greenery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold text-white">Guest Hospitality Lounge &bull; CP, New Delhi</p>
                </div>
              </div>

              {/* Photo 3: Contemporary minimalist expedition lounge */}
              <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Minimalist collaborative travel expedition office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold text-white">Chauffeur Operations Center &bull; Dehradun Foothills</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: SIGNATURE EXPEDITION CTA BANNER
            Matching homepage layout: dark isolate card + flying photos + badge
           ========================================================================= */}
        <CtaBanner
          onOpenPlanner={handleOpenPlanner}
          pillBadge="Bespoke Expeditions"
          title="Begin your sacred Himalayan expedition"
          subtitle="Crafted by Garhwal mountaineers and certified wildlife naturalists. From private Char Dham sanctuaries to high-altitude luxury camps."
          badgeMain="100%"
          badgeSub="HILL VETTED"
          buttonText="Plan My Expedition"
          context="About Page Himalayan Expedition"
        />
      </main>

      {/* =========================================================================
          SECTION 7: UNIVERSAL SCENIC LANDSCAPE MOUNTAIN FOOTER
          Identical across all pages: Panoramic green mountains + floating glassmorphic
          card + giant watermarked "Traveli" across mountain base
         ========================================================================= */}
      <ScenicLandscapeFooter />

      {/* Concierge Route Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext={plannerContext}
      />
    </div>
  );
}

