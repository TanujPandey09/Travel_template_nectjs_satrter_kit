'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Layout numbers come from the reference screenshot (cards 350 x 400 at a
 * ~1600px wide viewport):
 *   --w  = card width (scales with the viewport, max 350px)
 *   dx   = card centre offset from the stage centre, in card widths
 *   dy   = vertical offset, in card widths (negative = higher)
 *   rot  = final tilt in degrees
 */
interface CollageCard {
  id: string;
  src: string;
  alt: string;
  dx: number;
  dy: number;
  rot: number;
  z: number;
  fromRot: number; // tilt while the cards are still stacked in the middle
  drift: number; // scroll parallax strength (% of card height)
}

const CARDS: CollageCard[] = [
  {
    id: 'cc-1',
    src: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rishikesh sacred Ganga river valley',
    dx: -1.351,
    dy: 0,
    rot: 0,
    z: 10,
    fromRot: -22,
    drift: 3,
  },
  {
    id: 'cc-2',
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Snowy Himalayan peaks of Auli and Nanda Devi',
    dx: -0.68,
    dy: -0.134,
    rot: -9.6,
    z: 30,
    fromRot: 14,
    drift: 8,
  },
  {
    id: 'cc-3',
    src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Jim Corbett tiger reserve emerald sal forest',
    dx: 0.323,
    dy: 0,
    rot: 0,
    z: 20,
    fromRot: -9,
    drift: 4,
  },
  {
    id: 'cc-4',
    src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Nainital lake and pine ridges of Kumaon',
    dx: 1.229,
    dy: -0.134,
    rot: -14,
    z: 40,
    fromRot: 24,
    drift: 10,
  },
];

export const CraftJourneysCollage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        // 1) Heading + quote reveal
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.cc-head',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          .from('.cc-line', {
            yPercent: 110,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
          })
          .from(
            '.cc-pill',
            {
              scale: 0,
              rotate: -40,
              opacity: 0,
              duration: 0.6,
              ease: 'back.out(2)',
            },
            '-=0.4'
          );

        gsap.from('.cc-quote > *', {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.cc-quote',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });

        // 2) THE DEAL: the four photos start as one stacked pile in the middle
        //    and fan out into the collage as you scroll down. Scroll back up
        //    and they gather into the pile again.
        const w = (sel: string) =>
          (document.querySelector<HTMLElement>(sel)?.offsetWidth ?? 350);

        const deal = gsap.timeline({
          defaults: { ease: 'power2.out' },
          scrollTrigger: {
            trigger: '.cc-stage',
            start: 'top 92%',
            end: 'top 28%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        CARDS.forEach((c, i) => {
          const sel = `.${c.id}`;
          const at = i * 0.14;
          deal.fromTo(
            sel,
            {
              x: () => -c.dx * w(sel),
              y: () => -c.dy * w(sel) + 40,
              rotate: c.fromRot,
              scale: 0.62,
            },
            { x: 0, y: 0, rotate: c.rot, scale: 1, duration: 1 },
            at
          );
          deal.fromTo(
            sel,
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: 'none' },
            at
          );
        });

        // 3) After they land: each card floats at its own speed (parallax).
        //    Drift is 0 when the section is centred, so the collage matches
        //    the reference exactly at that moment.
        CARDS.forEach((c) => {
          gsap.fromTo(
            `.${c.id} .cc-drift`,
            { yPercent: c.drift },
            {
              yPercent: -c.drift,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );

          // 4) Photo slides slowly inside its own frame
          gsap.fromTo(
            `.${c.id} .cc-img`,
            { scale: 1.18, yPercent: -6 },
            {
              scale: 1.18,
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
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

    // Reduced motion: just show the final collage
    mm.add('(prefers-reduced-motion: reduce)', () => {
      CARDS.forEach((c) => gsap.set(`.${c.id}`, { rotate: c.rot }));
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full select-none overflow-hidden bg-white px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-14 sm:py-20 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading with tilted pill */}
        <div className="cc-head relative mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            <span className="block overflow-hidden pb-1">
              <span className="cc-line block">We don&apos;t sell trips. We</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="cc-line block">craft journeys.</span>
            </span>
          </h2>
          <span className="cc-pill absolute -top-7 left-1/2 ml-10 -rotate-6 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200 sm:ml-28">
            Our History
          </span>
        </div>

        {/* Collage stage */}
        <div
          className="cc-stage relative mx-auto w-full"
          style={
            {
              ['--w' as string]: 'clamp(88px, 21.9vw, 350px)',
              height: 'calc(var(--w) * 1.5)',
            } as React.CSSProperties
          }
        >
          {CARDS.map((c) => (
            <div
              key={c.id}
              className={`${c.id} absolute will-change-transform`}
              style={
                {
                  ['--dx' as string]: c.dx,
                  ['--dy' as string]: c.dy,
                  zIndex: c.z,
                  width: 'var(--w)',
                  height: 'calc(var(--w) * 1.143)',
                  left: 'calc(50% + var(--dx) * var(--w) - var(--w) / 2)',
                  top: 'calc(50% + var(--dy) * var(--w) - var(--w) * 0.5715)',
                  transform: `rotate(${c.rot}deg)`,
                } as React.CSSProperties
              }
            >
              <div className="cc-drift h-full w-full will-change-transform">
                <div className="h-full w-full overflow-hidden rounded-[clamp(8px,0.9vw,14px)] bg-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                  <img
                    src={c.src}
                    alt={c.alt}
                    draggable={false}
                    className="cc-img h-full w-full object-cover will-change-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="cc-quote mx-auto mt-10 max-w-[660px] text-center sm:mt-16">
          <p className="text-lg leading-relaxed text-slate-600 sm:text-[22px] sm:leading-[34px]">
            &quot;We built Traveli for travelers seeking authentic journeys through Devbhoomi and India&apos;s greatest landscapes — rooted in mountain safety, deep cultural reverence, and unmatched local mastery.&quot;
          </p>
          <h4 className="mt-6 text-base font-semibold text-slate-900">
            Tanuj Sharma
          </h4>
          <p className="mt-1 text-sm text-slate-500">Director of Himalayan Expeditions</p>
        </div>
      </div>
    </section>
  );
};