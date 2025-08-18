import ImageBanner from "@/styles/images/heroSection.png";
import Image from "next/image";

export default function HeroSection() {
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
}
