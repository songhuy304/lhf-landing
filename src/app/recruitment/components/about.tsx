"use client";

import { TabTransition } from "@/components/animation/tab-animation";
import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  color: {
    bg: string;
    border: string;
    text: string;
    bgLight: string;
  };
}

interface ProcessData {
  internship: {
    title: string;
    steps: ProcessStep[];
    note: string;
    duration: string;
  };
  domestic: {
    title: string;
    steps: ProcessStep[];
    notes: string[];
  };
  overseas: {
    title: string;
    steps: ProcessStep[];
    notes: string[];
  };
}

export default function About() {
  const t = useTranslations("RecruitmentPage");
  const [activeTab, setActiveTab] = useState<
    "internship" | "domestic" | "overseas"
  >("internship");

  const handleTabChange = (tab: "internship" | "domestic" | "overseas") => {
    setActiveTab(tab);
  };

  const processData: ProcessData = {
    internship: {
      title: t("internship.title"),
      steps: [
        {
          id: 1,
          title: t("internship.steps.step1.title"),
          description: t("internship.steps.step1.description"),
          color: {
            bg: "bg-gradient-to-br from-orange-500 to-orange-600",
            border: "border-orange-400",
            text: "text-orange-600",
            bgLight: "bg-orange-50",
          },
        },
        {
          id: 2,
          title: t("internship.steps.step2.title"),
          description: t("internship.steps.step2.description"),
          color: {
            bg: "bg-gradient-to-br from-pink-500 to-pink-600",
            border: "border-pink-400",
            text: "text-pink-600",
            bgLight: "bg-pink-50",
          },
        },
        {
          id: 3,
          title: t("internship.steps.step3.title"),
          description: t("internship.steps.step3.description"),
          color: {
            bg: "bg-gradient-to-br from-purple-500 to-purple-600",
            border: "border-purple-400",
            text: "text-purple-400",
            bgLight: "bg-purple-50",
          },
        },
        {
          id: 4,
          title: t("internship.steps.step4.title"),
          description: t("internship.steps.step4.description"),
          color: {
            bg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
            border: "border-cyan-400",
            text: "text-cyan-600",
            bgLight: "bg-cyan-50",
          },
        },
        {
          id: 5,
          title: t("internship.steps.step5.title"),
          description: t("internship.steps.step5.description"),
          color: {
            bg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
            border: "border-emerald-400",
            text: "text-emerald-600",
            bgLight: "bg-emerald-50",
          },
        },
        {
          id: 6,
          title: t("internship.steps.step6.title"),
          description: t("internship.steps.step6.description"),
          color: {
            bg: "bg-gradient-to-br from-amber-500 to-amber-600",
            border: "border-amber-400",
            text: "text-amber-600",
            bgLight: "bg-amber-50",
          },
        },
      ],
      note: t("internship.note"),
      duration: t("internship.duration"),
    },
    domestic: {
      title: t("domestic.title"),
      steps: [
        {
          id: 1,
          title: t("domestic.steps.step1.title"),
          description: t("domestic.steps.step1.description"),
          color: {
            bg: "bg-gradient-to-br from-blue-500 to-blue-600",
            border: "border-blue-400",
            text: "text-blue-600",
            bgLight: "bg-blue-50",
          },
        },
        {
          id: 2,
          title: t("domestic.steps.step2.title"),
          description: t("domestic.steps.step2.description"),
          color: {
            bg: "bg-gradient-to-br from-rose-500 to-rose-600",
            border: "border-rose-400",
            text: "text-rose-600",
            bgLight: "bg-rose-50",
          },
        },
        {
          id: 3,
          title: t("domestic.steps.step3.title"),
          description: t("domestic.steps.step3.description"),
          color: {
            bg: "bg-gradient-to-br from-violet-500 to-violet-600",
            border: "border-violet-400",
            text: "text-violet-600",
            bgLight: "bg-violet-50",
          },
        },
        {
          id: 4,
          title: t("domestic.steps.step4.title"),
          description: t("domestic.steps.step4.description"),
          color: {
            bg: "bg-gradient-to-br from-sky-500 to-sky-600",
            border: "border-sky-400",
            text: "text-sky-600",
            bgLight: "bg-sky-50",
          },
        },
        {
          id: 5,
          title: t("domestic.steps.step5.title"),
          description: t("domestic.steps.step5.description"),
          color: {
            bg: "bg-gradient-to-br from-teal-500 to-teal-600",
            border: "border-teal-400",
            text: "text-teal-600",
            bgLight: "bg-teal-50",
          },
        },
        {
          id: 6,
          title: t("domestic.steps.step6.title"),
          description: t("domestic.steps.step6.description"),
          color: {
            bg: "bg-gradient-to-br from-lime-500 to-lime-600",
            border: "border-lime-400",
            text: "text-lime-600",
            bgLight: "bg-lime-50",
          },
        },
      ],
      notes: [t("domestic.notes.0"), t("domestic.notes.1")],
    },
    overseas: {
      title: t("overseas.title"),
      steps: [
        {
          id: 1,
          title: t("overseas.steps.step1.title"),
          description: t("overseas.steps.step1.description"),
          color: {
            bg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
            border: "border-indigo-400",
            text: "text-indigo-600",
            bgLight: "bg-indigo-50",
          },
        },
        {
          id: 2,
          title: t("overseas.steps.step2.title"),
          description: t("overseas.steps.step2.description"),
          color: {
            bg: "bg-gradient-to-br from-red-500 to-red-600",
            border: "border-red-400",
            text: "text-red-600",
            bgLight: "bg-red-50",
          },
        },
        {
          id: 3,
          title: t("overseas.steps.step3.title"),
          description: t("overseas.steps.step3.description"),
          color: {
            bg: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
            border: "border-fuchsia-400",
            text: "text-fuchsia-600",
            bgLight: "bg-fuchsia-50",
          },
        },
        {
          id: 4,
          title: t("overseas.steps.step4.title"),
          description: t("overseas.steps.step4.description"),
          color: {
            bg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
            border: "border-cyan-400",
            text: "text-cyan-600",
            bgLight: "bg-cyan-50",
          },
        },
        {
          id: 5,
          title: t("overseas.steps.step5.title"),
          description: t("overseas.steps.step5.description"),
          color: {
            bg: "bg-gradient-to-br from-green-500 to-green-600",
            border: "border-green-400",
            text: "text-green-600",
            bgLight: "bg-green-50",
          },
        },
        {
          id: 6,
          title: t("overseas.steps.step6.title"),
          description: t("overseas.steps.step6.description"),
          color: {
            bg: "bg-gradient-to-br from-yellow-500 to-yellow-600",
            border: "border-yellow-400",
            text: "text-yellow-600",
            bgLight: "bg-yellow-50",
          },
        },
      ],
      notes: [
        t("overseas.notes.0"),
        t("overseas.notes.1"),
        t("overseas.notes.2"),
      ],
    },
  };

  const renderStep = (
    step: ProcessStep,
    index: number,
    steps: ProcessStep[]
  ) => {
    const isLastStep = index === steps.length - 1;

    return (
      <div
        key={step.id}
        className="relative flex flex-col items-center mb-12 md:mb-0 z-10"
      >
        <div
          className={`w-20 h-20 ${step.color.bgLight} rounded-full flex items-center justify-center border-4 ${step.color.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
        >
          <div
            className={`w-12 h-12 ${step.color.bg} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md`}
          >
            {step.id}
          </div>
        </div>
        <div className="mt-4 text-center">
          <h4 className={`font-bold ${step.color.text} text-lg min-h-14`}>
            {step.title}
          </h4>
          <p className="text-sm text-gray-600 mt-2 px-2 leading-relaxed">
            {step.description}
          </p>
        </div>
        {/* Arrow on mobile */}
        {!isLastStep && (
          <div className="md:hidden mt-4 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={step.color.text.replace("text", "text")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>
    );
  };

  const renderNoteList = (notes: string[]) => (
    <ul className="space-y-2 text-gray-700">
      {notes.map((note, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-600 mr-2">✓</span>
          <span>{note}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <section
        id="about-recruitment"
        className="relative overflow-hidden py-24"
      >
        <div className="container mx-auto px-4">
          <TitleHeading des={t("aboutDes")} classNameDes="text-white">
            {t("aboutTitle")}
          </TitleHeading>

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

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="rounded-lg p-8 mt-8 bg-gray-50"
          >
            <TabTransition activeTab={activeTab}>
              {activeTab === "internship" && (
                <div className="space-y-10">
                  <h3 className="text-2xl font-bold text-center mb-10 text-black">
                    {processData.internship.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {processData.internship.steps.map((step, index) =>
                      renderStep(step, index, processData.internship.steps)
                    )}
                  </div>

                  <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 shadow-lg">
                    <p className="text-blue-800 font-medium text-lg">
                      {processData.internship.note}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "domestic" && (
                <div className="space-y-10">
                  <h3 className="text-2xl text-black font-bold text-center mb-10">
                    {processData.domestic.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {processData.domestic.steps.map((step, index) =>
                      renderStep(step, index, processData.domestic.steps)
                    )}
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mt-12 border border-gray-200 shadow-lg">
                    <h4 className="font-semibold text-center mb-4 text-lg text-gray-800">
                      {t("importantNotes")}
                    </h4>
                    {renderNoteList(processData.domestic.notes)}
                  </div>
                </div>
              )}

              {activeTab === "overseas" && (
                <div className="space-y-10">
                  <h3 className="text-2xl text-black font-bold text-center mb-10">
                    {processData.overseas.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {processData.overseas.steps.map((step, index) =>
                      renderStep(step, index, processData.overseas.steps)
                    )}
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mt-12 border border-gray-200 shadow-lg">
                    <h4 className="font-semibold text-center mb-4 text-lg text-gray-800">
                      {t("importantNotes")}
                    </h4>
                    {renderNoteList(processData.overseas.notes)}
                  </div>
                </div>
              )}
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
