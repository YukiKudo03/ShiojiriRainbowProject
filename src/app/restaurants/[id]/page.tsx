import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Yen, Phone, CheckCircle, XCircle, ChevronLeft, Star } from 'lucide-react'
import { restaurants } from '@/data/sample-data'

interface RestaurantDetailPageProps {
  params: { id: string }
}

export default function RestaurantDetailPage({ params }: RestaurantDetailPageProps) {
  const restaurant = restaurants.find(r => r.id === params.id)
  
  if (!restaurant) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/restaurants"
            className="flex items-center text-primary-600 hover:text-primary-800 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            グルメ一覧に戻る
          </Link>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full">
              {restaurant.category}
            </span>
            <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
              {restaurant.genre}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="h-64 md:h-96 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🍽️</div>
                  <span className="text-lg font-medium">料理画像準備中</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">お店について</h2>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">4.0</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{restaurant.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">メニュー</h2>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">📋</div>
                <p className="text-gray-600">メニュー情報準備中</p>
                <p className="text-sm text-gray-500 mt-2">詳細なメニューはお店にお問い合わせください</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">アクセス・地図</h2>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-medium">住所</span>
                </div>
                <p className="text-gray-700">{restaurant.location.address}</p>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Google Maps準備中</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">基本情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">営業時間</p>
                    <p className="text-gray-600">{restaurant.hours}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Yen className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">価格帯</p>
                    <p className="text-gray-600">{restaurant.priceRange}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">電話番号</p>
                    <p className="text-gray-600">{restaurant.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  {restaurant.reservationAvailable ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">予約</p>
                    <p className="text-gray-600">
                      {restaurant.reservationAvailable ? '予約可能' : '予約不可'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {restaurant.reservationAvailable && (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-primary-800 mb-2">予約について</h3>
                <p className="text-primary-700 text-sm mb-4">
                  事前のご予約をおすすめします。お電話にてお問い合わせください。
                </p>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  電話で予約する
                </button>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">お店の特徴</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">地元食材使用</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">個室あり</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">駐車場完備</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">クレジットカード対応</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">その他のお店</h3>
              <div className="space-y-3">
                {restaurants
                  .filter(r => r.id !== restaurant.id)
                  .slice(0, 3)
                  .map((relatedRestaurant) => (
                    <Link
                      key={relatedRestaurant.id}
                      href={`/restaurants/${relatedRestaurant.id}`}
                      className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900">{relatedRestaurant.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {relatedRestaurant.genre} - {relatedRestaurant.priceRange}
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