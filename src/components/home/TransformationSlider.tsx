import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { BeforeAfterSlider } from "@/components/common/BeforeAfterSlider";

export function TransformationSlider() {
  return (
    <section className="bg-ink-soft px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            The Art of Transformation
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
            One face.
            <span className="block italic text-champagne-light">
              Two moments.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
            A celebration of beauty.
          </p>
          <p className="mt-10 border-l border-champagne/40 pl-5 text-xs uppercase leading-relaxed tracking-[0.2em] text-cream/50">
            Drag the divider or use the arrow keys to compare before and after.
          </p>
          <Link
            href="/portfolio"
            className="mt-10 inline-block rounded-full border border-champagne/70 px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:border-champagne hover:bg-champagne/10"
          >
            See the Portfolio
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="relative mx-auto max-w-xs sm:max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 translate-x-5 translate-y-5 border border-champagne/30 sm:-inset-4 sm:translate-x-8 sm:translate-y-8"
            />
            <BeforeAfterSlider
              beforeSrc="/images/transformations/bridal-before.jpg"
              afterSrc="/images/transformations/bridal-after.jpg"
              beforeAlt="Bridal client before makeup application, natural face"
              afterAlt="Bridal client after makeup application, full bridal look"
              label="Bridal before and after makeup comparison"
              imageWidth={9}
              imageHeight={16}
              className="shadow-2xl shadow-ink"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
