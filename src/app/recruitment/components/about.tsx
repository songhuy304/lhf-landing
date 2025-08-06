"use client";

import { Carousel } from "@/components/carousel";
import { TitleHeading } from "@/components/title-section";
import { Button, Text } from "@/components/ui";
import CompanyImage from "@/styles/images/company.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const steps = [
  {
    title: "step1-title",
    description: "step1-des",
  },
  {
    title: "step2-title",
    description: "step2-des",
  },
  {
    title: "step3-title",
    description: "step3-des",
  },
];

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

export default function About() {
  const t = useTranslations("RecruitmentPage");
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <section
        id="about-recruitment"
        className="relative overflow-hidden py-24"
      >
        <div className="max-w-4xl mx-auto px-4">
          <TitleHeading des={t("aboutDes")}>{t("aboutTitle")}</TitleHeading>

          <div className="flex justify-center mb-8">
            <div
              className="inline-flex rounded-md shadow-sm space-x-1"
              role="group"
            >
              <TabButton
                isActive={activeTab === "tab1"}
                onClick={() => setActiveTab("tab1")}
              >
                {t("tab1")}
              </TabButton>
              <TabButton
                isActive={activeTab === "tab2"}
                onClick={() => setActiveTab("tab2")}
              >
                {t("tab2")}
              </TabButton>
              <TabButton
                isActive={activeTab === "tab3"}
                onClick={() => setActiveTab("tab3")}
              >
                {t("tab3")}
              </TabButton>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div
              className="w-full md:w-1/2 relative h-[300px]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                src={CompanyImage}
                alt="Recruitment Process"
                className="object-cover rounded-lg"
                fill
                priority
              />
            </div>

            {/* Steps Swiper Section */}
            <div
              className="w-full md:w-1/2 relative flex flex-col"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Carousel
                showNavigation={true}
                showPagination={false}
                swiperOptions={{
                  slidesPerView: 1,
                  spaceBetween: 24,
                  speed: 1000,
                }}
                prevRef={prevRef as any}
                nextRef={nextRef as any}
              >
                {steps.map((step, index) => (
                  <div key={index} className="space-y-4 flex flex-col">
                    <Text weight={"bold"} size={"2xl"} trans>
                      {t(step.title)}
                    </Text>
                    <Text trans>{t(step.description)}</Text>
                  </div>
                ))}
              </Carousel>

              <div className="flex mt-auto gap-2">
                <Button
                  ref={prevRef}
                  variant={"outline"}
                  className="border rounded-full w-10 h-10"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  ref={nextRef}
                  variant={"outline"}
                  className="border rounded-full w-10 h-10"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// <div className="relative">
//               <p>ádasd</p>
//               <Swiper
//                 modules={[Navigation]}
//                 navigation={{
//                   prevEl: ".button-prev",
//                   nextEl: ".button-next",
//                 }}
//                 slidesPerView={1}
//                 className="steps-swiper"
//               >
//                 {steps.map((step, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="p-8 rounded-lg ">
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
//                           {index + 1}
//                         </div>
//                         <h3 className="text-xl font-semibold">
//                           {t(step.title)}
//                         </h3>
//                       </div>
//                       <p className="text-gray-600">{t(step.description)}</p>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Custom Navigation Buttons */}
//             </div>

//             <div className="flex mt-auto gap-2">
//               <button className="button-prev border rounded-full p-2">
//                 <ChevronLeft />
//               </button>
//               <button className="button-next border rounded-full p-2">
//                 <ChevronRight />
//               </button>
//             </div>
