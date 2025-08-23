import About from "@/app/recruitment/components/about";
import ComparisonTable from "@/app/recruitment/components/comparison-table";
import CountryCharacteristics from "@/app/recruitment/components/country-characteristics";
import HeroSection from "./components/hero-section";

export default function RecruitmentPage() {
  return (
    <>
      <HeroSection />
      <About />
      <CountryCharacteristics />
      <ComparisonTable />
    </>
  );
}
