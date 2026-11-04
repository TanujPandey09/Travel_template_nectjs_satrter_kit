'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  PhoneCall,
  EnvelopeSimple,
  MapPin,
} from '@phosphor-icons/react';

export const ScenicLandscapeFooter: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden select-none min-h-[560px] sm:min-h-[620px] pt-14 sm:pt-20 pb-10 flex flex-col justify-between bg-slate-950">
      {/* High-Resolution Green Mountain Aerial Photographic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=2560"
          alt="Lush green mountain terraces"
          className="w-full h-full object-cover filter brightness-[0.62] contrast-[1.15]"
        />
        {/* Ambient top & bottom gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-white/80" />
      </div>

      {/* Floating Glassmorphic Footer Card matching Framer screenshot 1:1 */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto z-10 mb-8">
        <div className="rounded-3xl sm:rounded-[36px] bg-slate-950/85 sm:bg-slate-950/65 backdrop-blur-md sm:backdrop-blur-xl border border-white/20 p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
            {/* Brand & Contact Info */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5B37] to-[#FFA07A] text-white flex items-center justify-center shadow-lg shadow-[#FF5B37]/30 group-hover:scale-105 transition-transform">
                  <Compass size={22} weight="bold" />
                </span>
                <span className="text-2xl font-black tracking-tight text-white">
                  Traveli
                </span>
              </Link>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                Every journey we organize is built on trust, safety, and unforgettable views.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-white/85">
                <p className="flex items-center gap-2">
                  <PhoneCall size={16} weight="bold" className="text-[#FF5B37]" />
                  <span>+91 98114 72940</span>
                </p>
                <p className="flex items-center gap-2">
                  <EnvelopeSimple size={16} weight="bold" className="text-[#FF5B37]" />
                  <span>concierge@traveli.in</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} weight="fill" className="text-[#FF5B37]" />
                  <span>Tapovan, Rishikesh, Uttarakhand &amp; CP, New Delhi</span>
                </p>
              </div>
            </div>

            {/* Essential Links */}
            <div className="lg:col-span-3 sm:pl-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                Essential Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li><Link href="/" className="hover:text-[#FF5B37] transition-colors">Home</Link></li>
                <li><Link href="/destinations" className="hover:text-[#FF5B37] transition-colors">All Destinations</Link></li>
                <li><Link href="/pricing" className="hover:text-[#FF5B37] transition-colors">Pricing &amp; Fleet Tariff</Link></li>
                <li><Link href="/about" className="hover:text-[#FF5B37] transition-colors">About Traveli</Link></li>
                <li><Link href="/team" className="hover:text-[#FF5B37] transition-colors">Leadership &amp; Stewards</Link></li>
                <li><Link href="/blog" className="hover:text-[#FF5B37] transition-colors">Travel Journal &amp; Guides</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF5B37] transition-colors">Get in Touch</Link></li>
              </ul>
            </div>

            {/* Destinations */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                Uttarakhand &amp; India
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li><Link href="/destinations/rishikesh" className="hover:text-[#FF5B37] transition-colors">Rishikesh &amp; Ganga Valley</Link></li>
                <li><Link href="/destinations/kedarnath" className="hover:text-[#FF5B37] transition-colors">Kedarnath Sacred Dham</Link></li>
                <li><Link href="/destinations/auli" className="hover:text-[#FF5B37] transition-colors">Auli Snow Ski Meadows</Link></li>
                <li><Link href="/destinations/jim-corbett" className="hover:text-[#FF5B37] transition-colors">Jim Corbett Tiger Reserve</Link></li>
                <li><Link href="/destinations/nainital" className="hover:text-[#FF5B37] transition-colors">Nainital &amp; Kumaon Lakes</Link></li>
                <li><Link href="/destinations/mussoorie" className="hover:text-[#FF5B37] transition-colors">Mussoorie &amp; Dhanaulti Ridge</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Social Icons */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} Traveli. All rights reserved. Developed by{' '}
              <a
                href="https://tanujbuildsite.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF5B37] font-semibold underline underline-offset-2 transition-colors"
              >
                Tanujtanujbuildsite
              </a>
            </p>
            <div className="flex items-center gap-4 text-white">
              <span className="hover:text-[#FF5B37] transition-colors cursor-pointer font-bold">𝕏</span>
              <span className="hover:text-[#FF5B37] transition-colors cursor-pointer font-bold">f</span>
              <span className="hover:text-[#FF5B37] transition-colors cursor-pointer font-bold">▶</span>
              <span className="hover:text-[#FF5B37] transition-colors cursor-pointer font-bold">📸</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Stylized "Traveli" Watermark Text across the bottom of the mountains */}
      <div className="relative w-full text-center overflow-hidden pointer-events-none mt-auto">
        <span
          className="text-[14vw] font-black tracking-tight text-white/20 block select-none uppercase leading-none"
          style={{
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))',
          }}
        >
          Traveli
        </span>
      </div>
    </footer>
  );
};

