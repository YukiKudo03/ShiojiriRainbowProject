import Link from 'next/link'
import { MapPin, Clock, Yen, Phone, CheckCircle, XCircle } from 'lucide-react'
import { restaurants } from '@/data/sample-data'

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">グルメ情報</h1>
          <p className="text-gray-600">塩尻市の美味しいお店をご紹介します</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors">
              すべて
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              和食
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              洋食
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              中華
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              カフェ
            </button>
          </div>
          <p className="text-sm text-gray-500">{restaurants.length}件のお店</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🍽️</div>
                  <span className="text-sm font-medium">料理画像準備中</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{restaurant.genre}</p>
                  </div>
                  <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    {restaurant.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{restaurant.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="line-clamp-1">{restaurant.location.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Yen className="w-4 h-4 mr-2" />
                    <span>{restaurant.priceRange}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm">
                    {restaurant.reservationAvailable ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className="text-gray-600">
                      {restaurant.reservationAvailable ? '予約可能' : '予約不可'}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="w-4 h-4 mr-1" />
                    <span>{restaurant.phone}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/restaurants/${restaurant.id}`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                  {restaurant.reservationAvailable && (
                    <button className="border border-primary-600 text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors">
                      予約する
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
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