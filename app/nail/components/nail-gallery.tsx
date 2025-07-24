"use client";

import Image from "next/image";
import { Carousel } from "@/components/carousel";
import img1 from "@/styles/images/img2.webp";
import img2 from "@/styles/images/img3.webp";
import img3 from "@/styles/images/img5.webp";
import img4 from "@/styles/images/img7.jpg";
import img5 from "@/styles/images/img8.jpg";

export default function NailGallery() {
  const galleryItems = [
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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">
            GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            これまでの作品集
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
            {galleryItems.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
