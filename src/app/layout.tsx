import Footer from "@/components/theme/footer";
import Header from "@/components/theme/header";
import "@/styles/globals.css";
import "aos/dist/aos.css";
// @ts-ignore
import Loader from "@/components/loader";
import InitAos from "@/components/theme/aos";
import { FloatingSocialButtons } from "@/components/ui";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import localFont from "next/font/local";
import type React from "react";

const notoSans = localFont({
  src: [
    { path: "../../public/font/font-1.woff2", weight: "400", style: "normal" },
    { path: "../../public/font/font-1.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
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
    keywords: ["LHF", "Công ty TNHH LHF", "株式会社LHF", "nail", "サロン"],
    authors: [{ name: "LHF" }],
    creator: t("title"),
    publisher: t("title"),
    openGraph: {
      type: "website",
      locale: "ja",
      url: "https://www.lhf.vn",
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [
        {
          url: "/logo.svg",
          width: 1200,
          height: 630,
          alt: "LHF",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: t("title"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
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
      className={`${notoSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <NextIntlClientProvider>
          <InitAos />
          <Loader />
          <Header />
          <main className="min-h-screen pb-16">{children}</main>
          <Footer />
          <FloatingSocialButtons />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
