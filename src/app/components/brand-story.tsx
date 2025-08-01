import Image from "next/image";
import company from "@/styles/images/company.jpg";
import { TitleHeading } from "@/components/title-section";

export default function BrandStory() {
  return (
    <section id="about" className="pt-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <TitleHeading des="最新のトレンドと高品質な素材を使用した、プロフェッショナルなネイルサービスをご提供。">
          美しさと技術が出会い、
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/3] rounded-2xl overflow-hidden">
            <Image
              src={company}
              alt="プロフェッショナルなネイルサロン"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              確かな技術と豊富な経験で、
              <br />
              理想のネイルを実現
            </h3>
            <p className="text-gray-600 leading-relaxed">
              10年以上の経験を持つプロのネイリストが、お客様のご要望に合わせて
              丁寧にカウンセリングを行い、最適なデザインをご提案いたします。
            </p>
            <p className="text-gray-600 leading-relaxed">
              最新のトレンドを取り入れながらも、爪の健康を第一に考えた施術で、
              美しく長持ちするネイルアートをお楽しみいただけます。
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                <span className="text-gray-700">JNA認定ネイリスト在籍</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                <span className="text-gray-700">衛生管理徹底</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                <span className="text-gray-700">完全予約制でゆったり施術</span>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                会社情報
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">店舗名</h4>
                  <p className="text-gray-600">Nail Studio Fermy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">住所</h4>
                  <p className="text-gray-600">
                    〒150-0001 東京都渋谷区神宮前1-2-3
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">営業時間</h4>
                  <p className="text-gray-600">
                    10:00 - 20:00（最終受付19:00）
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">定休日</h4>
                  <p className="text-gray-600">毎週月曜日</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💅</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">豊富なデザイン</h4>
            <p className="text-gray-600">
              シンプルから華やかまで 幅広いデザインに対応
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">✨</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">高品質な材料</h4>
            <p className="text-gray-600">
              厳選された高品質な ネイル用品のみを使用
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🏆</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">確かな実績</h4>
            <p className="text-gray-600">
              多くのお客様から 高い評価をいただいています
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
