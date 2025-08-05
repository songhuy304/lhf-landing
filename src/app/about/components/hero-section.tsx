import { useTranslations } from "next-intl";
import React from "react";

const HeroSection = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="pt-24">
      <div className="container mx-auto h-72 rounded-3xl bg-[linear-gradient(100deg,#FDF2F8_0%,_#FFFFFF_50%,_#FDF2F8_100%)]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
