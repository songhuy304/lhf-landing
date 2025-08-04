import { FeatureSection } from "@/app/components/feature";
import HeroSection from "@/app/components/hero-section";
import BrandStory from "./components/brand-story";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandStory />
      <FeatureSection />
      {/* <LocationsList /> */}
    </>
  );
}
