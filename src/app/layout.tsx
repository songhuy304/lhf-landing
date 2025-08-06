import Header from "@/components/theme/header";
import Footer from "@/components/theme/footer";
import "@/styles/globals.css";
import "aos/dist/aos.css";
// @ts-ignore
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import type React from "react";
import InitAos from "@/components/theme/aos";
import { Metadata } from "next";
import Loader from "@/components/loader";
import { Suspense } from "react";

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
    keywords: ["LHF", "React", "TypeScript", "Tailwind CSS"],
    authors: [{ name: "LHF" }],
    creator: "LHF",
    openGraph: {
      type: "website",
      locale: "ja",
      url: "https://your-domain.com",
      title: "Next.js Boilerplate",
      description: "A comprehensive Next.js boilerplate with modern tooling",
      siteName: "Next.js Boilerplate",
    },
    twitter: {
      card: "summary_large_image",
      title: "Next.js Boilerplate",
      description: "A comprehensive Next.js boilerplate with modern tooling",
      creator: "@LHF",
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
      className={`${notoSerif.variable} ${notoSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-serif">
        <NextIntlClientProvider>
          <InitAos />
          <Loader />
          <Header />
          <main className="min-h-screen pb-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
