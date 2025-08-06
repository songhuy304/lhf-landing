import { TitleHeading } from "@/components/title-section";
import { Text } from "@/components/ui";
import { useTranslations } from "next-intl";
import { CheckCircle, FileText, Users, Award } from "lucide-react";

export default function About() {
  const t = useTranslations("RecruitmentPage");
  return (
    <section id="about-recruitment" className="relative overflow-hidden py-24">
      <div className="max-w-3xl mx-auto px-4">
        <TitleHeading subTitle={t("aboutSubTitle")} des={t("aboutDes")}>
          {t("aboutTitle")}
        </TitleHeading>
        <Text weight={"medium"} size={"lg"} className="max-w-lg mb-10">
          {t("aboutContent")}
        </Text>

        <div className="space-y-6 relative">
          {/* Step 1 - Left */}
          <div className="relative flex items-start group space-x-6">
            <div className="size-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-300">
              <FileText className="text-primary h-7 w-7" />
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-md border border-gray-100 flex-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-2">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </div>
                <h3 className="font-semibold text-lg">Nhập hồ sơ</h3>
              </div>
              <p className="text-gray-600 pl-11">
                Ứng viên hoàn thành hồ sơ với đầy đủ thông tin cá nhân và kinh
                nghiệm làm việc
              </p>
            </div>
            <div className="w-16 hidden md:block"></div>{" "}
            {/* Spacer for alignment */}
          </div>
        </div>
      </div>
    </section>
  );
}
