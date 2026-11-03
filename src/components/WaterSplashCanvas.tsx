'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Water ripple that bends the photo itself.
 *
 * Click / tap the hero (not the form, buttons or links) and a small drop lands
 * there. Soft ripple bands spread out; inside each band the background image is
 * slightly magnified (crest) or shrunk (trough), so the picture looks like it is
 * refracting through moving water. No particles, no bubbles, no white rings.
 *
 * Setup: render this INSIDE the hero background wrapper, above the slides and
 * below the gradient overlays. The active slide needs data-hero-active="true".
 * Add `data-no-ripple` to anything that should not trigger a ripple.
 */

interface Drop {
  x: number;
  y: number;
  born: number; // ms (performance.now timebase)
}

const TAU = Math.PI * 2;
const DURATION = 2200; // life of one drop (ms)
const WAVE_SPEED = 0.17; // wave front speed (px per ms)
const RING_COUNT = 3; // ripple bands in the train
const RING_SPACING = 56; // distance between bands (px)
const STRENGTH = 0.03; // max image scale change (0.03 = 3%). Higher = stronger
const MAX_DROPS = 4; // cap for rapid clicking

type Source = HTMLImageElement | HTMLVideoElement;

const getSourceSize = (src: Source): [number, number] | null => {
  if (src instanceof HTMLVideoElement) {
    return src.readyState >= 2 && src.videoWidth > 0
      ? [src.videoWidth, src.videoHeight]
      : null;
  }
  return src.complete && src.naturalWidth > 0
    ? [src.naturalWidth, src.naturalHeight]
    : null;
};

export const WaterSplashCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const bg = canvas?.parentElement;
    if (!canvas || !bg) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Clicks are listened for on the whole hero section
    const host = (canvas.closest('section') as HTMLElement | null) ?? bg;

    let w = 0;
    let h = 0;
    const resize = () => {
      // offsetWidth/Height ignore parallax transforms (layout size)
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let drops: Drop[] = [];
    let raf = 0;
    let running = false;

    // Draw the active slide, clipped to [inner, outer] and scaled about the drop
    const drawBand = (
      src: Source,
      size: [number, number],
      cx: number,
      cy: number,
      inner: number,
      outer: number,
      scale: number,
      alpha: number
    ) => {
      if (outer <= inner || alpha <= 0.01) return;
      const [sw, sh] = size;
      const cover = Math.max(w / sw, h / sh); // same as object-cover
      const dw = sw * cover;
      const dh = sh * cover;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, outer, 0, TAU);
      if (inner > 0) ctx.arc(cx, cy, inner, 0, TAU, true);
      ctx.clip('evenodd');
      ctx.globalAlpha = alpha;
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);
      ctx.translate(-cx, -cy);
      ctx.drawImage(src, (w - dw) / 2, (h - dh) / 2, dw, dh);
      ctx.restore();
    };

    const frame = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      drops = drops.filter((d) => now - d.born < DURATION);

      const src = bg.querySelector<Source>(
        '[data-hero-active="true"] video, [data-hero-active="true"] img'
      );
      const size = src ? getSourceSize(src) : null;

      for (const d of drops) {
        const t = now - d.born;
        const life = t / DURATION;
        const fade = Math.pow(1 - life, 1.5);
        const front = t * WAVE_SPEED;

        for (let k = 0; k < RING_COUNT; k++) {
          const r = front - k * RING_SPACING;
          if (r <= 4) continue;

          const spread = 1 / (1 + r / 320); // weaker as the wave widens
          const amp = fade * (1 - k / (RING_COUNT + 0.8)) * spread * 1.5;
          if (amp < 0.02) continue;

          const halfW = (16 + k * 3) * Math.min(1, r / 50); // grows from the drop
          const a = STRENGTH * Math.min(1, amp);
          const alpha = Math.min(1, amp * 1.4);

          if (src && size) {
            // Trough (inner half): image shrinks. Crest (outer half): magnifies.
            drawBand(src, size, d.x, d.y, Math.max(0, r - halfW), r, 1 - a, alpha);
            drawBand(src, size, d.x, d.y, r, r + halfW, 1 + a, alpha);
          }

          // Hairline of light on the crest
          ctx.beginPath();
          ctx.arc(d.x, d.y, r, 0, TAU);
          ctx.strokeStyle = `rgba(255,255,255,${Math.min(0.14, 0.1 * amp)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (drops.length > 0) {
        raf = requestAnimationFrame(frame);
      } else {
        running = false;
        ctx.clearRect(0, 0, w, h);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      const target = e.target as HTMLElement;
      if (
        target.closest(
          'button, select, input, textarea, a, label, [data-no-ripple]'
        )
      ) {
        return;
      }

      // Map screen -> canvas layout coords (handles parallax scale/offset)
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      drops.push({
        x: ((e.clientX - rect.left) / rect.width) * w,
        y: ((e.clientY - rect.top) / rect.height) * h,
        born: performance.now(),
      });
      if (drops.length > MAX_DROPS) drops.shift();

      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    host.addEventListener('pointerdown', onPointerDown);

    return () => {
      host.removeEventListener('pointerdown', onPointerDown);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[15] h-full w-full"
      aria-hidden="true"
    />
  );
};   