import { TitleHeading } from "@/components/title-section";
import { Button, Text } from "@/components/ui";
import { useTranslations } from "next-intl";
import ImageCompany from "@/styles/images/company.jpg";
import Image from "next/image";
import {
  ArrowRightIcon,
  EyeIcon,
  TargetIcon,
  CompassIcon,
  AwardIcon,
} from "lucide-react";

const Vision = [
  {
    title: "Vision.v1-title",
    des: "Vision.v1-des",
    icon: <EyeIcon className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Vision.v2-title",
    des: "Vision.v2-des",
    icon: <TargetIcon className="w-5 h-5 text-red-500" />,
  },
  {
    title: "Vision.v3-title",
    des: "Vision.v3-des",
    icon: <CompassIcon className="w-5 h-5 text-green-500" />,
  },
  {
    title: "Vision.v4-title",
    des: "Vision.v4-des",
    icon: <AwardIcon className="w-5 h-5 text-amber-500" />,
  },
];

export default function OurCompany() {
  const t = useTranslations("AboutPage");
  return (
    <section id="Brand" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("ourCompanyDes")}>LHF</TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 max-w-4xl mx-auto">
          <div className="flex flex-col gap-5" data-aos="fade-right">
            <Text weight={"bold"} className="text-4xl">
              {t("ourCompany")}
            </Text>

            <Text>{t("aboutCompanyDes")}</Text>
            <div className="relative w-full h-96">
              <Image
                src={ImageCompany}
                alt="Company"
                fill
                className="rounded-lg"
              />

              <div className="absolute bottom-[-8px] right-0 h-[3.5rem] w-[11rem] bg-white rounded-s-full border-effect pt-2 pl-2">
                <a href="contact">
                  <Button className="rounded-full items-center group w-full">
                    {t("getInTouch")}
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-all duration-300" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 justify-around"
            data-aos="fade-left"
          >
            {Vision.map((item) => (
              <div key={item.title} className="space-y-4">
                <Text
                  weight={"bold"}
                  className="text-2xl uppercase"
                  startIcon={item.icon}
                >
                  {t(item.title)}
                </Text>
                <Text weight={"medium"}>{t(item.des)}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
