import { HeroSection } from "@/components/hero/HeroSection";
import { ArtistIntro } from "@/components/home/ArtistIntro";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { TransformationSlider } from "@/components/home/TransformationSlider";
import { ArtistStory } from "@/components/home/ArtistStory";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { BeautyStudio } from "@/components/home/BeautyStudio";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { ExploreFilmstrip } from "@/components/home/ExploreFilmstrip";
import { FinalBookingCTA } from "@/components/home/FinalBookingCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ArtistIntro />
      <FeaturedWork />
      <TransformationSlider />
      <ArtistStory />
      <ServiceHighlights />
      <BeautyStudio />
      <TestimonialsPreview />
      <ExploreFilmstrip />
      <FinalBookingCTA />
    </main>
  );
}
