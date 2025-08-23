"use client";

import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactCountryFlag from "react-country-flag";

interface CharacteristicItem {
  title: string;
  description: string;
}

interface CountryData {
  name: string;
  nameJa: string;
  countryCode: string;
  characteristics: CharacteristicItem[];
}

export default function CountryCharacteristics() {
  const t = useTranslations("RecruitmentPage.countryCharacteristics");

  const vietnamData: CountryData = {
    name: t("vietnam.name"),
    nameJa: t("vietnam.nameJa"),
    countryCode: "VN",
    characteristics: [
      {
        title: t("vietnam.diligence"),
        description: t("vietnam.diligenceDesc"),
      },
      {
        title: t("vietnam.familyOrientation"),
        description: t("vietnam.familyOrientationDesc"),
      },
      {
        title: t("vietnam.respect"),
        description: t("vietnam.respectDesc"),
      },
      {
        title: t("vietnam.habits"),
        description: t("vietnam.habitsDesc"),
      },
      {
        title: t("vietnam.communication"),
        description: t("vietnam.communicationDesc"),
      },
    ],
  };

  const indonesiaData: CountryData = {
    name: t("vietnam.name"),
    nameJa: t("vietnam.nameJa"),
    countryCode: "ID",
    characteristics: [
      {
        title: t("indonesia.friendliness"),
        description: t("indonesia.friendlinessDesc"),
      },
      {
        title: t("indonesia.religion"),
        description: t("indonesia.religionDesc"),
      },
      {
        title: t("indonesia.patience"),
        description: t("indonesia.patienceDesc"),
      },
      {
        title: t("indonesia.habits"),
        description: t("indonesia.habitsDesc"),
      },
      {
        title: t("indonesia.communication"),
        description: t("indonesia.communicationDesc"),
      },
    ],
  };

  const renderCountryCard = (country: CountryData, isLeft: boolean) => (
    <div className="h-full relative">
      {/* Header with flag and country names */}
      <div className="text-center mb-8">
        <div className="mb-6 flex justify-center">
          <ReactCountryFlag
            countryCode={country.countryCode}
            svg
            style={{
              width: "100px",
              height: "75px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-white tracking-wide">
            {country.name}
          </h3>
          <p className="text-xl text-gray-300 font-serif">{country.nameJa}</p>
        </div>
      </div>

      {/* Characteristics list with improved styling */}
      <div className="space-y-6">
        {country.characteristics.map((item, index) => (
          <div key={index} className="relative">
            {/* Vertical orange line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400 rounded-full"></div>

            {/* Content container */}
            <div className="ml-6 pl-6 py-3">
              <h4 className="font-bold text-orange-400 mb-3 text-lg leading-tight">
                {item.title}
              </h4>
              <p className="text-gray-200 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <TitleHeading>{t("title")}</TitleHeading>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Vietnam Section */}
          <div className="relative">{renderCountryCard(vietnamData, true)}</div>

          {/* Indonesia Section */}
          <div className="relative">
            {renderCountryCard(indonesiaData, false)}
          </div>
        </div>
      </div>
    </section>
  );
}
