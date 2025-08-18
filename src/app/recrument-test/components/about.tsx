"use client";

import { TabTransition } from "@/components/animation/tab-animation";
import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  color: {
    bg: string;
    border: string;
    text: string;
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
      title: "Quy trình thực tập sinh kỹ năng",
      steps: [
        {
          id: 1,
          title: "Nộp hồ sơ & Phỏng vấn",
          description:
            "Ứng viên nộp hồ sơ và tham gia phỏng vấn trực tiếp hoặc online",
          color: {
            bg: "bg-orange-500",
            border: "border-orange-400",
            text: "text-orange-500",
          },
        },
        {
          id: 2,
          title: "Kế hoạch thực tập",
          description:
            "Xây dựng kế hoạch thực tập chi tiết và mục tiêu đào tạo",
          color: {
            bg: "bg-pink-500",
            border: "border-pink-400",
            text: "text-pink-500",
          },
        },
        {
          id: 3,
          title: "Chứng nhận & Đào tạo",
          description:
            "Hoàn thành chứng chỉ và tham gia khóa đào tạo chuyên sâu",
          color: {
            bg: "bg-purple-500",
            border: "border-purple-400",
            text: "text-purple-500",
          },
        },
        {
          id: 4,
          title: "Xin visa & Giấy phép",
          description:
            "Hỗ trợ hoàn thiện hồ sơ xin visa và các giấy phép cần thiết",
          color: {
            bg: "bg-cyan-500",
            border: "border-cyan-400",
            text: "text-cyan-500",
          },
        },
        {
          id: 5,
          title: "Nhập cảnh & Đào tạo",
          description: "Nhập cảnh và tham gia khóa đào tạo 1 tháng về ngôn ngữ",
          color: {
            bg: "bg-green-500",
            border: "border-green-400",
            text: "text-green-500",
          },
        },
        {
          id: 6,
          title: "Bắt đầu thực tập",
          description:
            "Thực tập sinh được phân công đến công ty và bắt đầu chương trình",
          color: {
            bg: "bg-amber-500",
            border: "border-amber-400",
            text: "text-amber-500",
          },
        },
      ],
      note: "Toàn bộ quy trình từ bước 1 đến bước 6 kéo dài khoảng 6 tháng",
      duration: "6 tháng",
    },
    domestic: {
      title: "Quy trình tuyển dụng trong nước",
      steps: [
        {
          id: 1,
          title: "Thi tuyển & Đào tạo",
          description:
            "Ứng viên tham gia kỳ thi tuyển chọn hoặc hoàn thành khóa đào tạo cấp độ 2",
          color: {
            bg: "bg-blue-500",
            border: "border-blue-400",
            text: "text-blue-500",
          },
        },
        {
          id: 2,
          title: "Ký hợp đồng",
          description:
            "Ký kết hợp đồng tuyển dụng với người lao động nước ngoài có kỹ năng đặc định",
          color: {
            bg: "bg-pink-500",
            border: "border-pink-400",
            text: "text-pink-500",
          },
        },
        {
          id: 3,
          title: "Xác định kế hoạch",
          description:
            "Xây dựng kế hoạch hỗ trợ cho người lao động nước ngoài có kỹ năng đặc định",
          color: {
            bg: "bg-purple-500",
            border: "border-purple-400",
            text: "text-purple-500",
          },
        },
        {
          id: 4,
          title: "Đổi tư cách lưu trú",
          description:
            "Nộp đơn xin thay đổi tư cách lưu trú tại cục quản lý xuất nhập cảnh địa phương",
          color: {
            bg: "bg-cyan-500",
            border: "border-cyan-400",
            text: "text-cyan-500",
          },
        },
        {
          id: 5,
          title: "Chuyển đổi visa",
          description:
            "Chuyển đổi tư cách lưu trú sang 'Kỹ năng đặc định số 1' để làm việc hợp pháp",
          color: {
            bg: "bg-green-500",
            border: "border-green-400",
            text: "text-green-500",
          },
        },
        {
          id: 6,
          title: "Bắt đầu làm việc",
          description:
            "Người lao động bắt đầu làm việc chính thức tại công ty với tư cách kỹ năng đặc định",
          color: {
            bg: "bg-amber-500",
            border: "border-amber-400",
            text: "text-amber-500",
          },
        },
      ],
      notes: [
        "Đơn xin phải do người nước ngoài trực tiếp nộp.",
        "Có thể được phê duyệt nếu là người đứng đầu địa phương và đáp ứng các yêu cầu.",
      ],
    },
    overseas: {
      title: "Quy trình tuyển dụng từ nước ngoài",
      steps: [
        {
          id: 1,
          title: "Thi tuyển & Đào tạo",
          description:
            "Ứng viên nước ngoài tham gia kỳ thi tuyển chọn hoặc hoàn thành khóa đào tạo cấp độ 2",
          color: {
            bg: "bg-indigo-500",
            border: "border-indigo-400",
            text: "text-indigo-500",
          },
        },
        {
          id: 2,
          title: "Ký hợp đồng",
          description:
            "Ký kết hợp đồng tuyển dụng với người lao động nước ngoài có kỹ năng đặc định",
          color: {
            bg: "bg-red-500",
            border: "border-red-400",
            text: "text-red-500",
          },
        },
        {
          id: 3,
          title: "Nộp hồ sơ chứng nhận",
          description:
            "Nộp đơn xin cấp giấy chứng nhận tư cách lưu trú tại cục quản lý xuất nhập cảnh",
          color: {
            bg: "bg-purple-500",
            border: "border-purple-400",
            text: "text-purple-500",
          },
        },
        {
          id: 4,
          title: "Nhận giấy chứng nhận",
          description:
            "Nhận giấy chứng nhận tư cách lưu trú và nộp đơn xin cấp thị thực (visa)",
          color: {
            bg: "bg-cyan-500",
            border: "border-cyan-400",
            text: "text-cyan-500",
          },
        },
        {
          id: 5,
          title: "Nhận visa & Nhập cảnh",
          description:
            "Nhận thị thực (visa) và nhập cảnh vào Nhật Bản để bắt đầu công việc",
          color: {
            bg: "bg-green-500",
            border: "border-green-400",
            text: "text-green-500",
          },
        },
        {
          id: 6,
          title: "Bắt đầu làm việc",
          description:
            "Người lao động bắt đầu làm việc chính thức tại công ty với tư cách kỹ năng đặc định",
          color: {
            bg: "bg-amber-500",
            border: "border-amber-400",
            text: "text-amber-500",
          },
        },
      ],
      notes: [
        "Không cấm việc đưa ra quyết định trước khi thi đỗ các kỳ thi.",
        "Về nguyên tắc, người nước ngoài phải đỗ kỳ thi kỹ năng đặc định trước khi ký hợp đồng.",
        "Có thể thi sau khi ký hợp đồng, nhưng nếu không đỗ sẽ không được chấp nhận nhập cảnh.",
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
          className={`w-20 h-20 ${step.color.bg.replace(
            "500",
            "100"
          )} rounded-full flex items-center justify-center border-4 ${
            step.color.border
          }`}
        >
          <div
            className={`w-12 h-12 ${step.color.bg} rounded-full flex items-center justify-center text-white font-bold text-xl`}
          >
            {step.id}
          </div>
        </div>
        <div className="mt-4 text-center">
          <h4 className={`font-bold ${step.color.text} text-lg`}>
            {step.title}
          </h4>
          <p className="text-sm text-gray-200 mt-2 px-2">{step.description}</p>
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
            className="rounded-lg p-8 mt-8"
          >
            <TabTransition activeTab={activeTab}>
              {activeTab === "internship" && (
                <div className="space-y-10">
                  <h3 className="text-2xl font-bold text-center mb-10 text-white">
                    {processData.internship.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {processData.internship.steps.map((step, index) =>
                      renderStep(step, index, processData.internship.steps)
                    )}
                  </div>

                  <div className="text-center mt-12 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      {processData.internship.note}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "domestic" && (
                <div className="space-y-10">
                  <h3 className="text-2xl text-white font-bold text-center mb-10">
                    {processData.domestic.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {processData.domestic.steps.map((step, index) =>
                      renderStep(step, index, processData.domestic.steps)
                    )}
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg mt-12">
                    <h4 className="font-semibold text-center mb-3">
                      Lưu ý quan trọng:
                    </h4>
                    {renderNoteList(processData.domestic.notes)}
                  </div>
                </div>
              )}

              {activeTab === "overseas" && (
                <div className="space-y-10">
                  <h3 className="text-2xl text-white font-bold text-center mb-10">
                    {processData.overseas.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {processData.overseas.steps.map((step, index) =>
                      renderStep(step, index, processData.overseas.steps)
                    )}
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg mt-12">
                    <h4 className="font-semibold text-center mb-3">
                      Lưu ý quan trọng:
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
