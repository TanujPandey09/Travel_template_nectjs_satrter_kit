'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Mountains,
  Sparkle,
  PhoneCall,
  House,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { AGENCY_CONFIG } from '@/data/travelData';

export default function NotFound() {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden flex flex-col justify-between">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={() => setPlannerModalOpen(true)} />

      <main className="w-full pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center text-center">
        {/* Tilted Floating Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 mb-4 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5B37] text-xs font-bold uppercase tracking-wider">
          <Compass size={14} weight="bold" />
          <span>Coordinate Not Found</span>
        </div>

        {/* 404 Graphic */}
        <div className="relative mb-6">
          <span className="text-8xl sm:text-9xl md:text-[140px] font-black text-slate-100 leading-none select-none tracking-tighter">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-900 text-white flex items-center justify-center shadow-2xl border-4 border-white rotate-6 hover:rotate-0 transition-transform">
              <Mountains size={44} weight="duotone" className="text-[#FF5B37]" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mb-4">
          Lost on the Himalayan Trail?
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal mb-8">
          The page or pass you are searching for might have shifted with the seasons, or the trail marker URL is incorrect. Let&apos;s guide you back to camp.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-[#FF5B37] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-95"
          >
            <House size={16} weight="bold" />
            <span>Return to Home Base</span>
          </Link>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs"
          >
            <span>Explore All Destinations</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* Quick Recovery Links */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 max-w-2xl w-full text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Popular Waypoints
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-700 font-semibold">
            <Link href="/destinations/kedarnath" className="hover:text-[#FF5B37] transition-colors">
              Kedarnath Yatra
            </Link>
            <span>&bull;</span>
            <Link href="/destinations/auli" className="hover:text-[#FF5B37] transition-colors">
              Auli Ski Resort
            </Link>
            <span>&bull;</span>
            <Link href="/destinations/rishikesh" className="hover:text-[#FF5B37] transition-colors">
              Rishikesh Rafting
            </Link>
            <span>&bull;</span>
            <Link href="/pricing" className="hover:text-[#FF5B37] transition-colors">
              Fleet Tariffs
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[#FF5B37] transition-colors">
              Concierge Desk
            </Link>
          </div>
        </div>
      </main>

      {/* Universal Scenic Mountain Footer */}
      <ScenicLandscapeFooter />

      {/* Concierge Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext="Lost Route Assistance"
      />
    </div>
  );
}

