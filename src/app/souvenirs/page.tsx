import Link from 'next/link'
import { MapPin, Yen, ShoppingBag, Gift } from 'lucide-react'
import { souvenirs } from '@/data/sample-data'

export default function SouvenirsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">お土産情報</h1>
          <p className="text-gray-600">塩尻市の特産品とお土産をご紹介します</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors">
              すべて
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              お酒
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              食品
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              調味料
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              工芸品
            </button>
          </div>
          <p className="text-sm text-gray-500">{souvenirs.length}件のお土産</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {souvenirs.map((souvenir) => (
            <div key={souvenir.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <Gift className="w-12 h-12 mx-auto mb-2" />
                  <span className="text-sm font-medium">商品画像準備中</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{souvenir.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      <span>{souvenir.store}</span>
                    </div>
                  </div>
                  <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    {souvenir.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{souvenir.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Yen className="w-4 h-4 mr-1" />
                    <span className="font-medium text-primary-600">{souvenir.price}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/souvenirs/${souvenir.id}`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <button className="border border-primary-600 text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors">
                    購入先を見る
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">塩尻市の特産品</h2>
            <p className="text-gray-600 mb-6">
              塩尻市は豊かな自然に恵まれ、美味しいワインや農産物で有名です。
              地元の生産者が丁寧に作り上げた特産品をぜひお楽しみください。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🍷</div>
                <h3 className="font-semibold text-gray-900">塩尻ワイン</h3>
                <p className="text-sm text-gray-600">桔梗ヶ原の恵みから生まれる上質なワイン</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌾</div>
                <h3 className="font-semibold text-gray-900">信州味噌</h3>
                <p className="text-sm text-gray-600">伝統的な製法で作られた深い味わい</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🍎</div>
                <h3 className="font-semibold text-gray-900">りんご製品</h3>
                <p className="text-sm text-gray-600">信州産りんごを使った加工品</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            さらに読み込む
          </button>
        </div>
      </div>
    </div>
  )
}