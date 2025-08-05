import OurCompany from "@/app/about/components/our-company";
import HeroSection from "./components/hero-section";
import LocationsList from "@/app/components/location-list";
import ContactUs from "./components/contact-us";

export default function About() {
  return (
    <>
      <HeroSection />
      <OurCompany />
      <ContactUs />
      <LocationsList />
    </>
  );
}
