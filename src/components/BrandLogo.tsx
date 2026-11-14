'use client';

import React from 'react';
import Link from 'next/link';

export interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  className?: string;
  href?: string;
  onClick?: () => void;
}

/**
 * ALPINEX Luxury Expedition Brand Logo
 * 
 * Features a bespoke faceted North-Star & Alpine Compass emblem,
 * precision squircle housing, and optometrically tracked editorial logotype.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'dark',
  className = '',
  href = '/',
  onClick,
}) => {
  // Dimensions map
  const sizeMap = {
    sm: { icon: 32, box: 'w-8 h-8 rounded-lg', title: 'text-sm tracking-[0.18em]', sub: 'text-[8px] tracking-[0.18em]' },
    md: { icon: 38, box: 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl', title: 'text-base sm:text-lg tracking-[0.2em]', sub: 'text-[9px] sm:text-[10px] tracking-[0.2em]' },
    lg: { icon: 48, box: 'w-12 h-12 rounded-2xl', title: 'text-xl sm:text-2xl tracking-[0.22em]', sub: 'text-[10px] sm:text-xs tracking-[0.22em]' },
    xl: { icon: 64, box: 'w-16 h-16 rounded-2xl', title: 'text-3xl sm:text-4xl tracking-[0.25em]', sub: 'text-xs sm:text-sm tracking-[0.25em]' },
  };

  const currentSize = sizeMap[size];
  const isLight = theme === 'light';

  const LogoMark = (
    <div
      className={`${currentSize.box} bg-gradient-to-tr from-[#FF5B37] via-[#FF6E4D] to-[#FFA07A] flex items-center justify-center shadow-lg shadow-[#FF5B37]/30 shrink-0 group-hover:scale-105 group-hover:shadow-[#FF5B37]/45 transition-all duration-300 relative overflow-hidden`}
    >
      {/* Precision Vector Emblem: Faceted North Star & Alpine Compass */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[72%] h-[72%]"
      >
        {/* Subtle Outer Compass Ring */}
        <circle cx="16" cy="16" r="11" stroke="white" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 1.5" />
        
        {/* 4 Cardinal Guide Ticks */}
        <line x1="16" y1="3" x2="16" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="27" x2="16" y2="29" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="3" y1="16" x2="5" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="27" y1="16" x2="29" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

        {/* 4 Diagonal Micro Diamonds */}
        <polygon points="16,11 18,16 16,16 16,11" fill="white" fillOpacity="0.4" />
        <polygon points="21,16 16,18 16,16 21,16" fill="white" fillOpacity="0.3" />
        <polygon points="16,21 14,16 16,16 16,21" fill="white" fillOpacity="0.4" />
        <polygon points="11,16 16,14 16,16 11,16" fill="white" fillOpacity="0.3" />

        {/* Faceted Primary 4-Point Compass Rose */}
        {/* North-West facet (illuminated key light) */}
        <polygon points="16,5 16,16 6,16" fill="#FFFFFF" />
        {/* North-East facet (subtle shadow) */}
        <polygon points="16,5 16,16 26,16" fill="#FFE5DF" />
        {/* South-West facet (ambient fill) */}
        <polygon points="16,27 16,16 6,16" fill="#FFC7BA" />
        {/* South-East facet (deep shade) */}
        <polygon points="16,27 16,16 26,16" fill="#FF9E8A" />

        {/* Center Pivot Pin */}
        <circle cx="16" cy="16" r="2" fill="#0B1520" />
        <circle cx="16" cy="16" r="1.1" fill="#FFFFFF" />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    if (!href) return LogoMark;
    return (
      <Link href={href} onClick={onClick} className={`inline-flex group ${className}`} aria-label="Alpinex Home">
        {LogoMark}
      </Link>
    );
  }

  const Content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {LogoMark}
      <div className="flex flex-col">
        <span
          className={`font-black uppercase leading-none transition-colors duration-200 ${
            currentSize.title
          } ${
            isLight
              ? 'text-slate-900 group-hover:text-[#FF5B37]'
              : 'text-white group-hover:text-white/95'
          }`}
        >
          ALPINEX
        </span>
        {variant === 'full' && (
          <span
            className={`font-semibold uppercase leading-none mt-1 transition-colors duration-200 ${
              currentSize.sub
            } ${
              isLight ? 'text-slate-500' : 'text-white/60'
            }`}
          >
            Curated Expeditions
          </span>
        )}
      </div>
    </div>
  );

  if (!href) return Content;

  return (
    <Link href={href} onClick={onClick} className="inline-flex cursor-pointer">
      {Content}
    </Link>
  );
};

