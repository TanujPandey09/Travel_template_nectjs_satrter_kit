'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  ArrowRight,
  List,
  X,
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

  // Only the exact actual pages that exist in the app
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const isHome = pathname === '/';
  const hasDarkBg = !isHome || scrolled;

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
          className="w-full max-w-7xl mx-auto h-[70px] px-4 sm:px-6 md:px-10 lg:px-14 flex items-center justify-between gap-6"
        >
          {/* Brand Mark */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white group shrink-0 cursor-pointer"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5B37] to-[#FFA07A] text-white flex items-center justify-center shadow-md shadow-[#FF5B37]/30 group-hover:scale-105 transition-transform duration-200">
              <Compass size={22} weight="bold" />
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-[0.2em] text-white leading-none">
                TRAVELI
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase leading-none mt-1">
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

          {/* Right Action: Clean Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenPlanner('Navbar Action')}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-[#FF5B37]/25 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Book Journey</span>
              <ArrowRight size={14} weight="bold" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 text-white flex items-center justify-center cursor-pointer transition-colors active:scale-95 border border-white/15"
            >
              {mobileMenuOpen ? (
                <X size={20} weight="bold" />
              ) : (
                <List size={20} weight="bold" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm pt-[70px] flex flex-col justify-start animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-[#0B1520] border-b border-white/15 px-5 py-6 shadow-2xl flex flex-col gap-5 animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Nav Links for actual pages */}
            <nav className="flex flex-col divide-y divide-white/10 max-w-xl mx-auto w-full">
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
                    className={`px-2 py-3.5 text-base font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-[#FF5B37]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      size={15}
                      weight="bold"
                      className={isActive ? 'text-[#FF5B37]' : 'text-white/40'}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Action Button */}
            <div className="pt-2 max-w-xl mx-auto w-full">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner('Mobile Nav Button');
                }}
                className="w-full py-3.5 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white font-bold text-sm shadow-md shadow-[#FF5B37]/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Journey</span>
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
