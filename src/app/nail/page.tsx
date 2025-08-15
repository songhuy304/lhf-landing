import HeroSection from "@/app/nail/components/hero-section";
import Booking from "../components/booking";
import SocialMedia from "../components/social-media";
import NailGallery from "./components/nail-gallery";
import PriceMenu from "./components/price-menu";

export default function NailPage() {
  return (
    <>
      <HeroSection />
      <PriceMenu />
      <NailGallery />
      <Booking />
      <SocialMedia />
    </>
  );
}
