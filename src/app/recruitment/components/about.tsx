"use client";

import { TitleHeading } from "@/components/title-section";
import { Button, Text } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function About() {
  const t = useTranslations("RecruitmentPage");
  const [activeTab, setActiveTab] = useState<
    "internship" | "domestic" | "overseas"
  >("internship");
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");
  const [prevTab, setPrevTab] = useState<
    "internship" | "domestic" | "overseas"
  >("internship");

  // Xác định hướng animation dựa trên tab trước đó và tab hiện tại
  const handleTabChange = (tab: "internship" | "domestic" | "overseas") => {
    setPrevTab(activeTab);

    // Xác định hướng animation
    const tabOrder = ["internship", "domestic", "overseas"];
    const prevIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(tab);

    if (newIndex > prevIndex) {
      setAnimationDirection("right");
    } else {
      setAnimationDirection("left");
    }

    setActiveTab(tab);
  };

  const getSteps = () => {
    switch (activeTab) {
      case "internship":
        return [1, 2, 3, 4, 5, 6].map((step) => ({
          step,
          icon: getIconForStep(step),
          title: t(`internship.step${step}`),
          color: getColorForStep(step),
        }));
      case "domestic":
        return [1, 2, 3, 4, 5, 6].map((step) => ({
          step,
          icon: getIconForStep(step),
          title: t(`domestic.step${step}`),
          color: getColorForStep(step),
        }));
      case "overseas":
        return [1, 2, 3, 4, 5, 6].map((step) => ({
          step,
          icon: getIconForStep(step),
          title: t(`overseas.step${step}`),
          color: getColorForStep(step),
        }));
      default:
        return [];
    }
  };

  const getIconForStep = (step: number) => {
    switch (step) {
      case 1:
        return "📝"; // Đơn ứng tuyển/phỏng vấn
      case 2:
        return "📋"; // Kế hoạch/hợp đồng
      case 3:
        return "🏛️"; // Giấy tờ pháp lý
      case 4:
        return "🛂"; // Visa/thủ tục
      case 5:
        return "✈️"; // Nhập cảnh/đào tạo
      case 6:
        return "👨‍💼"; // Bắt đầu làm việc
      default:
        return "📌";
    }
  };

  const getColorForStep = (step: number) => {
    switch (step) {
      case 1:
        return "bg-amber-500/20";
      case 2:
        return "bg-pink-600/20";
      case 3:
        return "bg-purple-600/20";
      case 4:
        return "bg-cyan-500/20";
      case 5:
        return "bg-emerald-500/20";
      case 6:
        return "bg-green-600/20";
      default:
        return "bg-gray-500/20";
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case "internship":
        return t("tabTitle1");
      case "domestic":
        return t("tabTitle2");
      case "overseas":
        return t("tabTitle3");
      default:
        return "";
    }
  };

  const getNote = () => {
    if (activeTab === "internship") {
      return t("tabNote");
    }
    return "";
  };

  return (
    <>
      <section
        id="about-recruitment"
        className="relative overflow-hidden py-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <TitleHeading des={t("aboutDes")}>{t("aboutTitle")}</TitleHeading>

          <div
            className="mt-10 flex justify-center gap-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <TabButton
              isActive={activeTab === "internship"}
              onClick={() => handleTabChange("internship")}
            >
              {t("tab1")}
            </TabButton>
            <TabButton
              isActive={activeTab === "domestic"}
              onClick={() => handleTabChange("domestic")}
            >
              {t("tab2")}
            </TabButton>
            <TabButton
              isActive={activeTab === "overseas"}
              onClick={() => handleTabChange("overseas")}
            >
              {t("tab3")}
            </TabButton>
          </div>

          <div
            className="bg-gray-50 rounded-xl p-8 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold text-center mb-10">
              {getTabTitle()}
            </h3>

            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              data-aos={`fade-${animationDirection}`}
              data-aos-duration="800"
            >
              {getSteps().map((step, index) => (
                <ProcessStep
                  key={step.step}
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  color={step.color}
                  delay={index * 100}
                />
              ))}
            </div>

            {getNote() && (
              <div
                className="mt-8 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="inline-block border-2 border-red-500 rounded-lg px-6 py-2 text-lg font-medium">
                  {getNote()}
                </div>
              </div>
            )}

            {activeTab === "domestic" && (
              <div
                className="mt-8 bg-blue-50 p-4 rounded-lg text-sm"
                data-aos="fade-up"
              >
                <div>
                  <Text weight="bold" className="mb-2">
                    {t("domestic.note1")}
                  </Text>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <Text>{t("domestic.note1_1")}</Text>
                    </li>
                    <li>
                      <Text>{t("domestic.note1_2")}</Text>
                    </li>
                  </ul>
                  <Text weight="bold" className="mt-2 mb-2">
                    {t("domestic.note1_3")}
                  </Text>
                  <Text size="xs" className="block">
                    {t("domestic.note1_4")}
                  </Text>
                  <Text weight="bold" className="mt-2 mb-2">
                    {t("domestic.note2")}
                  </Text>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <Text>{t("domestic.note2_1")}</Text>
                    </li>
                    <li>
                      <Text>{t("domestic.note2_2")}</Text>
                    </li>
                    <li>
                      <Text>{t("domestic.note2_3")}</Text>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "overseas" && (
              <div
                className="mt-8 bg-blue-50 p-4 rounded-lg text-sm"
                data-aos="fade-up"
              >
                <div>
                  <Text weight="bold" className="mb-2">
                    {t("overseas.note1")}
                  </Text>
                  <Text weight="bold" className="mt-4 mb-2">
                    {t("overseas.note2")}
                  </Text>
                  <ul className="space-y-1">
                    <li>
                      <Text>{t("overseas.note2_1")}</Text>
                    </li>
                    <li>
                      <Text>{t("overseas.note2_2")}</Text>
                    </li>
                    <li>
                      <Text>{t("overseas.note2_3")}</Text>
                    </li>
                  </ul>
                  <Text size="xs" className="mt-2 block">
                    {t("overseas.note3")}
                  </Text>
                  <Text size="xs" className="block">
                    {t("overseas.note4")}
                  </Text>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={`${isActive ? "" : "text-gray-900"} px-6 transition-all`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const ProcessStep = ({
  step,
  icon,
  title,
  color,
  delay = 0,
}: {
  step: number;
  icon: string;
  title: string;
  color: string;
  delay?: number;
}) => {
  return (
    <div
      className="flex flex-col items-center mb-8"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        className={`${color} w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mb-2 relative`}
      >
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="text-center mt-2 max-w-[200px]">
        <Text size="sm">{title}</Text>
      </div>
    </div>
  );
};
