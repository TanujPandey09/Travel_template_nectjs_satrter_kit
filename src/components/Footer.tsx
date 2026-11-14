'use client';

import React from 'react';
import { Compass, PhoneCall, EnvelopeSimple, MapPin, WhatsappLogo } from '@phosphor-icons/react';
import { AGENCY_CONFIG } from '../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 sm:pt-16 pb-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-slate-200/80 bg-white w-full">
      <div className="w-full mx-auto space-y-12 sm:space-y-14">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5B37] to-[#FFA07A] text-white flex items-center justify-center shadow-md shadow-[#FF5B37]/30">
                <Compass size={22} weight="bold" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                ALPINEX
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              India's premier travel agency and luxury commercial fleet provider. Handcrafted tour packages, Maharaja Tempo Travellers, and verified chauffeurs with complete pricing transparency.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center border border-emerald-200 transition-colors cursor-pointer"
                aria-label="WhatsApp Contact"
              >
                <WhatsappLogo size={20} weight="fill" />
              </a>
              <a
                href={`tel:${AGENCY_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Phone Call"
              >
                <PhoneCall size={18} weight="bold" />
              </a>
              <span className="text-xs font-semibold text-slate-600">
                24x7 Helpline: {AGENCY_CONFIG.phoneDisplay}
              </span>
            </div>
          </div>

          {/* Col 2: Popular Tour Circuits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Tour Circuits
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Leh-Ladakh & Pangong</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Kashmir Valley Paradise</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Spiti Valley High Passes</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Rajasthan Royal Forts</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Kerala Backwaters & Munnar</a></li>
            </ul>
          </div>

          {/* Col 3: Fleet Rental */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Chauffeur Fleet
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Maharaja Tempo 12-Seater</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Luxury Tempo 17-Seater</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Executive Tempo 26-Seater</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Toyota Innova Crysta ZX</a></li>
              <li><a href="#destinations" className="hover:text-[#FF5B37] transition-colors">Force Urbania Cruiser</a></li>
            </ul>
          </div>

          {/* Col 4: Head Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Registered Office
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-start gap-1.5">
                <MapPin size={16} weight="fill" className="text-[#FF5B37] shrink-0 mt-0.5" />
                <span>Connaught Place, Barakhamba Road, New Delhi, 110001</span>
              </p>
              <p className="flex items-center gap-1.5 pt-1">
                <EnvelopeSimple size={16} weight="bold" className="text-[#FF5B37] shrink-0" />
                <span>concierge@alpinex.com</span>
              </p>
              <p className="pt-2 text-[11px] text-slate-400">
                Ministry of Tourism Lic: DL-TOUR-2024-884
              </p>
              <div className="pt-2">
                <a href="/contact" className="text-xs font-bold text-[#FF5B37] hover:underline inline-flex items-center gap-1">
                  <span>Visit Contact Headquarters</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Alpinex Expeditions &amp; Chauffeur Fleet Pvt Ltd. All rights reserved. Developed by{' '}
            <a
              href="https://tanujbuilds.site"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 hover:text-[#FF5B37] underline transition-colors"
            >
              tanujbuildsite
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">AITP Permits</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

