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
  MapPin,
  Sparkle,
  Mountains,
  Tag,
  Article,
  WhatsappLogo,
  CaretRight,
  ShieldCheck,
  UsersThree,
  Info,
} from '@phosphor-icons/react';
import { siteConfig } from '@/config/site';
import { BrandLogo } from './BrandLogo';

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

  // Lock body scroll when mobile sheet is open
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

  // Desktop navigation links
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  // App Sheet Navigation Grid Items (Bespoke 2-column native app directory)
  const appMenuItems = [
    {
      title: 'Destinations',
      subtitle: '12+ Circuits',
      href: '/destinations',
      icon: Mountains,
      badge: 'Popular',
      color: 'from-amber-500/20 to-orange-500/20 text-[#FF5B37]',
    },
    {
      title: 'Fleet Tariffs',
      subtitle: 'Transparent Rates',
      href: '/pricing',
      icon: Tag,
      badge: 'Best Rates',
      color: 'from-emerald-500/20 to-teal-500/20 text-[#34E0A1]',
    },
    {
      title: 'About Agency',
      subtitle: '15+ Yrs Heritage',
      href: '/about',
      icon: Info,
      badge: null,
      color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400',
    },
    {
      title: 'Field Stewards',
      subtitle: 'Mountain Drivers',
      href: '/team',
      icon: UsersThree,
      badge: null,
      color: 'from-purple-500/20 to-indigo-500/20 text-indigo-400',
    },
    {
      title: 'Travel Journal',
      subtitle: 'Field Guides',
      href: '/blog',
      icon: Article,
      badge: 'Read',
      color: 'from-rose-500/20 to-pink-500/20 text-rose-400',
    },
    {
      title: 'Concierge Desk',
      subtitle: '24/7 Helpline',
      href: '/contact',
      icon: PhoneCall,
      badge: 'Live',
      color: 'from-orange-500/20 to-amber-500/20 text-amber-400',
    },
  ];

  const isHome = pathname === '/';
  const hasDarkBg = !isHome || scrolled || mobileMenuOpen;

  // Active check helper
  const isTabActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* ========================================================
          1. TOP APP BAR (Desktop + Mobile Header)
         ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full select-none transition-all duration-300 ${
          hasDarkBg
            ? 'bg-[#0B1520]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="w-full max-w-7xl mx-auto h-[64px] sm:h-[72px] px-4 sm:px-6 md:px-10 lg:px-14 flex items-center justify-between gap-3"
        >
          {/* Bespoke Luxury Brand Identity */}
          <BrandLogo onClick={() => setMobileMenuOpen(false)} />

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-medium tracking-wide whitespace-nowrap">
            {navLinks.map((item) => {
              const active = isTabActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`py-1.5 transition-colors duration-150 relative block font-medium ${
                      active
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF5B37] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop CTA */}
            <button
              type="button"
              onClick={() => onOpenPlanner('Navbar Action')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-[#FF5B37]/25 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Book Journey</span>
              <ArrowRight size={14} weight="bold" />
            </button>

            {/* Mobile Top Quick Actions: Direct WhatsApp & Call Buttons (App Style) */}
            <div className="flex lg:hidden items-center gap-1.5">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Concierge"
                className="w-9 h-9 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-[#34E0A1] flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-xs"
              >
                <WhatsappLogo size={18} weight="fill" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                aria-label="Call 24/7 Helpline"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-xs"
              >
                <PhoneCall size={17} weight="bold" />
              </a>

              {/* Mobile Top Direct Action: Book / Plan CTA (Replaces duplicate Menu toggle) */}
              <button
                type="button"
                onClick={() => onOpenPlanner('Mobile Top CTA')}
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-gradient-to-r from-[#FF5B37] to-[#FFA07A] text-white font-bold text-xs tracking-wide shadow-xs active:scale-95 transition-all cursor-pointer"
                aria-label="Open Journey Planner"
              >
                <span>Book</span>
                <ArrowRight size={13} weight="bold" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ========================================================
          2. NATIVE FLOATING BOTTOM APP DOCK (Mobile Tab Bar)
          Only visible on mobile/tablet viewports (lg:hidden)
          Docked above safe bottom area with haptic active states
         ======================================================== */}
      <nav
        aria-label="Mobile Application Dock"
        className="fixed bottom-3 inset-x-3 sm:inset-x-6 max-w-md mx-auto z-40 lg:hidden pointer-events-auto select-none"
      >
        <div className="relative rounded-[26px] bg-[#0B1520]/90 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.65)] p-1.5 flex items-center justify-between gap-1">
          {/* Tab 1: Explore (Home) */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${
              isTabActive('/') && !mobileMenuOpen
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Compass
              size={20}
              weight={isTabActive('/') && !mobileMenuOpen ? 'fill' : 'regular'}
              className={isTabActive('/') && !mobileMenuOpen ? 'text-[#FF5B37]' : 'text-current'}
            />
            <span className="text-[10px] font-semibold tracking-tight leading-none">
              Explore
            </span>
            {isTabActive('/') && !mobileMenuOpen && (
              <span className="w-1 h-1 bg-[#FF5B37] rounded-full" />
            )}
          </Link>

          {/* Tab 2: Circuits / Trips */}
          <Link
            href="/destinations"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${
              isTabActive('/destinations') && !mobileMenuOpen
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Mountains
              size={20}
              weight={isTabActive('/destinations') && !mobileMenuOpen ? 'fill' : 'regular'}
              className={isTabActive('/destinations') && !mobileMenuOpen ? 'text-[#FF5B37]' : 'text-current'}
            />
            <span className="text-[10px] font-semibold tracking-tight leading-none">
              Trips
            </span>
            {isTabActive('/destinations') && !mobileMenuOpen && (
              <span className="w-1 h-1 bg-[#FF5B37] rounded-full" />
            )}
          </Link>

          {/* Centerpiece: Glowing Plan Tour Pill Action */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPlanner('Floating App Dock');
            }}
            aria-label="Plan custom itinerary"
            className="flex-1 py-2 px-2.5 rounded-2xl bg-gradient-to-r from-[#FF5B37] to-[#FFA07A] hover:from-[#E64A26] hover:to-[#FF8C66] text-white flex flex-col items-center justify-center gap-0.5 shadow-lg shadow-[#FF5B37]/35 active:scale-95 transition-all cursor-pointer font-bold shrink-0 mx-0.5"
          >
            <Sparkle size={17} weight="fill" className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-tight uppercase leading-none">
              Plan
            </span>
          </button>

          {/* Tab 4: Tariffs */}
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${
              isTabActive('/pricing') && !mobileMenuOpen
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Tag
              size={20}
              weight={isTabActive('/pricing') && !mobileMenuOpen ? 'fill' : 'regular'}
              className={isTabActive('/pricing') && !mobileMenuOpen ? 'text-[#FF5B37]' : 'text-current'}
            />
            <span className="text-[10px] font-semibold tracking-tight leading-none">
              Tariff
            </span>
            {isTabActive('/pricing') && !mobileMenuOpen && (
              <span className="w-1 h-1 bg-[#FF5B37] rounded-full" />
            )}
          </Link>

          {/* Tab 5: App Drawer / Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle App Drawer"
            className={`flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all active:scale-90 cursor-pointer ${
              mobileMenuOpen ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            {mobileMenuOpen ? (
              <X size={20} weight="bold" className="text-[#FF5B37]" />
            ) : (
              <List size={20} weight="regular" className="text-current" />
            )}
            <span className="text-[10px] font-semibold tracking-tight leading-none">
              {mobileMenuOpen ? 'Close' : 'More'}
            </span>
            {mobileMenuOpen && <span className="w-1 h-1 bg-[#FF5B37] rounded-full" />}
          </button>
        </div>
      </nav>

      {/* ========================================================
          3. iOS-STYLE SLIDE-UP BOTTOM SHEET (App Drawer)
         ======================================================== */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Backdrop Click Dismiss */}
          <div
            className="flex-1 w-full"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Up Sheet Surface */}
          <div className="w-full max-w-lg mx-auto bg-[#0B1520] border-t border-white/15 rounded-t-[32px] p-5 pb-8 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            {/* Tactile iOS Drag Handle */}
            <div className="w-12 h-1.5 bg-white/25 rounded-full mx-auto mb-4 shrink-0" />

            {/* Header: Title & Quick Close */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  Expedition Hub
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#34E0A1] bg-[#34E0A1]/10 px-2 py-0.5 rounded-full border border-[#34E0A1]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34E0A1] animate-ping" />
                  Fleet 2026
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center text-white/80 active:scale-95 transition-all cursor-pointer"
                aria-label="Close drawer"
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            {/* Bespoke 2-Column App Grid */}
            <div className="grid grid-cols-2 gap-2.5 py-4">
              {appMenuItems.map((item) => {
                const IconComponent = item.icon;
                const active = isTabActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between h-[104px] group active:scale-[0.97] ${
                      active
                        ? 'bg-white/[0.08] border-[#FF5B37]/50 shadow-sm'
                        : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-xs`}
                      >
                        <IconComponent size={20} weight="bold" />
                      </div>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-white/80">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FF5B37] transition-colors leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-white/50 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Quick Action: Custom Plan Tour */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner('Mobile Sheet CTA');
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF5B37] to-[#FFA07A] hover:from-[#E64A26] hover:to-[#FF8C66] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#FF5B37]/30 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 mb-3"
            >
              <Sparkle size={16} weight="fill" />
              <span>Build Custom Tour Itinerary</span>
              <CaretRight size={14} weight="bold" />
            </button>

            {/* Direct Concierge Desk Strip */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                  Direct Concierge Desk
                </span>
                <span className="text-[10px] font-medium text-emerald-400">
                  Online 24/7
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors active:scale-95"
                >
                  <PhoneCall size={15} weight="bold" className="text-[#34E0A1]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-[#34E0A1] font-semibold transition-colors active:scale-95 border border-emerald-500/20"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/50 text-center pt-0.5">
                <ShieldCheck size={13} weight="bold" className="text-[#34E0A1]" />
                <span>4.9/5 Rating • 1,200+ Himalayan Travelers & Verified Fleet</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
