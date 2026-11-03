'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Compass,
  ArrowRight,
  WhatsappLogo,
  ShieldCheck,
  MapPin,
  Sparkle,
} from '@phosphor-icons/react';
import {
  POPULAR_CIRCUITS,
  FLEET_VEHICLES,
  AGENCY_CONFIG,
} from '../data/travelData';

interface FareCalculatorProps {
  onLockEstimate: (summary: string) => void;
}

export const FareCalculator: React.FC<FareCalculatorProps> = ({
  onLockEstimate,
}) => {
  const [selectedCircuitId, setSelectedCircuitId] = useState<string>(
    POPULAR_CIRCUITS[0].id
  );
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(
    FLEET_VEHICLES[1].id
  );
  const [customKm, setCustomKm] = useState<number>(POPULAR_CIRCUITS[0].totalKm);
  const [tripDays, setTripDays] = useState<number>(
    POPULAR_CIRCUITS[0].recommendedDays
  );
  const [passengerCount, setPassengerCount] = useState<number>(12);

  const activeCircuit =
    POPULAR_CIRCUITS.find((c) => c.id === selectedCircuitId) ||
    POPULAR_CIRCUITS[0];
  const activeVehicle =
    FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) ||
    FLEET_VEHICLES[1];

  const handleCircuitSelect = (circuitId: string) => {
    setSelectedCircuitId(circuitId);
    const found = POPULAR_CIRCUITS.find((c) => c.id === circuitId);
    if (found) {
      setCustomKm(found.totalKm);
      setTripDays(found.recommendedDays);
    }
  };

  const minBillableKm = tripDays * activeVehicle.minKmPerDay;
  const billableKm = Math.max(customKm, minBillableKm);
  const baseKmCost = billableKm * activeVehicle.perKmRate;
  const totalDriverAllowance = tripDays * activeVehicle.driverAllowancePerDay;
  const estimatedStateTaxAndTolls = activeCircuit.stateTaxEstimate;
  const grandTotal =
    baseKmCost + totalDriverAllowance + estimatedStateTaxAndTolls;
  const perPersonSplit = Math.round(grandTotal / Math.max(1, passengerCount));

  const summaryText = `Circuit: ${activeCircuit.name} | Vehicle: ${activeVehicle.name} | Distance: ${billableKm}km across ${tripDays} days | Total: ₹${grandTotal.toLocaleString('en-IN')} (approx. ₹${perPersonSplit}/person for ${passengerCount} travelers)`;

  return (
    <section id="estimator" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-slate-50/60 relative w-full border-b border-slate-100">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={14} weight="fill" />
            <span>Instant Route Fare Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Pricing. Zero Hidden Fees.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Select a verified tourist circuit or configure custom distance to calculate vehicle kilometer rates, driver allowances, and group cost per person.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_12px_40px_-8px_rgba(15,23,42,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Inputs) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Popular Circuits */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Step 1: Choose Travel Circuit / Route
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {POPULAR_CIRCUITS.map((circuit) => {
                  const isSelected = circuit.id === selectedCircuitId;
                  return (
                    <button
                      key={circuit.id}
                      type="button"
                      onClick={() => handleCircuitSelect(circuit.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#FF5B37] bg-orange-50/50 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{circuit.name}</span>
                        <span className="text-[11px] font-semibold text-slate-500">{circuit.recommendedDays} Days</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 truncate">{circuit.destinations}</p>
                      <div className="mt-2 text-[10px] font-bold text-[#FF5B37]">{circuit.totalKm} km Est.</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Vehicle */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Step 2: Choose Chauffeur Vehicle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {FLEET_VEHICLES.slice(0, 3).map((veh) => {
                  const isSelected = veh.id === selectedVehicleId;
                  return (
                    <button
                      key={veh.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(veh.id)}
                      className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#FF5B37] bg-orange-50/50 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-900 block truncate">{veh.name}</span>
                      <span className="text-[11px] font-semibold text-[#FF5B37] mt-0.5 block">₹{veh.perKmRate} / km</span>
                      <span className="text-[10px] text-slate-500 mt-0.5 block">{veh.seatingLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sliders (Days & Travelers) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Trip Duration:</span>
                  <span className="text-[#FF5B37] text-sm">{tripDays} Days</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={14}
                  value={tripDays}
                  onChange={(e) => setTripDays(Number(e.target.value))}
                  className="w-full accent-[#FF5B37] cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Min. {activeVehicle.minKmPerDay} km billed per day</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Number of Travelers:</span>
                  <span className="text-[#FF5B37] text-sm">{passengerCount} People</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={26}
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(Number(e.target.value))}
                  className="w-full accent-[#FF5B37] cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Calculates accurate per-person cost share</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Bill Summary */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Live Cost Breakdown
                </span>
                <span className="text-xs text-slate-300">
                  {billableKm} km • {tripDays} Days
                </span>
              </div>

              {/* Itemized Lines */}
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Base Distance ({billableKm} km × ₹{activeVehicle.perKmRate}):</span>
                  <span className="font-semibold text-white">₹{baseKmCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Chauffeur Night Allowance ({tripDays} d × ₹{activeVehicle.driverAllowancePerDay}):</span>
                  <span className="font-semibold text-white">₹{totalDriverAllowance.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>State Border Tax & Toll Estimate:</span>
                  <span className="font-semibold text-white">₹{estimatedStateTaxAndTolls.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-slate-300">Estimated Total Fare:</span>
                  <span className="text-3xl font-black text-white">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Per-Person Split Tag */}
                <div className="mt-3 p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Per Person Share ({passengerCount} Pax):</span>
                  <span className="text-lg font-extrabold text-[#FFA07A]">
                    ₹{perPersonSplit.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-300">/ person</span>
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-4 space-y-2.5">
              <button
                type="button"
                onClick={() => onLockEstimate(summaryText)}
                className="w-full py-3.5 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF5B37]/30 cursor-pointer"
              >
                <span>Lock This Fare & Reserve</span>
                <ArrowRight size={15} weight="bold" />
              </button>

              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi, I used your fare calculator: ' + summaryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Send Estimate to WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
