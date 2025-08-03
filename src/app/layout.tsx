import Header from "@/components/theme/header";
import Footer from "@/components/theme/footer";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import type React from "react";
import InitAos from "@/components/theme/aos";
import { Metadata } from "next";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [{ url: "/favicon.png" }],
    },
    alternates: {
      languages: {
        vi: "/vi",
        ja: "/ja",
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${notoSerif.variable} ${notoSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-serif">
        <NextIntlClientProvider>
          <InitAos />
          <Header />
          <main className="min-h-screen pb-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
