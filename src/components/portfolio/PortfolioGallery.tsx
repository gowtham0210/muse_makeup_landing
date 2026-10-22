"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { GalleryFilters } from "./GalleryFilters";
import { Lightbox } from "./Lightbox";
import { GalleryImage } from "./GalleryImage";
import { GALLERY_ITEMS, type Category, type GalleryItem } from "./galleryData";

type Variant = "side" | "feature";

type CardProps = {
  item: GalleryItem;
  number: number;
  total: number;
  variant: Variant;
  className: string;
  delay: number;
  onOpen: () => void;
};

function chunk<T>(list: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < list.length; i += size) rows.push(list.slice(i, i + size));
  return rows;
}

function Card({ item, number, total, variant, className, delay, onOpen }: CardProps) {
  const feature = variant === "feature";
  return (
    <Reveal delay={delay} className={className}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${item.title}`}
        className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
      >
        <div className="rounded-[1.4rem] border border-champagne/35 bg-ink p-1.5 shadow-2xl shadow-black/60 transition-[transform,border-color] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-champagne/70">
          <div className="overflow-hidden rounded-[1.05rem]">
            <GalleryImage
              src={item.image}
              alt={item.alt}
              sizes={
                feature
                  ? "(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 90vw"
                  : "(min-width: 1024px) 26vw, 45vw"
              }
              className={`${
                feature ? "aspect-[4/5]" : "aspect-[3/4]"
              } transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
            />
          </div>

          {feature && (
            <div className="px-4 pt-5 pb-4 text-center sm:px-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-champagne-light/80">
                {item.category}
              </p>
              <p className="mt-2 font-serif text-xl leading-tight text-cream sm:text-2xl">
                {item.title}
              </p>
              <span className="mt-4 inline-block rounded-full bg-champagne px-5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:bg-champagne-light">
                View Look
              </span>
            </div>
          )}
        </div>

        {!feature && (
          <span className="mt-4 flex items-baseline justify-between px-2 text-[11px] uppercase tracking-[0.25em] text-cream/55 transition-colors duration-300 group-hover:text-champagne-light">
            <span>{item.category}</span>
            <span className="font-serif text-champagne/70">
              {String(number).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </span>
        )}
      </button>
    </Reveal>
  );
}

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const rows = useMemo(() => chunk(filteredItems, 3), [filteredItems]);
  const total = filteredItems.length;

  return (
    <section className="bg-ink pt-16 pb-24 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <GalleryFilters
          active={activeCategory}
          onChange={(category) => {
            setActiveCategory(category);
            setLightboxIndex(null);
          }}
        />
      </div>

      <div key={activeCategory} className="mt-12 lg:mt-16">
        {rows.map((row, rowIndex) => {
          const base = rowIndex * 3;
          // A full row is side · feature · side; short rows show feature cards only.
          const cards =
            row.length === 3
              ? [
                  { variant: "side" as const, cls: "order-2 lg:order-none lg:col-span-3 lg:col-start-1" },
                  { variant: "feature" as const, cls: "order-1 col-span-2 mx-auto w-full max-w-sm sm:max-w-md lg:order-none lg:col-span-4 lg:col-start-5 lg:max-w-none" },
                  { variant: "side" as const, cls: "order-3 lg:order-none lg:col-span-3 lg:col-start-10" },
                ]
              : row.length === 2
                ? [
                    { variant: "feature" as const, cls: "col-span-2 mx-auto w-full max-w-sm sm:max-w-md lg:col-span-4 lg:col-start-3 lg:max-w-none" },
                    { variant: "feature" as const, cls: "col-span-2 mx-auto w-full max-w-sm sm:max-w-md lg:col-span-4 lg:col-start-7 lg:max-w-none" },
                  ]
                : [
                    { variant: "feature" as const, cls: "col-span-2 mx-auto w-full max-w-sm sm:max-w-md lg:col-span-4 lg:col-start-5 lg:max-w-none" },
                  ];

          return (
            <div
              key={rowIndex}
              className="border-t border-champagne/10 bg-[linear-gradient(to_bottom,transparent_0,transparent_46%,#14110e_46%)] px-6 py-10 sm:px-10 lg:px-16 lg:py-14"
            >
              <div className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-4 gap-y-8 lg:grid-cols-12 lg:gap-x-8">
                {row.map((item, i) => (
                  <Card
                    key={item.id}
                    item={item}
                    number={base + i + 1}
                    total={total}
                    variant={cards[i].variant}
                    className={cards[i].cls}
                    delay={i * 0.1}
                    onOpen={() => setLightboxIndex(base + i)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <p className="mt-10 text-center text-cream/60">
          No work in this category yet.
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
