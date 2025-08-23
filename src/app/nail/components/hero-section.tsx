import Banner from "@/styles/images/nail-page/nail-section.webp";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background fixed */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src={Banner.src}
          alt="Nail Service Banner"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
