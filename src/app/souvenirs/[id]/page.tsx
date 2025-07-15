import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Yen, ShoppingBag, Gift, ChevronLeft, Star, ExternalLink } from 'lucide-react'
import { souvenirs } from '@/data/sample-data'

interface SouvenirDetailPageProps {
  params: { id: string }
}

export default function SouvenirDetailPage({ params }: SouvenirDetailPageProps) {
  const souvenir = souvenirs.find(s => s.id === params.id)
  
  if (!souvenir) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/souvenirs"
            className="flex items-center text-primary-600 hover:text-primary-800 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            お土産一覧に戻る
          </Link>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full">
              {souvenir.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{souvenir.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="h-64 md:h-96 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <Gift className="w-16 h-16 mx-auto mb-4" />
                  <span className="text-lg font-medium">商品画像準備中</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">商品について</h2>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm text-gray-600">5.0</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{souvenir.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">商品の特徴</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">地元産原料使用</h3>
                    <p className="text-gray-600">塩尻市産の厳選された原料を使用</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">伝統的製法</h3>
                    <p className="text-gray-600">昔ながらの製法で丁寧に作られています</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">お土産に最適</h3>
                    <p className="text-gray-600">塩尻市の思い出にぴったりの商品です</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">購入方法</h2>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <ShoppingBag className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-medium">取扱店舗</span>
                </div>
                <p className="text-gray-700 mb-4">{souvenir.store}</p>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    店舗で購入
                  </button>
                  <button className="flex-1 border border-primary-600 text-primary-600 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                    オンラインで購入
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">商品情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Yen className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">価格</p>
                    <p className="text-gray-600">{souvenir.price}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShoppingBag className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">取扱店</p>
                    <p className="text-gray-600">{souvenir.store}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">カテゴリ</p>
                    <p className="text-gray-600">{souvenir.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-primary-800 mb-2">配送について</h3>
              <p className="text-primary-700 text-sm mb-4">
                全国発送承ります。お気軽にお問い合わせください。
              </p>
              <div className="space-y-2 text-sm text-primary-700">
                <div className="flex justify-between">
                  <span>配送料:</span>
                  <span>全国一律500円</span>
                </div>
                <div className="flex justify-between">
                  <span>お届け:</span>
                  <span>3-5営業日</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">おすすめの使い方</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">贈り物に</h4>
                  <p className="text-sm text-gray-600">大切な方への特別な贈り物として</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">記念品に</h4>
                  <p className="text-sm text-gray-600">塩尻市観光の思い出として</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">自分用に</h4>
                  <p className="text-sm text-gray-600">ご自宅でお楽しみください</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">関連商品</h3>
              <div className="space-y-3">
                {souvenirs
                  .filter(s => s.id !== souvenir.id)
                  .slice(0, 3)
                  .map((relatedSouvenir) => (
                    <Link
                      key={relatedSouvenir.id}
                      href={`/souvenirs/${relatedSouvenir.id}`}
                      className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900">{relatedSouvenir.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {relatedSouvenir.category} - {relatedSouvenir.price}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}