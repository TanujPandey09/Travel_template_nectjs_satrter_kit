'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  Mountains,
  CalendarBlank,
  Star,
  CheckCircle,
  ShieldCheck,
  PhoneCall,
  WhatsappLogo,
  ArrowRight,
  CaretRight,
  Sparkle,
  Certificate,
  Quotes,
  Translate,
  ChatCircleDots,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { CtaBanner } from '@/components/CtaBanner';
import { TeamMember } from '@/data/teamData';
import { AGENCY_CONFIG } from '@/data/travelData';

interface TeamMemberDetailClientProps {
  member: TeamMember;
  otherMembers: TeamMember[];
}

export const TeamMemberDetailClient: React.FC<TeamMemberDetailClientProps> = ({
  member,
  otherMembers,
}) => {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || `Consultation with ${member.name}`);
    setPlannerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* =========================================================================
            BREADCRUMB BAR
           ========================================================================= */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-8 max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto whitespace-nowrap py-1">
            <Link href="/" className="hover:text-[#FF5B37] transition-colors">
              Home
            </Link>
            <CaretRight size={12} weight="bold" className="text-slate-400 shrink-0" />
            <Link href="/team" className="hover:text-[#FF5B37] transition-colors">
              The Team
            </Link>
            <CaretRight size={12} weight="bold" className="text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate">{member.name}</span>
          </nav>
        </div>

        {/* =========================================================================
            SECTION 1: EXECUTIVE DOSSIER HERO CARD
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20 max-w-7xl mx-auto">
          <div className="rounded-3xl sm:rounded-[40px] border border-slate-200/90 bg-white shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-extrabold text-slate-900 shadow-md">
                      {member.badge}
                    </span>
                  </div>

                  {/* Bottom Origin Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold z-10">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} weight="fill" className="text-[#FF5B37]" />
                      <span>{member.origin}</span>
                    </span>
                    <span className="bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold border border-white/20">
                      {member.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Credentials Summary */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkle size={13} weight="fill" />
                    <span>Himalayan Steward Dossier</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                    {member.name}
                  </h1>

                  <p className="text-base sm:text-lg font-bold text-[#FF5B37] mt-1.5 mb-5">
                    {member.role}
                  </p>

                  {/* Pull Quote */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border-l-4 border-[#FF5B37] mb-6">
                    <div className="flex items-start gap-3">
                      <Quotes size={24} weight="fill" className="text-[#FF5B37] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Stats Counter Bar */}
                {member.stats && member.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                    {member.stats.map((s, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-xl sm:text-2xl font-black text-slate-900 block tracking-tight">
                          {s.val}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenPlanner(`Private Consultation with ${member.name} (${member.role})`)}
                    className="px-7 py-3.5 rounded-full bg-[#FF5B37] hover:bg-[#e04825] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>Consult with {member.name.split(' ')[0]}</span>
                    <ArrowRight size={15} weight="bold" />
                  </button>

                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Alpinex, I would like to consult with ${member.name} for our upcoming Himalayan expedition.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: FIELD DOSSIER & DEEP BIOGRAPHY
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Detailed Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block">
                  Field Background &amp; Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Field Track Record &amp; Stewardship
                </h2>
              </div>

              {member.detailedBio && member.detailedBio.length > 0 ? (
                member.detailedBio.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>
              )}

              {/* Core Mountain Capabilities Grid */}
              <div className="pt-6">
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-4">
                  Core Operational Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.specialties.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-center gap-3 hover:bg-white hover:border-[#FF5B37]/40 transition-all"
                    >
                      <div className="w-8 h-8 rounded-xl bg-orange-100/70 text-[#FF5B37] flex items-center justify-center shrink-0">
                        <CheckCircle size={18} weight="bold" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Accreditations, Languages & Favorite Circuit */}
            <div className="lg:col-span-4 space-y-6">
              {/* Credentials Box */}
              <div className="p-6 rounded-3xl border border-slate-200/90 bg-white shadow-2xs space-y-4">
                <h3 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Certificate size={20} weight="fill" className="text-[#FF5B37]" />
                  <span>Verified Accreditations</span>
                </h3>

                <ul className="space-y-3">
                  {member.credentials.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <ShieldCheck size={16} weight="fill" className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages Spoken */}
              {member.languages && member.languages.length > 0 && (
                <div className="p-6 rounded-3xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
                  <h3 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <Translate size={20} weight="fill" className="text-[#FF5B37]" />
                    <span>Languages Spoken</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorite Circuit Spotlight Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-slate-950 text-white overflow-hidden shadow-md">
                {member.favoriteCircuitImage && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={member.favoriteCircuitImage}
                      alt={member.favoriteCircuit}
                      className="w-full h-full object-cover filter brightness-[0.85]"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-900 text-[10px] font-extrabold uppercase">
                        Favorite Trail
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5 sm:p-6 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B37] block">
                    Personal Recommendation
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {member.favoriteCircuit}
                  </h4>
                  {member.favoriteCircuitDesc && (
                    <p className="text-xs text-white/75 leading-relaxed pt-1">
                      {member.favoriteCircuitDesc}
                    </p>
                  )}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => handleOpenPlanner(`Inquiry regarding ${member.name}'s favorite circuit: ${member.favoriteCircuit}`)}
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-[#FF5B37] text-slate-950 hover:text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Plan This Specific Route &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: OTHER STEWARDS OF DEVBHOOMI
           ========================================================================= */}
        {otherMembers.length > 0 && (
          <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-16 max-w-7xl mx-auto border-t border-slate-100 pt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block">
                  Colleagues &amp; Leads
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Other Stewards of Devbhoomi
                </h3>
              </div>
              <Link
                href="/team"
                className="text-xs sm:text-sm font-bold text-[#FF5B37] hover:underline flex items-center gap-1"
              >
                <span>View Full Team</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherMembers.map((other) => (
                <div
                  key={other.id}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-5 hover:border-[#FF5B37]/40 hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <img
                    src={other.avatar}
                    alt={other.name}
                    className="w-16 h-16 rounded-2xl object-cover shrink-0 filter brightness-[0.96]"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B37] block">
                      {other.badge}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#FF5B37] transition-colors">
                      <Link href={`/team/${other.id}`}>{other.name}</Link>
                    </h4>
                    <p className="text-xs text-slate-500 truncate">{other.role}</p>
                    <Link
                      href={`/team/${other.id}`}
                      className="text-xs font-bold text-slate-900 hover:text-[#FF5B37] inline-flex items-center gap-1 mt-1"
                    >
                      <span>Profile</span>
                      <ArrowRight size={11} weight="bold" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 4: SIGNATURE EXPEDITION CTA BANNER
           ========================================================================= */}
        <CtaBanner
          onOpenPlanner={handleOpenPlanner}
          pillBadge="Direct Field Access"
          title={`Plan your Himalayan route with ${member.name.split(' ')[0]}`}
          subtitle={`Benefit from ${member.experience} across Devbhoomi. We customize private 4x4 convoys, temple clearances, and boutique alpine stays.`}
          badgeMain="1-on-1"
          badgeSub="CONSULTATION"
          buttonText="Schedule Private Call"
          context={`Private Expedition Route Design with ${member.name}`}
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
};

