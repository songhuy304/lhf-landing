"use client";

import { useState } from "react";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import Image from "next/image";
import sp1 from "@/styles/images/retail/sp1.jpg";
import sp2 from "@/styles/images/retail/baron-nuong.jpg";
import sp3 from "@/styles/images/retail/bim-mix-cay.jpg";
import sp4 from "@/styles/images/retail/tam-thaitu.jpg";
import sp5 from "@/styles/images/retail/caphe.jpg";
import sp6 from "@/styles/images/retail/barona-nuong-muoi-ot-vietmart-sieu-thi-viet-nam-tai-nhat-ban-247x247.jpg";
import { StaticImageData } from "next/image";
import { Text } from "@/components/ui";
import ProductSidebar from "./product-sidebar";

// Define product type
interface Product {
  id: string;
  title: string;
  image: StaticImageData;
  isHot?: boolean;
  price: number;
  category?: string;
}

// Define price range type
interface PriceRange {
  min: number;
  max: number;
}

export default function NailGallery() {
  const t = useTranslations("RetailPage");

  const allProducts: Product[] = [
    {
      id: "1",
      title: t("productList.sp1"),
      image: sp1,
      price: 20,
      isHot: true,
      category: "food",
    },
    {
      id: "2",
      title: t("productList.sp2"),
      image: sp2,
      price: 30,
      category: "food",
    },
    {
      id: "3",
      title: t("productList.sp3"),
      image: sp3,
      price: 25,
      isHot: true,
      category: "snack",
    },
    {
      id: "4",
      title: t("productList.sp4"),
      image: sp4,
      price: 30,
      category: "spice",
    },
    {
      id: "5",
      title: t("productList.sp5"),
      image: sp5,
      price: 25,
      category: "drink",
    },
    {
      id: "8",
      title: t("productList.sp2"),
      image: sp2,
      price: 30,
      category: "food",
    },
    {
      id: "6",
      title: t("productList.sp6"),
      image: sp6,
      price: 11,
      category: "instant",
    },
    {
      id: "7",
      title: t("productList.sp1"),
      image: sp1,
      price: 20,
      isHot: true,
      category: "food",
    },
    {
      id: "9",
      title: t("productList.sp3"),
      image: sp3,
      price: 25,
      isHot: true,
      category: "snack",
    },
    {
      id: "10",
      title: t("productList.sp4"),
      image: sp4,
      price: 30,
      category: "spice",
    },
    {
      id: "12",
      title: t("productList.sp6"),
      image: sp6,
      price: 60,
      category: "instant",
    },
    {
      id: "11",
      title: t("productList.sp5"),
      image: sp5,
      price: 25,
      category: "drink",
    },
  ];

  // State for filtered products
  const [products, setProducts] = useState<Product[]>(allProducts);

  // Handle category filter change
  const handleCategoryChange = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) =>
          product.category && selectedCategories.includes(product.category)
      );
      setProducts(filtered);
    }
  };

  // Handle price filter change
  const handlePriceChange = (range: PriceRange) => {
    const filtered = allProducts.filter(
      (product) => product.price >= range.min && product.price <= range.max
    );
    setProducts(filtered);
  };

  return (
    <section className="pt-24 bg-white">
      <div className="container mx-auto px-4">
        <TitleHeading subTitle={t("productSubTitle")} des={t("productListDes")}>
          {t("productListTitle")}
        </TitleHeading>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <ProductSidebar
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
            />
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {products.map((product) => (
                <CardItem key={product.id} item={product} />
              ))}
            </div>
          </div>
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
  return (
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
      <div className="relative m-2.5 overflow-hidden text-white rounded-md aspect-square md:aspect-auto md:h-56">
        <Image
          src={item.image}
          alt="card-image"
          fill
          className="object-contain sm:object-cover"
        />
      </div>
      <div className="p-4 flex flex-col">
        <Text className="text-lg text-primary font-semibold">
          ￥{item.price}
        </Text>
        <Text className="text-sm">{item.title}</Text>
      </div>
    </div>
  );
};
