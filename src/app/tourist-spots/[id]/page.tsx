import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Yen, ExternalLink, ChevronLeft, Navigation } from 'lucide-react'
import { touristSpots } from '@/data/sample-data'

interface TouristSpotDetailPageProps {
  params: { id: string }
}

export default function TouristSpotDetailPage({ params }: TouristSpotDetailPageProps) {
  const spot = touristSpots.find(s => s.id === params.id)
  
  if (!spot) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/tourist-spots"
            className="flex items-center text-primary-600 hover:text-primary-800 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            観光スポット一覧に戻る
          </Link>
          <div className="flex items-center space-x-2">
            <span className="bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full">
              {spot.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{spot.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">画像準備中</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">概要</h2>
                <p className="text-gray-700 leading-relaxed">{spot.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">アクセス</h2>
              <p className="text-gray-700 mb-4">{spot.access}</p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-medium">住所</span>
                </div>
                <p className="text-gray-700">{spot.location.address}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">地図</h2>
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
                    <p className="text-gray-600">{spot.hours}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Yen className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">料金</p>
                    <p className="text-gray-600">{spot.price}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Navigation className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">アクセス</p>
                    <p className="text-gray-600">{spot.access}</p>
                  </div>
                </div>
              </div>
            </div>

            {spot.relatedLinks.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">関連リンク</h3>
                <div className="space-y-2">
                  {spot.relatedLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      公式サイト
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">その他の観光スポット</h3>
              <div className="space-y-3">
                {touristSpots
                  .filter(s => s.id !== spot.id)
                  .slice(0, 3)
                  .map((relatedSpot) => (
                    <Link
                      key={relatedSpot.id}
                      href={`/tourist-spots/${relatedSpot.id}`}
                      className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900">{relatedSpot.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{relatedSpot.category}</p>
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