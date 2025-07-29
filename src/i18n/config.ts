export type Locale = (typeof locales)[number];

export const locales = ["jp", "en"] as const;
export const defaultLocale: Locale = "jp";
