import OurCompany from "@/app/about/components/our-company";
import LocationsList from "@/app/components/location-list";
import ContactUs from "./components/contact-us";
import VisionSection from "./components/vision-section";
import HeroSection from "@/app/recruitment/components/hero-section";

export default function About() {
  return (
    <>
      <HeroSection />
      <OurCompany />
      <VisionSection />
      <ContactUs />
      <LocationsList />
    </>
  );
}
