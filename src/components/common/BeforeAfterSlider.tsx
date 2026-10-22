"use client";

import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Width/height ratio of the comparison frame; both photos are cropped to fill it identically. */
  imageWidth: number;
  imageHeight: number;
  label?: string;
  className?: string;
};

const STEP = 2;
const DEFAULT_POSITION = 50;

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  imageWidth,
  imageHeight,
  label = "Before and after comparison",
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        event.preventDefault();
        setPosition((prev) => Math.max(0, prev - STEP));
        break;
      case "ArrowRight":
      case "ArrowUp":
        event.preventDefault();
        setPosition((prev) => Math.min(100, prev + STEP));
        break;
      case "Home":
        event.preventDefault();
        setPosition(0);
        break;
      case "End":
        event.preventDefault();
        setPosition(100);
        break;
    }
  };

  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center border border-champagne/20 bg-ink-soft px-6 py-16 text-center ${className}`}
      >
        <p className="max-w-sm text-sm leading-relaxed text-cream/60">
          The before &amp; after photos couldn&apos;t be loaded. Make sure
          they exist at <code>public/images/transformations/bridal-before.jpg</code>{" "}
          and <code>public/images/transformations/bridal-after.jpg</code>.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-orientation="horizontal"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
      className={`relative w-full touch-none select-none overflow-hidden bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${className}`}
    >
      <span className="sr-only">
        Use the left and right arrow keys to compare the before and after
        photos, or drag the handle.
      </span>

      {/* BEFORE — full base layer */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        sizes="(min-width: 640px) 384px, 320px"
        quality={90}
        className="object-cover object-top"
        draggable={false}
        onError={() => setImageError(true)}
      />

      {/* AFTER — clipped top layer, revealed as position increases */}
      <div
        className="absolute inset-0"
style={{ clipPath: `inset(0 0 0 ${position}%)` }}      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 640px) 384px, 320px"
          quality={90}
          className="object-cover object-top"
          draggable={false}
          onError={() => setImageError(true)}
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-cream">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-cream">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-champagne/80"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne bg-ink/90 text-champagne-light shadow-lg ${
          prefersReducedMotion ? "" : "transition-[left] duration-75"
        }`}
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M5 2 L1 8 L5 14"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M11 2 L15 8 L11 14"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
