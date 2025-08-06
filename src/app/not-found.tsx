"use client";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("Root");
  const router = useRouter();
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            {t("notFound.title")}
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {t("notFound.description")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button onClick={() => router.push("/")}>
              {t("notFound.button")}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
