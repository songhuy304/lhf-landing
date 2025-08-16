"use client";

import { TabTransition } from "@/components/animation/tab-animation";
import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

// Import hình ảnh
import { cn } from "@/lib/utils";
import step1Image from "@/styles/images/recruitment/step1.png";
import step2Image from "@/styles/images/recruitment/step2.png";
import step3Image from "@/styles/images/recruitment/step3.png";

export default function About() {
  const t = useTranslations("RecruitmentPage");
  const [activeTab, setActiveTab] = useState<
    "internship" | "domestic" | "overseas"
  >("internship");

  const handleTabChange = (tab: "internship" | "domestic" | "overseas") => {
    setActiveTab(tab);
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
            className="mt-10 flex justify-center gap-4 mb-8 flex-wrap"
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

          <div data-aos="fade-up" data-aos-delay="400">
            <TabTransition activeTab={activeTab}>
              <div className="flex justify-center">
                {activeTab === "internship" && (
                  <div className="relative w-full aspect-[16/9] h-full">
                    <Image
                      src={step1Image}
                      alt="step1"
                      fill
                      loading="lazy"
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                )}
                {activeTab === "domestic" && (
                  <div className="relative w-full  aspect-[16/9] h-full">
                    <Image
                      src={step2Image}
                      alt="step2"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {activeTab === "overseas" && (
                  <div className="relative w-full aspect-[16/9] h-full">
                    <Image
                      src={step3Image}
                      alt="step3"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </TabTransition>
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
      className={cn(
        "px-6 transition-all border border-transparent",
        isActive ? "border-primary" : "border-gray-300"
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
