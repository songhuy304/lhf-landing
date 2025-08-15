import { useTranslations } from "next-intl";
import React from "react";
import Banner from "@/styles/images/nail-page/nail-section.jpg";

const HeroSection = () => {
  const t = useTranslations("NailPage");
  return (
    <section
      className="md:min-h-screen min-h-96"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></section>
  );
};

export default HeroSection;
