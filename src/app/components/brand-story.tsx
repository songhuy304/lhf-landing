import { TitleHeading } from "@/components/title-section";
import { ContactInfo } from "@/data";
import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Globe,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function BrandStory() {
  const t = useTranslations("HomePage");
  const metaT = useTranslations("Meta");
  const locationT = useTranslations("Location");
  return (
    <section id="Brand" className="bg-gray-50 relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("brandStoryDes")}>LHF</TitleHeading>

        <div className="flex md:flex-row flex-col">
          {/* Overview Section */}
          <div
            className="mb-8 md:mb-0 w-full md:w-1/2 md:pr-12"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {t("brandStoryHeading")}
              </h3>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("brandStoryContent")}
              </p>

              <div className="space-y-4 mt-8">
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
            </div>
          </div>

          {/* Company Info Section */}
          <div
            className="md:border-l md:pl-12 border-gray-200 w-full md:w-1/2"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-primary h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t("companyInfoTitle")}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-3">
                <Building className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {metaT("nameCompany")}
                  </h4>
                  <p className="text-gray-600">{metaT("title")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("contactInfo")}
                  </h4>
                  <p className="text-gray-600">
                    {t("phoneNumber")}: {ContactInfo.phone}
                    <br />
                    {t("emailAddress")}: {ContactInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("companyAddress")}
                  </h4>
                  <p className="text-gray-600">
                    {locationT("officePostal")}
                    <br />
                    {locationT("officeAddress")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("companyWebsite")}
                  </h4>
                  <p className="text-gray-600">{ContactInfo.website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/about"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-all"
          >
            <span>{t("readMore")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
