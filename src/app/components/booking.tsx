"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Smartphone } from "lucide-react";
import Image from "next/image";
import BookingImage from "@/styles/images/nail-banner.webp";

export default function Booking() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-800 font-medium tracking-wider">
              BOOKING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              ご予約・お問い合わせ
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              お気軽にお問い合わせください。各種SNSからもご予約を承っております。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  ご予約方法
                </h3>
                <p className="text-gray-600 mb-8">
                  下記のいずれかの方法でお気軽にご連絡ください。
                  24時間以内にお返事いたします。
                </p>

                <div className="space-y-4 mb-8">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-3"
                    onClick={() =>
                      window.open("https://m.me/your-page", "_blank")
                    }
                  >
                    <MessageCircle className="h-5 w-5" />
                    Messenger で予約
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center gap-3 bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://instagram.com/your-account",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram で予約
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center gap-3 bg-transparent"
                    onClick={() =>
                      window.open("https://line.me/ti/p/your-line-id", "_blank")
                    }
                  >
                    <Smartphone className="h-5 w-5" />
                    LINE で予約
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">営業時間</h4>
                  <p className="text-gray-600 text-sm">
                    10:00 - 20:00（最終受付19:00）
                  </p>
                  <p className="text-gray-600 text-sm">定休日：毎週月曜日</p>
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
                <div className="absolute top-4 right-4 bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm">
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
