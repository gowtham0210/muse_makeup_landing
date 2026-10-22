"use client";

import { useEffect, useCallback } from "react";
import { GalleryImage } from "./GalleryImage";
import type { GalleryItem } from "./galleryData";

type LightboxProps = {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const item = items[activeIndex];

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 px-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-6 top-6 text-3xl text-cream/80 transition-colors hover:text-champagne-light"
      >
        &times;
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 text-3xl text-cream/70 transition-colors hover:text-champagne-light sm:left-10"
      >
        &#8249;
      </button>

      <div
        className="max-h-[80vh] w-full max-w-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <GalleryImage
          src={item.image}
          alt={item.alt}
          sizes="(min-width: 1024px) 40vw, 90vw"
          priority
          className="aspect-[3/4] w-full"
        />
        <p className="mt-4 text-center text-sm uppercase tracking-[0.15em] text-cream/70">
          {item.category} &middot; {activeIndex + 1} / {items.length}
        </p>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
        aria-label="Next image"
        className="absolute right-4 text-3xl text-cream/70 transition-colors hover:text-champagne-light sm:right-10"
      >
        &#8250;
      </button>
    </div>
  );
}
