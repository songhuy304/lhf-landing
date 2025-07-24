"use client";

import Image from "next/image";
import { Carousel } from "@/components/carousel";
import img1 from "@/styles/images/img2.webp";
import img2 from "@/styles/images/img3.webp";
import img3 from "@/styles/images/img5.webp";
import img4 from "@/styles/images/img7.jpg";
import img5 from "@/styles/images/img8.jpg";

export default function HotTrends() {
  const trendItems = [
    {
      title: "2024春夏トレンド",
      description: "パステルカラーで春らしく",
      image: img1,
    },
    {
      title: "ミニマルネイル",
      description: "シンプルで洗練されたデザイン",
      image: img2,
    },
    {
      title: "メタリックアクセント",
      description: "ゴールドやシルバーで華やかに",
      image: img3,
    },
    {
      title: "ネオンカラー",
      description: "夏にぴったりの鮮やかなカラー",
      image: img4,
    },
    {
      title: "マーブル模様",
      description: "大理石風の上品なデザイン",
      image: img5,
    },
    {
      title: "3Dアート",
      description: "立体的なアートで個性を演出",
      image: img1,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">
            HOT TRENDS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            今話題のトレンドネイル
          </h2>
        </div>

        <div className="relative">
          <Carousel
            showNavigation={true}
            showPagination={true}
            swiperOptions={{
              spaceBetween: 24,
              loop: true,
              speed: 1000,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              breakpoints: {
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 2 },
              },
            }}
          >
            {trendItems.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    HOT
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
