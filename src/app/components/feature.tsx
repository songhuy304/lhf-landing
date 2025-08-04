"use client";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";

import RetailImage from "@/styles/images/home-page/banle-service.png";
import NailImage from "@/styles/images/home-page/nail-service.jpg";
import RecruitmentImage from "@/styles/images/home-page/nhanluc-service.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const data = [
  {
    title: "nail",
    img: NailImage,
    link: "/nail",
  },
  {
    title: "recruitment",
    img: RecruitmentImage,
    link: "/recruitment",
  },
  {
    title: "retail",
    img: RetailImage,
    link: "/retail",
  },
];
export const FeatureSection = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();

  return (
    <section id="feature" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("featureDes")} subTitle={t("featureSubTitle")}>
          {t("featureTitle")}
        </TitleHeading>
        <div
          className="max-w-5xl mx-auto flex justify-center gap-4 overflow-visible relative z-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col group items-center justify-center gap-4 cursor-pointer"
              onClick={() => {
                router.push(item.link);
              }}
            >
              <div className="relative h-80 rounded-md overflow-hidden z-0 hover:z-10">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="font-bold text-2xl text-primary">
                {t(item.title)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
