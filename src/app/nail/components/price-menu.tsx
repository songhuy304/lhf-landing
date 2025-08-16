import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gift } from "lucide-react";
import MenuImage from "@/styles/images/nail-page/bg_menu_nails.jpg";

const PriceMenu = () => {
  const t = useTranslations("NailPage");
  const promoT = useTranslations("NailPage.promotions");

  const promotions = [
    { icon: "📅", text: promoT("nextBooking") },
    { icon: "💳", text: promoT("pointCard") },
    { icon: "🥤", text: promoT("drinks") },
    { icon: "🛠️", text: promoT("repair") },
    { icon: "🎂", text: promoT("birthday") },
    { icon: "📝", text: promoT("review") },
    { icon: "🎓", text: promoT("student") },
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Badge
            variant="outline"
            className="mb-3 px-4 py-1.5 text-primary border-primary/30 bg-white/80 text-sm font-medium"
          >
            <Sparkles className="h-4 w-4 mr-1.5" />
            {t("menuTitle")}
          </Badge>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
            HIYU Beauty
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/70 to-primary rounded-full mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Menu Section - Direct Image */}
          <div
            className="md:col-span-2"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-gradient-to-r from-primary/80 to-primary py-4 px-6">
                <h3 className="text-white font-semibold text-xl flex items-center">
                  {t("priceList")}
                </h3>
              </div>

              <div className="p-4">
                <div className="relative w-full">
                  <Image
                    src={MenuImage}
                    alt="Nail Menu Price List"
                    width={1000}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 800px"
                    loading="lazy"
                    placeholder="blur"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Promotions Section */}
          <div
            className="md:col-span-1 h-fit"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-primary/20 h-full">
              <div className="bg-gradient-to-r from-primary/80 to-primary py-4 px-6">
                <h3 className="text-white font-semibold text-lg text-center">
                  {promoT("title")}
                </h3>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-1 gap-3">
                  {promotions.map((promo, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 rounded-lg bg-white/80 shadow-sm border border-primary/20 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 mr-3 p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors text-base">
                        {promo.icon}
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm">{promo.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceMenu;
