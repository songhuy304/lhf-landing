import { ArrowRight } from "lucide-react";
import Booking from "./components/booking";
import BrandStory from "./components/brand-story";
import FirstView from "./components/first-view";
import SocialMedia from "./components/social-media";
import { FeatureSection } from "@/app/components/feature";

export default function Home() {
  return (
    <>
      <FirstView />
      <FeatureSection />
      <BrandStory />
      <Booking />
      <SocialMedia />
    </>
  );
}
