import ImageBanner from "@/styles/images/recruitment/bg-tuyendung.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background fixed */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src={ImageBanner.src}
          alt="Recruitment Banner"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
