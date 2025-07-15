import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Utensils, Gift, ChevronRight } from "lucide-react";
import { touristSpots, events, restaurants, souvenirs } from "@/data/sample-data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              塩尻市へようこそ
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              自然豊かな信州の魅力を発見しよう
            </p>
            <div className="flex space-x-4">
              <Link
                href="/tourist-spots"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                観光スポットを見る
              </Link>
              <Link
                href="/events"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                イベント情報
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">塩尻市の魅力</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">観光スポット</h3>
              <p className="text-gray-600">歴史ある遺跡から現代アートまで</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">イベント</h3>
              <p className="text-gray-600">季節ごとの楽しいイベント</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">グルメ</h3>
              <p className="text-gray-600">地元の美味しい食べ物</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">お土産</h3>
              <p className="text-gray-600">塩尻の特産品とお土産</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">人気の観光スポット</h2>
            <Link
              href="/tourist-spots"
              className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
            >
              すべて見る <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {touristSpots.slice(0, 3).map((spot) => (
              <div key={spot.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">画像準備中</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                  <p className="text-gray-600 mb-4">{spot.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {spot.location.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">最新イベント</h2>
            <Link
              href="/events"
              className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
            >
              すべて見る <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {new Date(event.date).toLocaleDateString('ja-JP', {
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location.address}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">塩尻市を訪れる準備はできましたか？</h2>
            <p className="text-gray-600 mb-8">
              交通アクセス情報や宿泊情報もご確認ください
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/access"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                アクセス情報
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
