'use client';

import React, { useState, useEffect } from 'react';
import {
  SteeringWheel,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Users,
  SuitcaseRolling,
  GasPump,
  WhatsappLogo,
  Sparkle,
} from '@phosphor-icons/react';
import { FLEET_VEHICLES, AGENCY_CONFIG } from '../data/travelData';

interface FleetShowroomProps {
  externalSelectedVehicleId: string | null;
  onReserveVehicle: (vehicleLabel: string) => void;
}

export const FleetShowroom: React.FC<FleetShowroomProps> = ({
  externalSelectedVehicleId,
  onReserveVehicle,
}) => {
  const [selectedId, setSelectedId] = useState<string>(FLEET_VEHICLES[0].id);

  useEffect(() => {
    if (externalSelectedVehicleId) {
      setSelectedId(externalSelectedVehicleId);
    }
  }, [externalSelectedVehicleId]);

  const activeVehicle =
    FLEET_VEHICLES.find((v) => v.id === selectedId) || FLEET_VEHICLES[0];

  return (
    <section id="fleet" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white relative w-full border-b border-slate-100">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={14} weight="fill" />
            <span>Chauffeur & Tempo Traveller Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Premium Fleets For Family & Corporate Journeys
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every vehicle is 100% commercial permit registered, equipped with live GPS tracking, dual high-efficiency air conditioning, pushback recliner seats, and driven by verified police-checked chauffeurs.
          </p>
        </div>

        {/* Vehicle Selection Chips / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FLEET_VEHICLES.map((vehicle) => {
            const isSelected = vehicle.id === selectedId;
            return (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setSelectedId(vehicle.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#FF5B37] text-white shadow-md shadow-[#FF5B37]/30 scale-[1.02]'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <span>{vehicle.name}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {vehicle.seatingLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Vehicle Showcase Hero Box */}
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Big Vehicle Visual with Specs Overlay */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white aspect-[16/10] border border-slate-100 group">
              <img
                src={activeVehicle.image}
                alt={activeVehicle.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                <ShieldCheck size={16} weight="bold" className="text-emerald-600" />
                <span>Commercial AITP Permit Certified</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md text-white p-3.5 rounded-xl flex items-center justify-between text-xs">
                <span className="font-medium text-slate-200">Ideal For: {activeVehicle.idealFor}</span>
                <span className="font-bold text-amber-400">Min. {activeVehicle.minKmPerDay} km/day</span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {activeVehicle.specs.map((spec, i) => (
                <div key={i} className="bg-white p-3.5 rounded-2xl border border-slate-200/70 text-center shadow-2xs">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{spec.label}</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">{spec.value}</p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{spec.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pricing & Booking Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-2">
                {activeVehicle.categoryTag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeVehicle.name}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Experience supreme highway comfort with individual reclining seats, onboard USB charging, large luggage storage boot, and expert hill-driving certified chauffeur.
              </p>

              {/* Highlights Checklist */}
              <div className="mt-5 space-y-2.5">
                {activeVehicle.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle size={17} weight="fill" className="text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown Card */}
              <div className="mt-6 p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-slate-600">Per-Kilometer Outstation Rate:</span>
                  <span className="text-2xl font-black text-slate-900">
                    ₹{activeVehicle.perKmRate} <span className="text-xs font-medium text-slate-500">/ km</span>
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-orange-200/50 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Driver Allowance: ₹{activeVehicle.driverAllowancePerDay} / day</span>
                  <span>Base Day Rental: ₹{activeVehicle.baseDayRental.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onReserveVehicle(`Vehicle Reservation: ${activeVehicle.name} (Rate: ₹${activeVehicle.perKmRate}/km)`)}
                className="w-full sm:flex-1 py-3.5 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF5B37]/25 cursor-pointer"
              >
                <span>Book This Vehicle</span>
                <ArrowRight size={15} weight="bold" />
              </button>

              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(activeVehicle.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
