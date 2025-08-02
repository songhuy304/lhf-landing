export type Locale = (typeof locales)[number];

export const locales = ["jp", "vi"] as const;
export const defaultLocale: Locale = "jp";
