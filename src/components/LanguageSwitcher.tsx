"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { startTransition } from "react";
import { Button } from "./ui";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const handleChangeLanguage = (newLocale: string) => {
    const locale = newLocale as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-primary"
      onClick={() => handleChangeLanguage(locale === "jp" ? "en" : "jp")}
    >
      <LanguagesIcon />
    </Button>
  );
}
