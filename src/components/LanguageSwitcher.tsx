"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { useLocale } from "next-intl";
import { startTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const handleChangeLanguage = (newLocale: string) => {
    const locale = newLocale as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleChangeLanguage("jp")}
        className={`px-2 py-1 rounded ${
          locale === "jp" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => handleChangeLanguage("en")}
        className={`px-2 py-1 rounded ${
          locale === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        English
      </button>
    </div>
  );
}
