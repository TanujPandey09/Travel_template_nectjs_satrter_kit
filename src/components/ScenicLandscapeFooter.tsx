'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  PhoneCall,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
  XLogo,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  ArrowRight,
  ShieldCheck,
} from '@phosphor-icons/react';
import { siteConfig } from '@/config/site';
import { BrandLogo } from './BrandLogo';

export const ScenicLandscapeFooter: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden select-none min-h-[560px] sm:min-h-[620px] pt-14 sm:pt-20 pb-28 sm:pb-32 lg:pb-12 flex flex-col justify-between bg-slate-950">
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
              <BrandLogo size="lg" />

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                Every journey we organize is built on trust, safety, and unforgettable views.
              </p>

              {/* Direct Concierge Contact Strip with Proper Icons & Real Links */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-white/85">
                <p className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <PhoneCall size={15} weight="bold" className="text-[#FF5B37]" />
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="hover:text-[#FF5B37] transition-colors font-medium"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </p>

                <p className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                    <WhatsappLogo size={15} weight="fill" className="text-[#34E0A1]" />
                  </span>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#34E0A1] transition-colors font-medium text-emerald-300"
                  >
                    WhatsApp Concierge (24/7 Support)
                  </a>
                </p>

                <p className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <EnvelopeSimple size={15} weight="bold" className="text-[#FF5B37]" />
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-[#FF5B37] transition-colors font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>

                <p className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} weight="fill" className="text-[#FF5B37]" />
                  </span>
                  <a
                    href="https://maps.google.com/?q=Tapovan+Rishikesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF5B37] transition-colors text-white/75 leading-snug"
                  >
                    {siteConfig.contact.addressPrimary}
                  </a>
                </p>
              </div>
            </div>

            {/* Essential Links */}
            <div className="lg:col-span-3 sm:pl-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                Essential Links
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li>
                  <Link href="/" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>All Destinations</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>Pricing &amp; Fleet Tariff</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>About Traveli</span>
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>Leadership &amp; Stewards</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>Travel Journal &amp; Guides</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF5B37] transition-colors inline-flex items-center gap-1 group">
                    <span>Get in Touch</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Destinations */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                Uttarakhand &amp; India
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li>
                  <Link href="/destinations/rishikesh" className="hover:text-[#FF5B37] transition-colors">
                    Rishikesh &amp; Ganga Valley
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/kedarnath" className="hover:text-[#FF5B37] transition-colors">
                    Kedarnath Sacred Dham
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/auli" className="hover:text-[#FF5B37] transition-colors">
                    Auli Snow Ski Meadows
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/jim-corbett" className="hover:text-[#FF5B37] transition-colors">
                    Jim Corbett Tiger Reserve
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/nainital" className="hover:text-[#FF5B37] transition-colors">
                    Nainital &amp; Kumaon Lakes
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/mussoorie" className="hover:text-[#FF5B37] transition-colors">
                    Mussoorie &amp; Dhanaulti Ridge
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Proper Social Icons Strip */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved. Developed by{' '}
              <a
                href={siteConfig.author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF5B37] font-semibold underline underline-offset-2 transition-colors"
              >
                {siteConfig.author.name}
              </a>
            </p>

            {/* Social Channels with Real Vector Icons and Proper Links */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mr-1 hidden sm:inline-block">
                Follow:
              </span>

              {/* Twitter / X */}
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Traveli on X (Twitter)"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B37] border border-white/15 hover:border-[#FF5B37] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs"
              >
                <XLogo size={15} weight="bold" />
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Traveli on Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B37] border border-white/15 hover:border-[#FF5B37] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs"
              >
                <InstagramLogo size={15} weight="bold" />
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Traveli on Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B37] border border-white/15 hover:border-[#FF5B37] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs"
              >
                <FacebookLogo size={15} weight="bold" />
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Traveli on YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B37] border border-white/15 hover:border-[#FF5B37] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs"
              >
                <YoutubeLogo size={15} weight="bold" />
              </a>

              {/* WhatsApp Direct */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Concierge on WhatsApp"
                className="w-8 h-8 rounded-full bg-emerald-500/20 hover:bg-emerald-500 border border-emerald-500/30 text-[#34E0A1] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs"
              >
                <WhatsappLogo size={15} weight="fill" />
              </a>
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
