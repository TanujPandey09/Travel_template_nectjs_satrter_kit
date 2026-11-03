'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  ShieldCheck,
  Star,
  Certificate,
  Mountains,
  BuildingApartment,
  Handshake,
  FirstAid,
  ArrowRight,
  Sparkle,
  Clock,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { CtaBanner } from '@/components/CtaBanner';
import { TEAM_MEMBERS, TEAM_PILLARS } from '@/data/teamData';

export default function TeamPage() {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');

  const heroRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || 'Expedition Team Consultation');
    setPlannerModalOpen(true);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // Parallax on hero image
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

      // Pillars entrance reveal
      if (pillarsRef.current) {
        const pillarCards = pillarsRef.current.querySelectorAll('.pillar-card');
        gsap.fromTo(
          pillarCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 82%',
            },
          }
        );
      }

      // Team cards entrance reveal
      if (teamGridRef.current) {
        const memberCards = teamGridRef.current.querySelectorAll('.team-member-card');
        gsap.fromTo(
          memberCards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: teamGridRef.current,
              start: 'top 82%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            SECTION 1: HERO - Matching About page signature cinematic card
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20">
          <div
            ref={heroRef}
            className="relative w-full max-w-7xl mx-auto rounded-3xl sm:rounded-[40px] overflow-hidden min-h-[360px] sm:min-h-[460px] md:min-h-[500px] flex flex-col items-center justify-center p-8 sm:p-16 text-center text-white shadow-2xl bg-slate-950"
          >
            {/* Snowy Garhwal mountain peaks background photo */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Snow-covered high peaks of Nanda Devi and Garhwal Himalaya"
                className="w-full h-full object-cover filter brightness-[0.52] contrast-[1.15] will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/50" />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Tilted Floating Pill Tag */}
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm text-xs font-semibold text-white -rotate-2 hover:rotate-0 transition-transform mb-6">
                <span>The Stewards of Devbhoomi</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-3xl">
                The mountaineers &amp;<br className="hidden sm:inline" /> guides behind Traveli
              </h1>

              {/* Subtle supporting narrative */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
                Rooted in the Garhwal and Kumaon Himalayas. Our team combines over a century of cumulative high-altitude route logistics, military hill safety protocols, and grassroots village community partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 PILLARS OF MOUNTAIN STEWARDSHIP
           ========================================================================= */}
        <section ref={pillarsRef} className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="pillar-card p-6 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#FF5B37]/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-[#FF5B37] shadow-2xs">
                  {idx === 0 && <ShieldCheck size={24} weight="fill" />}
                  {idx === 1 && <BuildingApartment size={24} weight="fill" />}
                  {idx === 2 && <FirstAid size={24} weight="fill" />}
                  {idx === 3 && <Handshake size={24} weight="fill" />}
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B37] block">
                    {p.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mt-0.5">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SLEEK COMPACT TEAM CARDS (ONLY SPECIFIC DETAILS)
            Clicking any card opens the comprehensive individual dossier
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
              Leadership &amp; Expedition Leads
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Meet the People Guiding Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Select any team member to view their verified field credentials, route history, and personal mountain philosophy.
            </p>
          </div>

          <div ref={teamGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="team-member-card group block rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#FF5B37]/50 transition-all duration-300"
              >
                {/* Sleek Compact Portrait Image (16/11 ratio) */}
                <div className="relative aspect-[16/11] w-full bg-slate-900 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-[0.97] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Role Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-sm">
                      {member.badge}
                    </span>
                  </div>

                  {/* Bottom Experience Tag */}
                  <div className="absolute bottom-3 right-3.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-semibold text-white/90 border border-white/15">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Specific Details Only (Compact, No Long Text) */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#FF5B37] transition-colors leading-snug truncate">
                        {member.name}
                      </h3>
                      <ArrowRight
                        size={15}
                        weight="bold"
                        className="text-slate-400 group-hover:text-[#FF5B37] group-hover:translate-x-1 transition-all shrink-0"
                      />
                    </div>

                    <p className="text-xs font-bold text-[#FF5B37] leading-tight mt-1 mb-3.5 truncate">
                      {member.role}
                    </p>

                    {/* Specific Location Details */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-3 border-t border-slate-100">
                      <span className="flex items-center gap-1.5 truncate">
                        <MapPin size={13} weight="fill" className="text-[#FF5B37] shrink-0" />
                        <span className="truncate">{member.origin}</span>
                      </span>
                      <span className="text-[11px] font-bold text-slate-900 group-hover:text-[#FF5B37] shrink-0">
                        View Dossier &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: SIGNATURE CAREERS CTA BANNER
           ========================================================================= */}
        <CtaBanner
          onOpenPlanner={handleOpenPlanner}
          pillBadge="Careers &amp; Stewards"
          title="Are you a master of Himalayan mountain roads?"
          subtitle="We are seeking certified high-altitude chauffeurs, wildlife naturalists, and expedition planners across Rishikesh, Dehradun, and Ramnagar."
          badgeMain="100%"
          badgeSub="HILL NATIVE"
          buttonText="Explore Careers &amp; Apply"
          buttonHref="/contact"
          context="Career & Stewardship Application"
        />
      </main>

      {/* Universal Scenic Mountain Footer */}
      <ScenicLandscapeFooter />

      {/* Concierge Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext={plannerContext}
      />
    </div>
  );
}
