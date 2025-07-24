"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HotTrends() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const trendItems = [
    {
      title: "2024春夏トレンド",
      description: "パステルカラーで春らしく",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "ミニマルネイル",
      description: "シンプルで洗練されたデザイン",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "メタリックアクセント",
      description: "ゴールドやシルバーで華やかに",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "ネオンカラー",
      description: "夏にぴったりの鮮やかなカラー",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "マーブル模様",
      description: "大理石風の上品なデザイン",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "3Dアート",
      description: "立体的なアートで個性を演出",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(trendItems.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(trendItems.length / 3)) % Math.ceil(trendItems.length / 3))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">HOT TRENDS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">今話題のトレンドネイル</h2>
          <p className="text-gray-600 leading-relaxed">
            最新のトレンドを取り入れた人気のデザインをご紹介。 流行の先端を行くネイルアートで、あなたも注目の的に。
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(trendItems.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trendItems.slice(slideIndex * 3, slideIndex * 3 + 3).map((item, index) => (
                      <div key={index} className="text-center group">
                        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            HOT
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(trendItems.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-green-800" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
