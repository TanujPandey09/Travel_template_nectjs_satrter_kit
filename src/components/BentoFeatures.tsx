'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  NavigationArrow,
  Receipt,
  ChatCircleText,
  Sparkle,
  CheckCircle,
} from '@phosphor-icons/react';

const LiveDispatchTicker = memo(() => {
  const dispatches = [
    {
      id: 'd1',
      code: 'DL-01-GC-8842',
      status: 'Force Urbania 17-Seater standing by at Srinagar Airport VIP Bay',
      time: '2m ago',
    },
    {
      id: 'd2',
      code: 'HP-01-M-4910',
      status: 'Innova Crysta crossed Atal Tunnel North Portal checkpost safely',
      time: '5m ago',
    },
    {
      id: 'd3',
      code: 'RJ-27-PA-7721',
      status: 'Maharaja Tempo Traveller checked in at Sam Dunes Heritage Camp',
      time: '9m ago',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dispatches.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [dispatches.length]);

  const current = dispatches[activeIndex];

  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5 space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          ACTIVE GPS FLEET TELEMETRY
        </span>
        <span className="text-slate-400 font-medium">{current.time}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-2.5"
        >
          <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 font-bold text-[11px] shrink-0 shadow-2xs">
            {current.code}
          </span>
          <p className="text-xs text-slate-700 leading-snug font-medium">{current.status}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export const BentoFeatures: React.FC = () => {
  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white relative w-full border-b border-slate-100">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={14} weight="fill" />
            <span>Why Travelioo Is Rated #1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Gold Standard In Tour & Fleet Management
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We operate our own commercial fleet and vetted hotel network so you never face midway breakdowns, price gouging, or inexperienced hill drivers.
          </p>
        </div>

        {/* Framer Bento 4-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento 1: Live GPS & Fleet Monitoring (Span 7) */}
          <div className="md:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B37] flex items-center justify-center mb-5 shadow-2xs">
                <NavigationArrow size={24} weight="bold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Live GPS Highway Telemetry
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-xl">
                Every vehicle in our fleet is integrated with real-time GPS telemetry, SOS emergency response, and proactive speed monitoring for mountainous terrain safety.
              </p>
            </div>

            <div className="mt-6">
              <LiveDispatchTicker />
            </div>
          </div>

          {/* Bento 2: Verified Police-Checked Drivers (Span 5) */}
          <div className="md:col-span-5 bg-orange-50/50 rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#FF5B37] flex items-center justify-center mb-5 shadow-2xs border border-orange-200/60">
                <ShieldCheck size={24} weight="bold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Verified Chauffeurs
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Background-checked, uniform-clad drivers with 8+ years experience navigating tough high-altitude Himalayan and desert circuits.
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                <span>Zero Alcohol & Punctuality Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                <span>Local Language & Sightseeing Expertise</span>
              </div>
            </div>
          </div>

          {/* Bento 3: Transparent Billing (Span 5) */}
          <div className="md:col-span-5 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 shadow-2xs">
                <Receipt size={24} weight="bold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                100% Fixed Quotations
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                No hidden night surcharges or mystery parking bills midway through your vacation. All tax, permit, and fuel terms are clearly written before departure.
              </p>
            </div>

            <div className="mt-6 p-3.5 bg-white rounded-2xl border border-slate-200/70 text-xs font-medium text-slate-600">
              <span className="font-bold text-slate-900">GST Invoice Provided:</span> Full corporate claim compliance with GST input tax credit available for all business travel.
            </div>
          </div>

          {/* Bento 4: 24x7 Roadside Concierge (Span 7) */}
          <div className="md:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5 shadow-2xs">
                <ChatCircleText size={24} weight="bold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Dedicated 24/7 WhatsApp Concierge
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-xl">
                Need to adjust checkout time, swap an activity, or request special dietary meals? Your dedicated journey manager is always one WhatsApp message away.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                ⚡ Average Response: &lt; 3 Minutes
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                🛠️ Instant Vehicle Backup Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
