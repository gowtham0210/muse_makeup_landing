import type { Metadata } from "next";
import { PageVideoHero } from "@/components/layout/PageVideoHero";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { VIDEOS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Portfolio | MUSE",
  description:
    "Browse bridal, editorial, glam, and party makeup work by MUSE.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <PageVideoHero
        videoSrc={VIDEOS.portfolio}
        eyebrow="Portfolio"
        title="A Portfolio of Transformations"
        subtitle="Bridal, editorial, glam, and party looks — filter by category and click through to view each piece."
      />
      <PortfolioGallery />
    </main>
  );
}
