import Header from "@/components/theme/header";
import Footer from "@/components/theme/footer";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import type React from "react";

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
          <Header />
          <main className="min-h-screen pb-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
