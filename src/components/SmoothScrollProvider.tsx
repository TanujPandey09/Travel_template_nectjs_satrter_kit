'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect mobile touch devices (iOS Safari, Android Chrome, mobile viewports)
    const isTouchOrMobile =
      window.innerWidth < 768 ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    // On mobile devices, native 120Hz momentum scrolling provides the fastest,
    // jitter-free experience without fighting touch event loops or GPU composite threads.
    if (isTouchOrMobile) {
      return;
    }

    // Initialize Lenis Smooth Scrolling for desktop mouse wheel
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis Scroll updates to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis raf
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    // Allow standard lag smoothing so dropped frames don't queue up and cause freezes
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);

  return <>{children}</>;
};

