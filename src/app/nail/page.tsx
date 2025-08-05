import HeroSection from "@/app/nail/components/hero-section";
import Booking from "../components/booking";
import SocialMedia from "../components/social-media";
import NailGallery from "./components/nail-gallery";

export default function NailPage() {
  return (
    <>
      <HeroSection />
      <NailGallery />
      <Booking />
      <SocialMedia />
    </>
  );
}
