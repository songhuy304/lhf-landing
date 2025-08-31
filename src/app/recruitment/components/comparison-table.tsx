"use client";

import { TitleHeading } from "@/components/title-section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <TitleHeading className="max-w-2xl">
          {t("comparison.title")}
        </TitleHeading>

        <div data-aos="fade-up" data-aos-delay="300">
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
                  <TableCell className="text-center whitespace-normal break-words">
                    {row.id}
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    {row.category}
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    {row.technicalTraining}
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    {row.developmentLabor}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
