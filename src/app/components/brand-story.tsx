import Image from "next/image";
import company from "@/styles/images/company.jpg";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import {
  Award,
  Clock,
  Globe,
  MapPin,
  Building,
  CheckCircle,
} from "lucide-react";

export default function BrandStory() {
  const t = useTranslations("HomePage");
  return (
    <section id="about" className=" bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("brandStoryDes")}>
          {t("brandStoryTitle")}
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/3] rounded-2xl overflow-hidden">
            <Image
              src={company}
              alt="LHF Company"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              {t("brandStoryHeading")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("brandStoryContent")}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-700 h-5 w-5" />
                <span className="text-gray-700">{t("brandStoryPoint1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-700 h-5 w-5" />
                <span className="text-gray-700">{t("brandStoryPoint2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-700 h-5 w-5" />
                <span className="text-gray-700">{t("brandStoryPoint3")}</span>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-primary h-6 w-6" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("companyInfoTitle")}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("companyName")}
                    </h4>
                    <p className="text-gray-600">{t("companyNameValue")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("companyHours")}
                    </h4>
                    <p className="text-gray-600">{t("companyHoursValue")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("companyAddress")}
                    </h4>
                    <p className="text-gray-600">{t("companyAddressValue")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("companyWebsite")}
                    </h4>
                    <p className="text-gray-600">{t("companyWebsiteValue")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
