'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CaretLeft, CaretRight, Sparkle, MapPin } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ChoiceCard {
  id: string;
  title: string;
  tag: string;
  image: string;
  region: string;
}

const CHOICES: ChoiceCard[] = [
  {
    id: 'c1',
    title: 'Auli Snow Peak Haven',
    tag: '04 Tour Plan',
    region: 'Chamoli, Uttarakhand',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c2',
    title: 'Kedarnath High Yatra',
    tag: '05 Tour Plan',
    region: 'Rudraprayag, Uttarakhand',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c3',
    title: 'Rishikesh Ganga Rapids',
    tag: '03 Tour Plan',
    region: 'Tehri Garhwal, Uttarakhand',
    image: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c4',
    title: 'Jim Corbett Tiger Safari',
    tag: '03 Tour Plan',
    region: 'Nainital District, Uttarakhand',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c5',
    title: 'Chopta & Tungnath Ridge',
    tag: '04 Tour Plan',
    region: 'Mini Switzerland of India',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c6',
    title: 'Jaisalmer Thar Dunes',
    tag: '05 Tour Plan',
    region: 'Sam Sand Dunes, Rajasthan',
    image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

// Always-visible background image (instant, and the fallback if the video fails).
const BG_POSTER =
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=2560';

// TIP: for production, download a video into /public/videos and use
// '/videos/city.mp4' here. Hotlinked videos are unreliable.
const BG_VIDEO = 'https://www.pexels.com/download/video/39376863/';

// Auto-scroll speed in pixels per second (raise = faster)
const AUTO_SPEED = 45;
// How long auto-scroll stays paused after the user interacts (ms)
const RESUME_DELAY = 2500;

interface DarkDestinationChoiceProps {
  onSelectDestination?: (title: string) => void;
}

// The list is rendered 4 times: [set 0][set 1][set 2][set 3].
// The scroll position is kept between 0.5 and 2.5 set-widths and silently
// shifted by exactly one set width at the edges, so the loop never ends.
const SETS = [0, 1, 2, 3];

export const DarkDestinationChoice: React.FC<DarkDestinationChoiceProps> = ({
  onSelectDestination,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Shared flags read by the animation loop
  const hoverRef = useRef(false);
  const inViewRef = useRef(false);
  const pausedUntilRef = useRef(0);
  const movedRef = useRef(false); // true if the last mouse press was a drag

  const realCount = CHOICES.length;

  // Distance between two neighbouring card left edges (card + gap),
  // measured from the DOM so it always matches the real layout.
  const getStep = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return 0;
    const a = el.children[0] as HTMLElement;
    const b = el.children[1] as HTMLElement;
    return b.offsetLeft - a.offsetLeft;
  }, []);

  const pauseAuto = useCallback(() => {
    pausedUntilRef.current = performance.now() + RESUME_DELAY;
  }, []);

  // Auto-scroll loop + infinite wrap + mouse drag
  useEffect(() => {
    const el = trackRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let pos = 0; // float position (scrollLeft alone can't hold sub-pixel steps)
    let raf = 0;
    let last = performance.now();
    let lastActive = -1;
    let dragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    const init = () => {
      const step = getStep();
      if (step) {
        pos = step * realCount; // start at the beginning of set 1
        el.scrollLeft = pos;
      }
    };
    init();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;

      const step = getStep();
      if (step) {
        const setWidth = step * realCount;
        const paused =
          reduceMotion ||
          dragging ||
          hoverRef.current ||
          !inViewRef.current ||
          now < pausedUntilRef.current;

        if (paused) {
          // Follow whatever the user / smooth scroll is doing
          pos = el.scrollLeft;
        } else {
          pos += AUTO_SPEED * dt;
          el.scrollLeft = pos;
        }

        // Endless loop: shift by exactly one set so nothing visibly changes
        if (pos >= setWidth * 2.5) {
          pos -= setWidth;
          el.scrollLeft = pos;
          dragStartScroll -= setWidth;
        } else if (pos < setWidth * 0.5) {
          pos += setWidth;
          el.scrollLeft = pos;
          dragStartScroll += setWidth;
        }

        const idx =
          ((Math.round(pos / step) % realCount) + realCount) % realCount;
        if (idx !== lastActive) {
          lastActive = idx;
          setActiveIndex(idx);
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause on hover (mouse only, so a tap on mobile doesn't freeze it)
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') hoverRef.current = true;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') hoverRef.current = false;
    };

    // Touch / wheel: let the browser scroll natively, just pause auto-play
    const onUserScroll = () => pauseAuto();

    // Mouse drag-to-scroll
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 5) movedRef.current = true;
      el.scrollLeft = dragStartScroll - dx;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      pauseAuto();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      // Reset after the click event (if any) has fired
      setTimeout(() => {
        movedRef.current = false;
      }, 0);
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dragging = true;
      movedRef.current = false;
      dragStartX = e.clientX;
      dragStartScroll = el.scrollLeft;
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
    };

    // Only run while the section is on screen
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );
    io.observe(section);

    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('touchstart', onUserScroll, { passive: true });
    el.addEventListener('touchend', onUserScroll, { passive: true });
    el.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('touchstart', onUserScroll);
      el.removeEventListener('touchend', onUserScroll);
      el.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('resize', init);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [getStep, pauseAuto, realCount]);

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    const step = getStep();
    if (!el || !step) return;
    pauseAuto();
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  const goToSlide = (index: number) => {
    const el = trackRef.current;
    const step = getStep();
    if (!el || !step) return;
    pauseAuto();
    const current = Math.round(el.scrollLeft / step);
    const currentReal = ((current % realCount) + realCount) % realCount;
    el.scrollTo({
      left: (current + (index - currentReal)) * step,
      behavior: 'smooth',
    });
  };

  // Entrance animation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.dest-pill', {
        scale: 0,
        rotate: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(2)',
      })
        .from(
          '.dest-line',
          {
            yPercent: 110,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
          },
          '-=0.3'
        )
        .from(
          trackRef.current,
          { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.5'
        )
        .from(
          '.dest-controls',
          { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      // `isolate` + bg-slate-950: the -z-10 background paints ABOVE the
      // section background instead of hiding behind it.
      className="relative isolate w-full overflow-hidden bg-slate-950 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 select-none"
    >
      {/* Background: image first (always visible), video fades in on top */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <img
          src={BG_POSTER}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover filter brightness-[0.32] contrast-[1.12]"
        />

        {!isMobile && !videoFailed && (
          <video
            src={BG_VIDEO}
            poster={BG_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'
              }`}
          />
        )}

        {/* Cinematic dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16">
          <div className="dest-pill mb-3 inline-block -rotate-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/95 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-800 shadow-lg sm:text-sm">
              <Sparkle size={13} weight="fill" className="text-[#FF5B37]" />
              Destination Plan
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
            <span className="block overflow-hidden pb-1">
              <span className="dest-line block">Top notch destination for</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="dest-line block">your next adventure</span>
            </span>
          </h2>
        </div>

        {/* Auto-scrolling infinite carousel */}
        <div
          ref={trackRef}
          className="flex cursor-grab gap-6 overflow-x-auto pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SETS.map((setIdx) =>
            CHOICES.map((card) => {
              const isMain = setIdx === 1;
              return (
                <div
                  key={`${setIdx}-${card.id}`}
                  role="button"
                  tabIndex={isMain ? 0 : -1}
                  aria-hidden={!isMain}
                  aria-label={isMain ? card.title : undefined}
                  onClick={() => {
                    if (movedRef.current) return; // it was a drag, not a click
                    onSelectDestination?.(card.title);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectDestination?.(card.title);
                    }
                  }}
                  onFocus={pauseAuto}
                  className="group relative h-[440px] sm:h-[480px] lg:h-[510px] w-[88vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl transition-all"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  <div className="absolute left-5 top-5 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md shadow-sm">
                      <MapPin size={13} weight="fill" className="text-[#FF5B37]" />
                      <span>{card.tag}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-xl sm:text-2xl font-black leading-tight text-white transition-colors group-hover:text-[#FF5B37]">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-white/80 flex items-center gap-1">
                      <span>{card.region}</span>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Controls: dots + arrows */}
        <div className="dest-controls mt-6 flex items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-2">
            {CHOICES.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to ${card.title}`}
                aria-current={activeIndex === idx}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${activeIndex === idx
                    ? 'w-7 bg-white'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard('left')}
              aria-label="Previous destination"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/30 active:scale-95"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard('right')}
              aria-label="Next destination"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/30 active:scale-95"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};