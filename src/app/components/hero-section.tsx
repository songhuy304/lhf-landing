"use client";

import Banner from "@/styles/images/home-page/banner-home.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <Image
        src={Banner}
        alt="LHF Banner"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover z-0"
      />
      <div className="max-w-xl mx-auto relative z-10 p-4">
        <h1 className="text-5xl font-bold text-center">
          <span className="text-primary">LHF</span>
          <span className="text-white"> - {t("brandStoryTitle")}</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
