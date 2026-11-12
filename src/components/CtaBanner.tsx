'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface CtaBannerProps {
  onOpenPlanner?: (context?: string) => void;
  title?: string;
  subtitle?: string;
  pillBadge?: string;
  buttonText?: string;
  buttonHref?: string;
  badgeMain?: string;
  badgeSub?: string;
  bgImage?: string;
  collageImages?: {
    top?: { src: string; alt: string };
    right?: { src: string; alt: string };
    bottom?: { src: string; alt: string };
  };
  context?: string;
  className?: string;
}

// Fallback high-res photos
const DEFAULT_BG =
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1920';

const DEFAULT_COLLAGE = {
  top: {
    src: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Rishikesh Ganga river rapids and sacred Himalayan ghats',
  },
  right: {
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Auli snow peaks and Garhwal Himalaya slopes',
  },
  bottom: {
    src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Jim Corbett tiger reserve emerald wilderness',
  },
};

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenPlanner,
  title = 'Start your Himalayan journey with us today',
  subtitle = 'Explore Devbhoomi and India\'s sacred circuits like never before. From bespoke high-altitude luxury camps to mountain-certified chauffeur fleet.',
  pillBadge = 'Travel Now',
  buttonText = 'Plan my expedition',
  buttonHref,
  badgeMain = '100%',
  badgeSub = 'TRANSPARENT',
  bgImage = DEFAULT_BG,
  collageImages,
  context,
  className = '',
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  const collage = {
    top: collageImages?.top || DEFAULT_COLLAGE.top,
    right: collageImages?.right || DEFAULT_COLLAGE.right,
    bottom: collageImages?.bottom || DEFAULT_COLLAGE.bottom,
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const cards = [
      { sel: '.cta-card-top', rotate: 14, fromX: 160, fromY: -140, fromRotate: 40 },
      { sel: '.cta-card-right', rotate: -14, fromX: 260, fromY: -60, fromRotate: -45 },
      { sel: '.cta-card-bottom', rotate: -10, fromX: 140, fromY: 200, fromRotate: -35 },
    ];

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        if (reduceMotion) {
          cards.forEach((c) => gsap.set(c.sel, { rotate: c.rotate }));
          return;
        }

        if (isDesktop) {
          // Background parallax (Desktop only)
          if (bgImgRef.current && bannerRef.current) {
            gsap.fromTo(
              bgImgRef.current,
              { yPercent: -8, scale: 1.1 },
              {
                yPercent: 8,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: bannerRef.current,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }

          // Scrubbed timeline: scroll DOWN -> photos fly in
          const tl = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 90%',
              end: 'top 25%',
              scrub: 0.8,
            },
          });

          cards.forEach((c, i) => {
            tl.fromTo(
              c.sel,
              {
                x: c.fromX,
                y: c.fromY,
                rotate: c.fromRotate,
                scale: 0.7,
                opacity: 0,
              },
              {
                x: 0,
                y: 0,
                rotate: c.rotate,
                scale: 1,
                opacity: 1,
                duration: 1,
              },
              i * 0.25
            );
          });

          // Sale badge pops in last
          tl.fromTo(
            '.cta-badge',
            { scale: 0, rotate: -90, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 0.6 },
            0.9
          );

          // Left text slides in slightly
          tl.fromTo(
            '.cta-text',
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 },
            0
          );

          // Floating pill badge
          tl.fromTo(
            '.cta-pill',
            { y: 20, opacity: 0, rotate: -25 },
            { y: 0, opacity: 1, rotate: -12, duration: 0.5 },
            0.5
          );
        } else {
          // Mobile: clean entrance stagger without continuous scroll scrubbing
          cards.forEach((c, idx) => {
            gsap.fromTo(
              c.sel,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                rotate: c.rotate,
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: bannerRef.current,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });

          gsap.fromTo(
            '.cta-badge',
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.5,
              delay: 0.3,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: bannerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          gsap.from('.cta-text', {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      },
      bannerRef
    );

    return () => mm.revert();
  }, []);

  const handleClick = () => {
    if (onOpenPlanner) {
      onOpenPlanner(context || title);
    }
  };

  return (
    <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 bg-white w-full ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        <div
          ref={bannerRef}
          className="relative isolate rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 min-h-[420px] md:min-h-[460px] flex items-center p-6 sm:p-10 lg:p-16 shadow-2xl border border-slate-800"
        >
          {/* Background image with parallax */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              ref={bgImgRef}
              src={bgImage}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1] will-change-transform"
            />
            {/* Left-side darkening for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
          </div>

          {/* Left: text */}
          <div className="cta-text relative z-10 max-w-xl text-white">
            {pillBadge && (
              <div className="sm:hidden mb-3.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-bold text-white shadow-sm -rotate-2">
                <span>{pillBadge}</span>
              </div>
            )}
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                {title}
              </h2>
              {pillBadge && (
                <span className="cta-pill hidden sm:inline-block absolute -top-5 left-[38%] -rotate-12 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-lg whitespace-nowrap">
                  {pillBadge}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-white/85 font-normal">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {buttonHref ? (
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5B37] to-[#FFA07A] hover:from-[#E64A26] hover:to-[#FF8C66] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_10px_30px_rgba(255,91,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <span>{buttonText}</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={handleClick}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5B37] to-[#FFA07A] hover:from-[#E64A26] hover:to-[#FF8C66] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_10px_30px_rgba(255,91,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <span>{buttonText}</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Right: tilted photo collage (desktop / tablet) */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block"
            aria-hidden="true"
          >
            <img
              src={collage.top.src}
              alt={collage.top.alt}
              className="cta-card-top absolute left-[2%] top-[6%] h-[52%] w-[42%] rounded-2xl border-[3px] border-white object-cover shadow-2xl will-change-transform"
            />
            <img
              src={collage.right.src}
              alt={collage.right.alt}
              className="cta-card-right absolute right-[2%] top-[4%] h-[46%] w-[40%] rounded-2xl border-[3px] border-white object-cover shadow-2xl will-change-transform"
            />
            <img
              src={collage.bottom.src}
              alt={collage.bottom.alt}
              className="cta-card-bottom absolute bottom-[4%] left-[30%] h-[44%] w-[40%] rounded-2xl border-[3px] border-white object-cover shadow-2xl will-change-transform"
            />

            {/* Circular badge between the photos */}
            <div className="cta-badge absolute left-[43%] top-[36%] flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl lg:h-32 lg:w-32 text-center p-2">
              <span className="text-2xl sm:text-3xl font-black leading-none lg:text-3xl tracking-tight text-slate-950">
                {badgeMain}
              </span>
              <span className="mt-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#FF5B37]">
                {badgeSub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
