"use client";

import { useTranslations } from "next-intl";
import Banner from "@/styles/images/home-page/banner-home.png";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-xl mx-auto">
        <h1
          className="text-5xl font-bold text-center text-shadow-xl"
          data-aos="fade-up"
        >
          <span className="text-primary text-shadow-lg">LHF</span>
          <span className="text-white text-shadow-lg">
            {" "}
            - {t("brandStoryTitle")}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
