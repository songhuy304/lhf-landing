"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Smartphone } from "lucide-react";
import Image from "next/image";
import BookingImage from "@/styles/images/nail-banner.webp";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { ContactInfo } from "@/data";

export default function Booking() {
  const t = useTranslations("NailPage");
  const commonT = useTranslations("Root");
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TitleHeading des={t("bookingDes")} subTitle={t("bookingSubTitle")}>
            {t("bookingTitle")}
          </TitleHeading>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("bookingMethod")}
                </h3>
                <p className="text-gray-600 mb-8">{t("bookingMethodDes")}</p>

                <div className="space-y-4 mb-8">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-3"
                    onClick={() =>
                      window.open("https://m.me/your-page", "_blank")
                    }
                  >
                    <MessageCircle className="h-5 w-5" />
                    Messenger
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center gap-3 bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://instagram.com/your-account",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center gap-3 bg-transparent"
                    onClick={() =>
                      window.open("https://line.me/ti/p/your-line-id", "_blank")
                    }
                  >
                    <Smartphone className="h-5 w-5" />
                    LINE
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={BookingImage}
                  alt="ネイルサロン予約"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 right-4 bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm">
                  24時間受付
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
