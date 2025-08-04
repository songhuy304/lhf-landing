"use client";

import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="hero-section min-h-screen relative overflow-hidden flex items-center justify-center">
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
