"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Banner from "@/styles/images/nail-banner.webp";
import { useTranslations } from "next-intl";

export default function FirstView() {
  const t = useTranslations("FirstView");

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-[#FAF6F3]">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium tracking-wider text-sm">
                {t("professional")}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              <span className="block">{t("title1")}</span>
              <span className="text-primary block">{t("title2")}</span>
              <span className="block">{t("title3")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              {t("description1")}
              <span className="block mt-2">{t("description2")}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
              >
                {t("book")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full"
              >
                {t("viewDesigns")}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-gray-600 leading-snug">
                  {t("designs")}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-gray-600 leading-snug">
                  {t("experience")}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-gray-600 leading-snug">
                  {t("satisfaction")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src={Banner}
                alt="Nail Art Sample"
                fill
                className="object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />

            {/* Product badges */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-primary font-medium">
                {t("trendDesign")}
              </span>
            </div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-primary font-medium">
                {t("highQuality")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600">{t("scroll")}</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
