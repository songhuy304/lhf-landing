"use client";

import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import Image from "next/image";
import sp1 from "@/styles/images/retail/sp1.jpg";
import chinsu from "@/styles/images/retail/chinsu.jpg";
import { StaticImageData } from "next/image";
// Define product type
interface Product {
  id: string;
  title: string;
  image: StaticImageData;
  isHot?: boolean;
  price: number;
}

// Sample products data

export default function NailGallery() {
  const t = useTranslations("RetailPage");

  const products: Product[] = [
    {
      id: "1",
      title: t("sp1"),
      image: sp1,
      price: 20,
      isHot: true,
    },
    {
      id: "2",
      title: t("sp2"),
      image: chinsu,
      price: 30,
    },
    {
      id: "3",
      title: t("sp3"),
      image: sp1,
      price: 25,
      isHot: true,
    },
    {
      id: "4",
      title: t("sp4"),
      image: sp1,
      price: 30,
    },
    {
      id: "5",
      title: t("sp5"),
      image: sp1,
      price: 25,
    },

    {
      id: "6",
      title: t("sp6"),
      image: sp1,
      price: 11,
    },
  ];

  return (
    <section className="pt-24 bg-white">
      <div className="container mx-auto px-4">
        <TitleHeading subTitle={t("productSubTitle")} des={t("productListDes")}>
          {t("productListTitle")}
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <CardItem key={product.id} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardItemProps {
  item: {
    title: string;
    image: StaticImageData;
    isHot?: boolean;
    price: number;
  };
}

const CardItem = ({ item }: CardItemProps) => {
  const commonT = useTranslations("NailPage");

  return (
    <div className="text-center group">
      <div className="relative w-full h-64 mb-4 overflow-hidden shadow-lg rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {item.isHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {commonT("hotTrend")}
          </div>
        )}
      </div>
      <p className="text-primary font-medium text-lg text-left">
        ￥{item.price.toLocaleString("ja-JP")}
      </p>
      <h3 className="mt-1 text-sm text-left">{item.title}</h3>
    </div>
  );
};
