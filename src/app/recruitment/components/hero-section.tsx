import { useTranslations } from "next-intl";
import React from "react";

const HeroSection = () => {
  const t = useTranslations("RecruitmentPage");
  return (
    <div className="pt-24">
      <div className="container mx-auto h-72 rounded-3xl bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center">{t("aboutTitle")}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
