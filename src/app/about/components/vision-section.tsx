import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { Target, Heart, Lightbulb, Globe } from "lucide-react";

const VisionSection = () => {
  const t = useTranslations("AboutPage.Vision");

  const visionItems = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: t("v1-title"),
      description: t("v1-des"),
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: t("v2-title"),
      description: t("v2-des"),
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: t("v3-title"),
      description: t("v3-des"),
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t("v4-title"),
      description: t("v4-des"),
    },
  ];

  return (
    <section id="vision" className="relative overflow-hidden py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("des")}>{t("title")}</TitleHeading>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 pl-12">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
