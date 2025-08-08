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
import { Button } from "@/components/ui";

export default function NailGallery() {
  const t = useTranslations("NailPage");

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

  const carouselOptions = {
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
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("galleryDes")}>{t("galleryTitle")}</TitleHeading>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("nailAlbum")}
          </h3>
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <Carousel
              showNavigation={true}
              showPagination={true}
              swiperOptions={carouselOptions}
            >
              {completedItems.map((item, index) => (
                <CardItem key={`completed-${item.id}-${index}`} item={item} />
              ))}
            </Carousel>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("hotTrend")}
          </h3>
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <Carousel
              showNavigation={true}
              showPagination={true}
              swiperOptions={carouselOptions}
            >
              {hotTrendItems.map((item, index) => (
                <CardItem key={`hottrend-${item.id}-${index}`} item={item} />
              ))}
            </Carousel>
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
