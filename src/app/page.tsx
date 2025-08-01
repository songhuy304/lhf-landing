import { FeatureSection } from "@/app/components/feature";
import HeroSection from "@/app/components/hero-section";
import Booking from "./components/booking";
import BrandStory from "./components/brand-story";
import SocialMedia from "./components/social-media";

export default function Home() {
  return (
    <>
      {/* <FirstView /> */}
      <HeroSection />
      <FeatureSection />
      <BrandStory />
      <Booking />
      <SocialMedia />
    </>
  );
}
