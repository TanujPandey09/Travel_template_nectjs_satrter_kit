'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  CheckCircle,
  XCircle,
  ShieldCheck,
  Calculator,
  Car,
  UsersThree,
  GasPump,
  Sparkle,
  PhoneCall,
  WhatsappLogo,
  ArrowRight,
  CaretRight,
  Receipt,
  Info,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { CtaBanner } from '@/components/CtaBanner';
import { FLEET_VEHICLES, AGENCY_CONFIG } from '@/data/travelData';

const POPULAR_ROUTE_PRESETS = [
  { name: 'Delhi to Rishikesh & Haridwar (3 Days / 550 km)', km: 550, days: 3 },
  { name: 'Rishikesh to Kedarnath & Badrinath (6 Days / 850 km)', km: 850, days: 6 },
  { name: 'Delhi to Nainital & Jim Corbett (4 Days / 700 km)', km: 700, days: 4 },
  { name: 'Delhi to Auli & Chopta Snow Circuit (5 Days / 1,100 km)', km: 1100, days: 5 },
  { name: 'Delhi to Rajasthan Golden Triangle (6 Days / 1,200 km)', km: 1200, days: 6 },
];

export default function PricingPage() {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');

  // Interactive Calculator State
  const [calcVehicleId, setCalcVehicleId] = useState(FLEET_VEHICLES[0]?.id || 'toyota-innova-crysta');
  const [calcDays, setCalcDays] = useState(4);
  const [calcKm, setCalcKm] = useState(800);

  const selectedVehicle = useMemo(() => {
    return FLEET_VEHICLES.find((v) => v.id === calcVehicleId) || FLEET_VEHICLES[0];
  }, [calcVehicleId]);

  // Calculator computation
  const calculation = useMemo(() => {
    const minBillableKm = Math.max(calcKm, calcDays * (selectedVehicle?.minKmPerDay || 250));
    const kmCharges = minBillableKm * (selectedVehicle?.perKmRate || 18);
    const driverAllowance = calcDays * (selectedVehicle?.driverAllowancePerDay || 500);
    const stateTaxTollEst = Math.round(minBillableKm * 1.8);
    const totalEst = kmCharges + driverAllowance + stateTaxTollEst;

    return {
      minBillableKm,
      kmCharges,
      driverAllowance,
      stateTaxTollEst,
      totalEst,
    };
  }, [selectedVehicle, calcDays, calcKm]);

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || 'Fleet Tariff & Pricing Consultation');
    setPlannerModalOpen(true);
  };

  const handleApplyPreset = (preset: { km: number; days: number }) => {
    setCalcKm(preset.km);
    setCalcDays(preset.days);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            SECTION 1: HERO - Matching About page signature cinematic card
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20">
          <div className="relative w-full max-w-7xl mx-auto rounded-3xl sm:rounded-[40px] overflow-hidden min-h-[360px] sm:min-h-[460px] md:min-h-[500px] flex flex-col items-center justify-center p-8 sm:p-16 text-center text-white shadow-2xl bg-slate-950">
            {/* Mountain highway scenic background photo */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Winding scenic mountain highway through lush Himalayan foothills"
                className="w-full h-full object-cover filter brightness-[0.52] contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/50" />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Tilted Floating Pill Tag */}
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm text-xs font-semibold text-white -rotate-2 hover:rotate-0 transition-transform mb-6">
                <span>Transparent Fleet Tariffs</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-3xl">
                Transparent pricing &amp;<br className="hidden sm:inline" /> chauffeur fleet tariffs
              </h1>

              {/* Subtle supporting narrative */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
                No hidden surcharges, no unexpected fuel levies, and no broker commissions. Direct garage-to-garage billing backed by our private fleet in Rishikesh, Dehradun, and New Delhi.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: 3-TIER EXPEDITION PACKAGE PRICING
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
              Tiered Curation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Expedition Stay &amp; Service Tiers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Every tier includes private mountain chauffeur, all tolls, parking, and dedicated 24/7 concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1: Comfort */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Comfort Tier
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Himalayan Comfort
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Clean, vetted 3-star mountain view cottages and boutique valley homestays.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">₹3,499</span>
                  <span className="text-xs text-slate-500 font-medium"> / person / day</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Clean 3-Star Hill Cottages &amp; Resorts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Private AC Sedan / Ertiga Fleet</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Buffet Breakfast &amp; Dinner Included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>All Tolls, State Taxes &amp; Driver Allowance</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-slate-400">
                    <XCircle size={17} weight="fill" className="text-slate-300 shrink-0" />
                    <span>Heritage Palace Access</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => handleOpenPlanner('Himalayan Comfort Tier (₹3,499/day)')}
                  className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Choose Comfort Tier
                </button>
              </div>
            </div>

            {/* Tier 2: Boutique (Featured) */}
            <div className="rounded-3xl border-2 border-[#FF5B37] bg-white p-7 sm:p-8 shadow-xl flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF5B37] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                Most Popular
              </span>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-2">
                  Boutique Heritage
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Boutique Heritage Tier
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Handpicked 4-star colonial bungalows, heated Swiss alpine chalets, and river view retreats.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">₹5,999</span>
                  <span className="text-xs text-slate-500 font-medium"> / person / day</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>4-Star Heritage Estates &amp; Heated Chalets</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Dedicated Toyota Innova Crysta / Hycross</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Gourmet Organic Himalayan Dining</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>VIP Biometric Pass &amp; Temple Slips</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>Complimentary River Rafting / Safari Pass</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => handleOpenPlanner('Boutique Heritage Tier (₹5,999/day)')}
                  className="w-full py-3.5 rounded-2xl bg-[#FF5B37] hover:bg-[#e04825] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Choose Boutique Tier
                </button>
              </div>
            </div>

            {/* Tier 3: Ultra Luxury */}
            <div className="rounded-3xl border border-slate-200/90 bg-slate-900 text-white p-7 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Grand Signature
                </span>
                <h3 className="text-2xl font-black text-white mb-1">
                  Ultra Luxury Palace
                </h3>
                <p className="text-xs text-white/70 mb-6">
                  5-star palace hotels, luxury river glamping, private helicopter charters, and butler escort.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-3xl sm:text-4xl font-black text-white">₹11,490</span>
                  <span className="text-xs text-white/70 font-medium"> / person / day</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-white/85">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-amber-400 shrink-0" />
                    <span>5-Star Palace / Taj / Oberoi / Ananda Partners</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-amber-400 shrink-0" />
                    <span>Toyota Fortuner 4x4 or Force Urbania VIP</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-amber-400 shrink-0" />
                    <span>Kedarnath VIP Helicopter Priority Darshan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-amber-400 shrink-0" />
                    <span>Personal Butler &amp; Lead Naturalist</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle size={17} weight="fill" className="text-amber-400 shrink-0" />
                    <span>All-Inclusive Private Fine Dining</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => handleOpenPlanner('Ultra Luxury Palace Tier (₹11,490/day)')}
                  className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shadow-md"
                >
                  Choose Ultra Luxury
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: CHAUFFEUR FLEET TARIFF TABLE
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
                Vehicle Rentals
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Chauffeur Fleet Tariff (Per-KM &amp; Daily)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Standard 250 km / day minimum average. Odometer measured garage-to-garage with live GPS telemetry.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-4 px-6">Vehicle Model</th>
                    <th className="py-4 px-4">Seating</th>
                    <th className="py-4 px-4">Rate / KM</th>
                    <th className="py-4 px-4">Daily Min.</th>
                    <th className="py-4 px-4">Driver DA</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FLEET_VEHICLES.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-6">
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {vehicle.name}
                        </div>
                        <span className="text-[11px] font-semibold text-[#FF5B37]">
                          {vehicle.categoryTag}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-700 whitespace-nowrap">
                        {vehicle.seatingLabel}
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-base font-black text-slate-900">
                          ₹{vehicle.perKmRate}
                        </span>
                        <span className="text-slate-400 text-xs"> / km</span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-600">
                        {vehicle.minKmPerDay} km / day
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-600">
                        ₹{vehicle.driverAllowancePerDay} / day
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => handleOpenPlanner(`Chauffeur Rental: ${vehicle.name}`)}
                          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#FF5B37] text-white text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
                        >
                          Book Vehicle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE FARE ESTIMATOR CALCULATOR
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="rounded-3xl sm:rounded-[36px] bg-slate-50 border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
                Instant Fare Estimation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Himalayan Journey Fare Estimator
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Estimate your total outstation rental including fuel, driver allowance, and anticipated tolls.
              </p>
            </div>

            {/* Popular Route Quick Chips */}
            <div className="mb-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                Popular Quick Route Presets:
              </span>
              <div className="flex flex-wrap gap-2">
                {POPULAR_ROUTE_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyPreset(p)}
                    className="h-9 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200/60 text-xs font-bold tracking-tight transition-all cursor-pointer shadow-2xs"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-2xs">
                {/* Select Vehicle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Select Vehicle Class
                  </label>
                  <select
                    value={calcVehicleId}
                    onChange={(e) => setCalcVehicleId(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm font-bold text-slate-900 focus:bg-white focus:border-[#FF5B37] focus:outline-none cursor-pointer"
                  >
                    {FLEET_VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} (₹{v.perKmRate}/km • {v.seatingLabel})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Days */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Duration: {calcDays} Calendar Days
                    </label>
                    <span className="text-xs font-semibold text-slate-400">
                      Min: {calcDays * (selectedVehicle?.minKmPerDay || 250)} km
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={calcDays}
                    onChange={(e) => setCalcDays(parseInt(e.target.value))}
                    className="w-full accent-[#FF5B37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                    <span>1 Day</span>
                    <span>5 Days</span>
                    <span>10 Days</span>
                    <span>15 Days</span>
                  </div>
                </div>

                {/* Estimated Total Kilometers */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Total Kilometers: {calcKm} km
                    </label>
                    <span className="text-xs font-semibold text-slate-400">
                      Rate: ₹{selectedVehicle?.perKmRate} / km
                    </span>
                  </div>
                  <input
                    type="range"
                    min="250"
                    max="3000"
                    step="50"
                    value={calcKm}
                    onChange={(e) => setCalcKm(parseInt(e.target.value))}
                    className="w-full accent-[#FF5B37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                    <span>250 km</span>
                    <span>1,000 km</span>
                    <span>2,000 km</span>
                    <span>3,000 km</span>
                  </div>
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Estimated Tariff Breakdown
                </span>

                <div className="space-y-3 text-xs sm:text-sm border-b border-white/10 pb-5">
                  <div className="flex justify-between text-white/80">
                    <span>Billable Distance ({calculation.minBillableKm} km):</span>
                    <span className="font-bold text-white">₹{calculation.kmCharges.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Chauffeur Allowance ({calcDays} Days):</span>
                    <span className="font-bold text-white">₹{calculation.driverAllowance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>FASTag Toll &amp; State Taxes (Est.):</span>
                    <span className="font-bold text-white">₹{calculation.stateTaxTollEst.toLocaleString()}</span>
                  </div>
                </div>

                {/* Total */}
                <div>
                  <span className="text-xs text-white/60 block">Estimated All-Inclusive Total</span>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                    ₹{calculation.totalEst.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-white/60 mt-1">
                    Actual billing matches verified odometer start and finish. GST invoice issued upon booking.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleOpenPlanner(
                      `Estimated Fare: ${selectedVehicle?.name} for ${calcDays} Days (${calcKm} km) - ₹${calculation.totalEst.toLocaleString()}`
                    )
                  }
                  className="w-full py-4 rounded-full bg-[#FF5B37] hover:bg-[#e04825] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Lock In This Quote</span>
                  <ArrowRight size={15} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: TRANSPARENT BILLING PROMISE
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-2">
              <ShieldCheck size={24} weight="fill" className="text-emerald-600" />
              <span>The Alpinex Transparent Billing Guarantee</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
              <div className="space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Zero Hidden Surcharges</h4>
                <p className="leading-relaxed">
                  State entrance permits, Green Cess (Uttarakhand), hill driver night allowances, and FASTag tolls are itemized in black-and-white.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Live GPS &amp; Odometer Photo</h4>
                <p className="leading-relaxed">
                  Before departure and upon return, our driver shares a photograph of the physical odometer and timestamped GPS garage log.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Flexible 14-Day Rescheduling</h4>
                <p className="leading-relaxed">
                  Weather in the Himalayas can be unpredictable. You can reschedule your dates without cancellation penalties up to 14 days prior to travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: SIGNATURE FLEET & CORPORATE CTA BANNER
           ========================================================================= */}
        <CtaBanner
          onOpenPlanner={handleOpenPlanner}
          pillBadge="Direct Fleet Rate"
          title="Looking for group tariffs or corporate retreats?"
          subtitle="We manage dedicated convoys of luxury Tempo Travellers and Innova Crystas with hill-certified drivers for wedding delegations and corporate offsites."
          badgeMain="0%"
          badgeSub="BROKER FEE"
          buttonText="Request Custom Tariff"
          context="Group & Corporate Fleet Quote"
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

