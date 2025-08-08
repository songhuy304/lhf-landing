"use client";

import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";

interface ComparisonRow {
  id: number;
  category: string;
  technicalTraining: string;
  developmentLabor: string;
}

export default function ComparisonTable() {
  const t = useTranslations("RecruitmentPage");

  const comparisonData: ComparisonRow[] = [
    {
      id: 1,
      category: t("comparison.purpose"),
      technicalTraining: t("comparison.technicalTraining.purpose"),
      developmentLabor: t("comparison.developmentLabor.purpose"),
    },
    {
      id: 2,
      category: t("comparison.eligibility"),
      technicalTraining: t("comparison.technicalTraining.eligibility"),
      developmentLabor: t("comparison.developmentLabor.eligibility"),
    },
    {
      id: 3,
      category: t("comparison.transferConditions"),
      technicalTraining: t("comparison.technicalTraining.transferConditions"),
      developmentLabor: t("comparison.developmentLabor.transferConditions"),
    },
    {
      id: 4,
      category: t("comparison.jobChange"),
      technicalTraining: t("comparison.technicalTraining.jobChange"),
      developmentLabor: t("comparison.developmentLabor.jobChange"),
    },
    {
      id: 5,
      category: t("comparison.japaneseAbility"),
      technicalTraining: t("comparison.technicalTraining.japaneseAbility"),
      developmentLabor: t("comparison.developmentLabor.japaneseAbility"),
    },
    {
      id: 6,
      category: t("comparison.trainingContent"),
      technicalTraining: t("comparison.technicalTraining.trainingContent"),
      developmentLabor: t("comparison.developmentLabor.trainingContent"),
    },
    {
      id: 7,
      category: t("comparison.comingCost"),
      technicalTraining: t("comparison.technicalTraining.comingCost"),
      developmentLabor: t("comparison.developmentLabor.comingCost"),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <TitleHeading>{t("comparison.title")}</TitleHeading>

        <div
          className="overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4 border text-center w-[10%]">No</th>
                <th className="py-3 px-4 border text-center w-[20%]">
                  {t("comparison.category")}
                </th>
                <th className="py-3 px-4 border text-center w-[35%]">
                  {t("comparison.technicalTrainingSystem")}
                </th>
                <th className="py-3 px-4 border text-center w-[35%]">
                  {t("comparison.developmentLaborSystem")}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr
                  key={row.id}
                  className={row.id % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-3 px-4 border text-center">{row.id}</td>
                  <td className="py-3 px-4 border">{row.category}</td>
                  <td className="py-3 px-4 border">{row.technicalTraining}</td>
                  <td className="py-3 px-4 border">{row.developmentLabor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
