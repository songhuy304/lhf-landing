import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NailIntro() {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-[#FAF6F3]">
      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium tracking-wider text-sm">
                プロフェッショナルネイルアート
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              <span className="block">あなたの指先に、</span>
              <span className="block text-primary">美しさと個性を</span>
              <span className="block">込めて。</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              経験豊富なプロのネイリストが、お客様一人ひとりのライフスタイルや
              お好みに合わせて、オリジナルのネイルアートをお作りします。
              <span className="block mt-2">
                シンプルなオフィスネイルから華やかなパーティーネイルまで、
                幅広いデザインでお客様の美しさを引き出します。
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
              >
                ギャラリーを見る
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                予約する
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Beautiful Nail Art"
                fill
                className="object-contain transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
