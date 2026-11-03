'use client';

import React, { useEffect, useRef } from 'react';
import { Star, Globe } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  banner: string;
  // Optional: put a real face photo URL here to replace the initials avatar
  avatar?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Our Kedarnath VIP helicopter darshan and private Innova Crysta hill chauffeur exceeded every expectation. Safe mountain driving, punctual transfers from Dehradun, and a tranquil luxury riverside camp in Rishikesh.',
    name: 'Dr. Rajeshwari & Anand Sharma',
    role: 'Family Char Dham & Rishikesh Expedition',
    initials: 'RS',
    banner:
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 't2',
    quote:
      'The Auli snow retreat and Jim Corbett tiger safari were flawlessly orchestrated. Zero hidden fees, pristine forest lodges in Dhikala, and our naturalist was truly extraordinary.',
    name: 'Marcus & Elena Vance',
    role: 'Auli Ski & Corbett Wildlife Trail',
    initials: 'MV',
    banner:
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

const MEDALLION_IMG =
  'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600';

const StarRow: React.FC<{ size?: number; className?: string; starClass: string }> = ({
  size = 18,
  className = '',
  starClass,
}) => (
  <div className={`flex items-center gap-1.5 text-slate-900 ${className}`}>
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={size} weight="fill" className={starClass} />
    ))}
  </div>
);

export const ReviewsAndStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };
        if (reduceMotion) return;

        // 1) Heading: pill pops, lines rise out of a mask
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.rev-head',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          .from('.rev-line', {
            yPercent: 110,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
          })
          .from(
            '.rev-pill',
            {
              scale: 0,
              rotate: -40,
              opacity: 0,
              duration: 0.6,
              ease: 'back.out(2)',
            },
            '-=0.4'
          );

        // 2) Parallax settle: cards start at different heights (up/down) and
        //    drift at different speeds while scrolling. By the time the grid
        //    reaches the upper part of the screen they all land on the SAME
        //    line and stay there.
        const offsets = isDesktop ? [110, 190, 140] : [40, 60, 40];
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: '.rev-grid',
            start: 'top 105%',
            end: 'top 40%',
            scrub: 1,
          },
        });
        ['.rev-card-stat', '.rev-card-1', '.rev-card-2'].forEach((sel, i) => {
          tl.fromTo(
            sel,
            { y: offsets[i], opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            0
          );
        });

        // 3) Stat card: number counts up, stars pop one by one
        const counter = { val: 0 };
        if (numberRef.current) numberRef.current.textContent = '0.0';
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.rev-card-stat',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          })
          .to(counter, {
            val: 4.9,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              if (numberRef.current) {
                numberRef.current.textContent = counter.val.toFixed(1);
              }
            },
          })
          .from(
            '.stat-star',
            {
              scale: 0,
              rotate: -90,
              opacity: 0,
              duration: 0.4,
              ease: 'back.out(2.5)',
              stagger: 0.08,
            },
            0.2
          );

        // 4) Testimonial stars pop when each card is in view
        gsap.utils.toArray<HTMLElement>('.rev-card-quote').forEach((card) => {
          gsap.from(card.querySelectorAll('.quote-star'), {
            scale: 0,
            rotate: -90,
            opacity: 0,
            duration: 0.4,
            ease: 'back.out(2.5)',
            stagger: 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          });
        });

        // 5) Medallion: keeps turning and drifting through the whole section
        gsap.fromTo(
          '.rev-medallion',
          { rotate: -14, y: 14 },
          {
            rotate: 14,
            y: -14,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
        gsap.fromTo(
          '.rev-medallion-img',
          { scale: 1.25 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );

        // 6) Banner photos inside the author strips drift slowly (inner parallax)
        gsap.utils.toArray<HTMLElement>('.banner-img').forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -14 },
            {
              yPercent: 14,
              ease: 'none',
              scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      // overflow-hidden keeps the parallax-offset cards from stretching the page
      className="w-full overflow-hidden border-b border-slate-100 bg-white px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-14 sm:py-20 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading with tilted pill */}
        <div className="rev-head relative mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            <span className="block overflow-hidden pb-1">
              <span className="rev-line block">Memorable journeys</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="rev-line block">shared by travelers</span>
            </span>
          </h2>
          <span className="rev-pill absolute -top-6 left-[8.5rem] -rotate-12 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200 sm:left-[11rem]">
            Happy Travelers
          </span>
        </div>

        {/* Cards */}
        <div className="rev-grid grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {/* Stat card */}
          <div className="rev-card-stat flex min-h-[480px] flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <div className="relative mx-auto inline-block">
              <span
                ref={numberRef}
                className="block text-8xl font-semibold leading-none tracking-tight text-slate-900 sm:text-9xl"
              >
                4.9
              </span>
              <Star
                size={22}
                weight="fill"
                className="absolute -right-7 top-2 text-slate-900"
              />
            </div>

            <StarRow
              size={16}
              className="mt-5 justify-center"
              starClass="stat-star"
            />
            <p className="mt-3 text-sm text-slate-500">
              Based on 2,400+ verified explorers
            </p>

            {/* Medallion */}
            <div className="mt-auto pt-8">
              <div className="rev-medallion relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl will-change-transform sm:h-64 sm:w-64">
                <img
                  src={MEDALLION_IMG}
                  alt="Traveler enjoying a mountain sunrise"
                  className="rev-medallion-img h-full w-full object-cover will-change-transform"
                />
                <div className="absolute inset-0 bg-slate-950/25" />
                {/* Passport mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-24 w-[4.5rem]">
                    <div className="absolute left-3 top-0 h-full w-full rounded-md border-2 border-white/90" />
                    <div className="absolute left-0 top-3 flex h-full w-full items-center justify-center rounded-md border-2 border-white bg-slate-950/20 backdrop-blur-[1px]">
                      <Globe size={30} weight="regular" className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`rev-card-quote rev-card-${i + 1} flex min-h-[480px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-7`}
            >
              <StarRow size={18} starClass="quote-star" className="px-1 pt-1" />

              <p className="mt-6 px-1 text-xl leading-snug text-slate-900 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author strip */}
              <div className="relative mt-auto h-[88px] overflow-hidden rounded-xl pt-0">
                <img
                  src={t.banner}
                  alt=""
                  aria-hidden="true"
                  className="banner-img absolute -top-[15%] left-0 h-[130%] w-full object-cover will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/10" />

                <div className="relative z-10 flex h-full items-center justify-between gap-3 px-5">
                  <div className="min-w-0">
                    <h4 className="truncate text-lg font-medium text-white">
                      {t.name}
                    </h4>
                    <p className="truncate text-sm text-white/70">{t.role}</p>
                  </div>

                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#FF5B37] to-amber-400 text-sm font-bold text-white">
                      {t.initials}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};