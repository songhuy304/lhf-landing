import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
const data = [
  {
    title: "nail",
    img: "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080",
  },
  {
    title: "recruitment",
    img: "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "retail",
    img: "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];
export const FeatureSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section id="feature" className="relative overflow-hidden pt-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("featureDes")} subTitle={t("featureSubTitle")}>
          {t("featureTitle")}
        </TitleHeading>
        <div className="max-w-5xl mx-auto flex justify-center gap-4 overflow-visible relative z-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex-1 cursor-pointer hover:[flex-grow:3] transition-all duration-300 group h-[450px] rounded-md overflow-hidden z-0 hover:z-10"
            >
              <img
                src={item.img}
                alt="placeholder"
                className="absolute top-0 left-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-4 font-bold text-2xl text-primary">
                {t(item.title)}
              </div>

              <div className="absolute bottom-0 items-start left-4 gap-2 font-medium text-base text-white transition-all duration-300 delay-300 translate-y-52 group-hover:translate-y-[-30px] flex flex-col justify-start">
                <p className="text-white">{t("featureDes")}</p>
                <Button className="flex items-center gap-2">
                  {t("readMore")}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
