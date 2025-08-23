"use client";

import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui/button";
import { FacebookIcon, HotPepperIcon, LineIcon } from "@/components/ui/icon";
import { ContactInfo } from "@/data";
import BookingImage from "@/styles/images/nail-page/logo_hyu.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Booking() {
  const t = useTranslations("NailPage");
  const commonT = useTranslations("Root");
  return (
    <section className="py-24">
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
                    className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white flex items-center justify-center gap-3"
                    onClick={() =>
                      window.open(ContactInfo.facebookUrl, "_blank")
                    }
                  >
                    <FacebookIcon size={20} />
                    Facebook
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white flex items-center justify-center gap-3 bg-transparent"
                    onClick={() =>
                      window.open(ContactInfo.hotpepperUrl, "_blank")
                    }
                  >
                    <HotPepperIcon size={20} />
                    Hot Pepper Beauty
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white flex items-center justify-center gap-3 bg-transparent"
                    onClick={() => window.open(ContactInfo.lineUrl, "_blank")}
                  >
                    <LineIcon size={20} className="fill-current" />
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
                <div className="absolute top-4 right-4 bg-primary text-white font-bold py-2 px-4 rounded-full text-sm">
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
