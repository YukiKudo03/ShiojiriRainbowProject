import Link from 'next/link'
import { MapPin, Clock, Yen, ExternalLink } from 'lucide-react'
import { touristSpots } from '@/data/sample-data'

export default function TouristSpotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">観光スポット</h1>
          <p className="text-gray-600">塩尻市の魅力的な観光スポットをご紹介します</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors">
              すべて
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              文化施設
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              歴史遺跡
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              自然
            </button>
          </div>
          <p className="text-sm text-gray-500">{touristSpots.length}件の観光スポット</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {touristSpots.map((spot) => (
            <div key={spot.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">画像準備中</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{spot.name}</h3>
                  <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full">
                    {spot.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{spot.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="line-clamp-1">{spot.location.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{spot.hours}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Yen className="w-4 h-4 mr-2" />
                    <span>{spot.price}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/tourist-spots/${spot.id}`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
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