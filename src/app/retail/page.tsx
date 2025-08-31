import LocationsList from "@/app/components/location-list";
import ProductList from "./components/product-list";
import HeroSection from "@/app/recruitment/components/hero-section";

export default function RetailPage() {
  return (
    <>
      <HeroSection />
      <ProductList />
      <LocationsList />
    </>
  );
}
