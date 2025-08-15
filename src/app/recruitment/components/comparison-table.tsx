"use client";

import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import ImageComparison from "@/styles/images/recruitment/compare.png";

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

        {/* Thêm hình ảnh so sánh */}
        <div className="flex justify-center mb-8">
          <img
            src={ImageComparison.src}
            alt={t("comparison.title")}
            className="max-w-full aspect-[10/4] h-auto rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>

        <div
          className="overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>{t("comparison.category")}</TableHead>
                <TableHead>{t("comparison.technicalTrainingSystem")}</TableHead>
                <TableHead>{t("comparison.developmentLaborSystem")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-center">{row.id}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.technicalTraining}</TableCell>
                  <TableCell>{row.developmentLabor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
