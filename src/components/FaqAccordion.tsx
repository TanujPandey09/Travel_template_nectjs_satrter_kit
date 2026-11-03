'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FAQ_ITEMS } from '../data/travelData';

interface FaqAccordionProps {
  onOpenPlanner?: (defaultContext?: string) => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenPlanner }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0]?.id ?? '');

  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // Heading: each line rises out of a mask, pill pops in with a tilt
      const head = gsap.timeline({
        scrollTrigger: {
          trigger: '.faq-head',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      head
        .from('.faq-line', {
          yPercent: 110,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
        })
        .from(
          '.faq-pill',
          {
            scale: 0,
            rotate: -40,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(2)',
          },
          '-=0.4'
        );

      // Cards: stagger up as the list scrolls into view; reverse on scroll up
      gsap.from('.faq-card', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Bottom CTA
      gsap.from('.faq-cta', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-cta',
          start: 'top 95%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="w-full bg-white border-t border-slate-100 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
    >
      <div className="mx-auto w-full max-w-3xl">
        {/* Centered heading with tilted pill */}
        <div className="faq-head relative mx-auto mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            <span className="block overflow-hidden pb-1">
              <span className="faq-line block">Common travel questions</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="faq-line block">with clear answers</span>
            </span>
          </h2>

          <span className="faq-pill absolute -top-7 left-1/2 ml-6 sm:ml-16 -rotate-12 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200">
            Quick Travel Help
          </span>
        </div>

        {/* Accordion cards */}
        <div ref={listRef} className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`faq-card rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${isOpen
                    ? 'border-slate-300 shadow-[0_10px_30px_rgba(15,23,42,0.07)]'
                    : 'border-slate-200 hover:border-slate-300'
                  }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left sm:px-8 sm:py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B37]"
                >
                  <span className="text-lg sm:text-xl font-medium text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? 'rotate-180 bg-[#FF5B37] text-white'
                        : 'rotate-0 bg-transparent text-slate-900 group-hover:bg-slate-100'
                      }`}
                  >
                    <ArrowDown size={18} weight="bold" />
                  </span>
                </button>

                {/* Smooth height animation without measuring */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm sm:px-8 sm:pb-7 sm:text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => onOpenPlanner?.('FAQ Consultation')}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#FF5B37] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#FF5B37]/25 transition-all hover:bg-[#E64A26] hover:shadow-lg active:scale-95"
          >
            <span>Have a specific question?</span>
            <ArrowRight size={16} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};