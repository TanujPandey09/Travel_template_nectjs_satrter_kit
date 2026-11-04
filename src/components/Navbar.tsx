'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  ArrowRight,
  List,
  X,
  PhoneCall,
  EnvelopeSimple,
  MapPin,
  Sparkle,
} from '@phosphor-icons/react';

interface NavbarProps {
  onOpenPlanner: (defaultContext?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // All 7 real app pages with contextual mobile subtitles
  const navLinks = [
    { label: 'Home', href: '/', subtitle: 'Curated circuits & expedition overview' },
    { label: 'Destinations', href: '/destinations', subtitle: 'Uttarakhand, Auli, Kedarnath & India', badge: '12+ Circuits' },
    { label: 'Pricing', href: '/pricing', subtitle: 'Fleet tariffs, chauffeur rates & transparent quotes' },
    { label: 'About', href: '/about', subtitle: 'Our heritage, values & mountain safety' },
    { label: 'Team', href: '/team', subtitle: 'Expedition stewards, naturalists & drivers' },
    { label: 'Blog', href: '/blog', subtitle: 'Travel journal, field notes & guides' },
    { label: 'Contact', href: '/contact', subtitle: 'Tapovan Rishikesh & Connaught Place HQ' },
  ];

  const isHome = pathname === '/';
  const hasDarkBg = !isHome || scrolled || mobileMenuOpen;

  return (
    <>
      {/* Clean Edge-to-Edge Navigation: Transparent at Top, Smooth Dark Background on Scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-300 ${
          hasDarkBg
            ? 'bg-[#0B1520]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="w-full max-w-7xl mx-auto h-[68px] sm:h-[74px] px-4 sm:px-6 md:px-10 lg:px-14 flex items-center justify-between gap-4"
        >
          {/* Brand Mark */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 text-white group shrink-0 cursor-pointer"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#FF5B37] to-[#FFA07A] text-white flex items-center justify-center shadow-md shadow-[#FF5B37]/30 group-hover:scale-105 transition-transform duration-200">
              <Compass size={22} weight="bold" />
            </span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-[0.2em] text-white leading-none">
                TRAVELI
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase leading-none mt-1">
                Curated Expeditions
              </span>
            </div>
          </Link>

          {/* Desktop Nav: Only real pages in the app */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-medium tracking-wide whitespace-nowrap">
            {navLinks.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`py-1.5 transition-colors duration-150 relative block font-medium ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF5B37] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Clean Primary CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Desktop CTA (hidden on very small phones to prevent overflow) */}
            <button
              type="button"
              onClick={() => onOpenPlanner('Navbar Action')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-[#FF5B37]/25 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Book Journey</span>
              <ArrowRight size={14} weight="bold" />
            </button>

            {/* Mobile Menu Button - PROMINENT, CLEARLY LABELED */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center gap-2 h-10 px-3.5 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xs tracking-wider uppercase border border-white/20 transition-all cursor-pointer shadow-sm"
            >
              {mobileMenuOpen ? (
                <>
                  <X size={18} weight="bold" className="text-[#FF5B37]" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <List size={20} weight="bold" className="text-[#FF5B37]" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Full-Screen Sheet */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden bg-[#0B1520] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar inside Drawer */}
          <div className="h-[68px] px-4 sm:px-6 flex items-center justify-between border-b border-white/10 bg-[#0B1520]/95 sticky top-0 z-10 backdrop-blur-md shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 text-white"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF5B37] to-[#FFA07A] text-white flex items-center justify-center shadow-md shadow-[#FF5B37]/30">
                <Compass size={20} weight="bold" />
              </span>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-[0.2em] text-white leading-none">
                  TRAVELI
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-white/60 uppercase leading-none mt-1">
                  Curated Expeditions
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all cursor-pointer active:scale-95"
            >
              <X size={18} weight="bold" className="text-[#FF5B37]" />
              <span>Close</span>
            </button>
          </div>

          {/* Links & Content */}
          <div className="flex-1 px-5 py-6 flex flex-col gap-5 max-w-lg mx-auto w-full">
            {/* Directory Header Badge */}
            <div className="flex items-center justify-between pb-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Navigation Directory
              </span>
              <span className="text-[11px] font-semibold text-[#FF5B37] bg-[#FF5B37]/15 px-2.5 py-0.5 rounded-full border border-[#FF5B37]/25">
                Fleet 2026
              </span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col divide-y divide-white/10 bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
              {navLinks.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 flex items-center justify-between text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-[#FF5B37] bg-white/[0.04]'
                        : 'text-white/90 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <span className="text-base font-bold leading-tight">{item.label}</span>
                      {item.subtitle && (
                        <span className="text-[11px] text-white/50 font-normal truncate mt-0.5">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#FF5B37] text-white shadow-xs">
                          {item.badge}
                        </span>
                      )}
                      <ArrowRight
                        size={15}
                        weight="bold"
                        className={isActive ? 'text-[#FF5B37]' : 'text-white/35'}
                      />
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner('Mobile Menu Primary CTA');
                }}
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#FF5B37] to-[#FFA07A] hover:from-[#E64A26] hover:to-[#FF8C66] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF5B37]/30 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <Compass size={18} weight="bold" />
                <span>Book Your Expedition</span>
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>

            {/* Direct Concierge Contact Strip */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 space-y-3 mt-auto">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">
                Direct Concierge Desk
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:+919811472940"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors active:scale-95"
                >
                  <PhoneCall size={16} weight="bold" className="text-[#34E0A1]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919811472940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors active:scale-95"
                >
                  <span className="text-[#34E0A1] font-bold text-sm">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/60 text-center pt-1">
                <MapPin size={12} weight="fill" className="text-[#FF5B37] shrink-0" />
                <span className="truncate">Tapovan, Rishikesh &amp; New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
