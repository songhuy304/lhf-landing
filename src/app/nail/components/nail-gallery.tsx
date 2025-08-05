"use client";

import Image from "next/image";
import { Carousel } from "@/components/carousel";
import img1 from "@/styles/images/img2.webp";
import img2 from "@/styles/images/img3.webp";
import img3 from "@/styles/images/img5.webp";
import img4 from "@/styles/images/img7.jpg";
import img5 from "@/styles/images/img8.jpg";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui";

export default function NailGallery() {
  const t = useTranslations("NailPage");
  const [activeTab, setActiveTab] = useState("completed");

  const completedItems = [
    {
      title: "エレガントフレンチ",
      description: "クラシックなフレンチネイルに上品なアクセント",
      image: img1,
    },
    {
      title: "フラワーアート",
      description: "繊細な花柄で女性らしさを演出",
      image: img2,
    },
    {
      title: "グラデーション",
      description: "美しいグラデーションで指先を華やかに",
      image: img3,
    },
    {
      title: "ジュエリーネイル",
      description: "ストーンやパールで豪華な仕上がり",
      image: img4,
    },
    {
      title: "シンプルオフィス",
      description: "お仕事にも使えるシンプルで上品なデザイン",
      image: img5,
    },
    {
      title: "アートネイル",
      description: "個性的なアートで自分らしさを表現",
      image: img1,
    },
  ];

  const hotTrendItems = [
    {
      title: "アートネイル",
      description: "個性的なアートで自分らしさを表現",
      image: img1,
      isHot: true,
    },
    {
      title: "アートネイル",
      description: "個性的なアートで自分らしさを表現",
      image: img2,
      isHot: true,
    },
    {
      title: "アートネイル",
      description: "個性的なアートで自分らしさを表現",
      image: img3,
      isHot: true,
    },
    {
      title: "アートネイル",
      description: "個性的なアートで自分らしさを表現",
      image: img4,
      isHot: true,
    },
    {
      title: "アートネイル",
      description: "個性的なアートで自分らしさを表現",
      image: img5,
      isHot: true,
    },
  ];

  const galleryItems =
    activeTab === "completed" ? completedItems : hotTrendItems;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("galleryDes")}>{t("galleryTitle")}</TitleHeading>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
              variant={activeTab === "completed" ? "default" : "outline"}
              className={`rounded-r-none ${
                activeTab === "completed" ? "" : "text-gray-900"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              {t("nailAlbum")}
            </Button>
            <Button
              variant={activeTab === "hottrend" ? "default" : "outline"}
              className={`rounded-l-none ${
                activeTab === "hottrend" ? "" : "text-gray-900"
              }`}
              onClick={() => setActiveTab("hottrend")}
            >
              {t("hotTrend")}
            </Button>
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            showNavigation={true}
            showPagination={true}
            swiperOptions={{
              spaceBetween: 24,
              loop: true,
              speed: 1000,
              autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              },
              breakpoints: {
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 1 },
                1024: { slidesPerView: 5, slidesPerGroup: 1 },
              },
            }}
          >
            {galleryItems.map((item, index) => (
              <CardItem key={item.title} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface CardItemProps {
  item: {
    title: string;
    description: string;
    image: any;
    isHot?: boolean;
  };
}

const CardItem = ({ item }: CardItemProps) => {
  return (
    <div className="text-center group">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {item.isHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            HOT
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};
