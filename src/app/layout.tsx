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
import { Noto_Sans_JP, Hind } from "next/font/google";
import type React from "react";
import InitAos from "@/components/theme/aos";
import { Metadata } from "next";
import Loader from "@/components/loader";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans-jp",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
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
    keywords: ["LHF"],
    authors: [{ name: "LHF" }],
    creator: "LHF",
    openGraph: {
      type: "website",
      locale: "ja",
      url: "https://your-domain.com",
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
      className={`${notoSans.variable} ${hind.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
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
