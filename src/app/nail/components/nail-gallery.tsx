"use client";

import { TitleHeading } from "@/components/title-section";
import img1 from "@/styles/images/img2.webp";
import img2 from "@/styles/images/img3.webp";
import img3 from "@/styles/images/img5.webp";
import img4 from "@/styles/images/img7.jpg";
import img5 from "@/styles/images/img8.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useState } from "react";
import { TabTransition } from "@/components/animation/tab-animation";
import { cn } from "@/lib/utils";

export default function NailGallery() {
  const t = useTranslations("NailPage");
  const [activeTab, setActiveTab] = useState<"completed" | "hottrend">(
    "completed"
  );

  const handleTabChange = (tab: "completed" | "hottrend") => {
    setActiveTab(tab);
  };

  const completedItems = [
    {
      id: "elegantFrench",
      image: img1,
    },
    {
      id: "flowerArt",
      image: img2,
    },
    {
      id: "gradient",
      image: img3,
    },
    {
      id: "jewelryNail",
      image: img4,
    },
    {
      id: "simpleOffice",
      image: img5,
    },
    {
      id: "artNail",
      image: img1,
    },
  ];

  const hotTrendItems = [
    {
      id: "artNail",
      image: img1,
      isHot: true,
    },
    {
      id: "artNail",
      image: img2,
      isHot: true,
    },
    {
      id: "artNail",
      image: img3,
      isHot: true,
    },
    {
      id: "artNail",
      image: img4,
      isHot: true,
    },
    {
      id: "artNail",
      image: img5,
      isHot: true,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("galleryDes")}>{t("galleryTitle")}</TitleHeading>

        <div className="mt-10">
          <div
            className="flex justify-center gap-4 mb-8 flex-wrap"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <TabButton
              isActive={activeTab === "completed"}
              onClick={() => handleTabChange("completed")}
            >
              {t("nailAlbum")}
            </TabButton>
            <TabButton
              isActive={activeTab === "hottrend"}
              onClick={() => handleTabChange("hottrend")}
            >
              {t("hotTrend")}
            </TabButton>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <TabTransition activeTab={activeTab}>
              <div>
                {activeTab === "completed" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {completedItems.map((item, index) => (
                      <CardItem
                        key={`completed-${item.id}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                )}
                {activeTab === "hottrend" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {hotTrendItems.map((item, index) => (
                      <CardItem
                        key={`hottrend-${item.id}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                )}
              </div>
            </TabTransition>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardItemProps {
  item: {
    id: string;
    image: any;
    isHot?: boolean;
  };
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={cn(
        "px-6 transition-all border border-transparent",
        isActive ? "border-primary" : "border-gray-300"
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const CardItem = ({ item }: CardItemProps) => {
  const t = useTranslations("NailPage");
  const itemT = useTranslations("NailPage.galleryItems");

  return (
    <div className="text-center group">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={item.image}
          alt={itemT(`${item.id}.title`)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {item.isHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {t("hotTrend")}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {itemT(`${item.id}.title`)}
      </h3>
      <p className="text-gray-600">{itemT(`${item.id}.description`)}</p>
    </div>
  );
};
