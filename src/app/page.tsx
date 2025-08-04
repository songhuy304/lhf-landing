import { FeatureSection } from "@/app/components/feature";
import HeroSection from "@/app/components/hero-section";
import BrandStory from "./components/brand-story";
import LocationsList from "@/app/components/location-list";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandStory />
      <FeatureSection />
      <LocationsList />
    </>
  );
}
