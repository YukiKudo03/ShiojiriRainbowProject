import { Train, Car, Bus, MapPin, Clock, Yen, Info } from 'lucide-react'

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">アクセス情報</h1>
          <p className="text-gray-600">塩尻市へのアクセス方法と市内の交通手段をご案内します</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Train className="w-6 h-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-bold">電車でのアクセス</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900">東京方面から</h3>
                <p className="text-gray-600 mb-2">JR中央本線「塩尻駅」下車</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>所要時間: 約2時間30分</span>
                  </div>
                  <div className="flex items-center">
                    <Yen className="w-4 h-4 mr-1" />
                    <span>料金: 約4,000円</span>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900">名古屋方面から</h3>
                <p className="text-gray-600 mb-2">JR中央本線「塩尻駅」下車</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>所要時間: 約2時間</span>
                  </div>
                  <div className="flex items-center">
                    <Yen className="w-4 h-4 mr-1" />
                    <span>料金: 約3,500円</span>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900">長野方面から</h3>
                <p className="text-gray-600 mb-2">JR篠ノ井線「塩尻駅」下車</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>所要時間: 約1時間</span>
                  </div>
                  <div className="flex items-center">
                    <Yen className="w-4 h-4 mr-1" />
                    <span>料金: 約1,000円</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Car className="w-6 h-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-bold">自動車でのアクセス</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">中央自動車道</h3>
                <p className="text-gray-600 mb-2">塩尻IC下車</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>東京から: 約2時間30分</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>名古屋から: 約2時間</span>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">長野自動車道</h3>
                <p className="text-gray-600 mb-2">塩尻北IC下車</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>長野から: 約1時間</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-800">駐車場情報</span>
                </div>
                <p className="text-blue-700 text-sm">市内各観光地に無料駐車場完備</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Bus className="w-6 h-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-bold">高速バスでのアクセス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900">東京・新宿方面</h3>
              <p className="text-gray-600 mb-2">新宿 → 塩尻IC</p>
              <div className="text-sm text-gray-500 space-y-1">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>所要時間: 約3時間30分</span>
                </div>
                <div className="flex items-center">
                  <Yen className="w-4 h-4 mr-1" />
                  <span>料金: 約3,000円</span>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900">名古屋方面</h3>
              <p className="text-gray-600 mb-2">名古屋 → 塩尻IC</p>
              <div className="text-sm text-gray-500 space-y-1">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>所要時間: 約2時間30分</span>
                </div>
                <div className="flex items-center">
                  <Yen className="w-4 h-4 mr-1" />
                  <span>料金: 約2,500円</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">市内の交通手段</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">市内バス</h3>
              <p className="text-gray-600 text-sm">主要観光地を巡る循環バス</p>
              <p className="text-gray-500 text-xs mt-2">200円/回</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">タクシー</h3>
              <p className="text-gray-600 text-sm">駅前からタクシー利用可能</p>
              <p className="text-gray-500 text-xs mt-2">初乗り500円</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">レンタカー</h3>
              <p className="text-gray-600 text-sm">駅前にレンタカー営業所あり</p>
              <p className="text-gray-500 text-xs mt-2">6,000円/日〜</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">塩尻駅周辺マップ</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-medium">塩尻駅周辺マップ</p>
              <p className="text-sm">準備中</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">塩尻駅</h3>
              <p className="text-gray-600 text-sm">〒399-0736 長野県塩尻市大門一番町1-1</p>
              <p className="text-gray-500 text-xs mt-1">JR中央本線・篠ノ井線</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">観光案内所</h3>
              <p className="text-gray-600 text-sm">塩尻駅構内</p>
              <p className="text-gray-500 text-xs mt-1">営業時間: 9:00-17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}