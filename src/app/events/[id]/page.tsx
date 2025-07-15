import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Phone, ChevronLeft, Yen } from 'lucide-react'
import { events } from '@/data/sample-data'

interface EventDetailPageProps {
  params: { id: string }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = events.find(e => e.id === params.id)
  
  if (!event) {
    notFound()
  }

  const isUpcoming = new Date(event.date) >= new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/events"
            className="flex items-center text-primary-600 hover:text-primary-800 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            イベント一覧に戻る
          </Link>
          <div className="flex items-center space-x-2 mb-2">
            <span className={`text-sm px-3 py-1 rounded-full ${
              isUpcoming 
                ? 'bg-primary-100 text-primary-600' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {event.category}
            </span>
            {!isUpcoming && (
              <span className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full">
                終了
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{event.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className={`h-64 md:h-96 flex items-center justify-center ${
                isUpcoming 
                  ? 'bg-gradient-to-br from-primary-400 to-primary-600' 
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
              }`}>
                <div className="text-center text-white">
                  <Calendar className="w-16 h-16 mx-auto mb-4" />
                  <span className="text-lg font-medium">
                    {isUpcoming ? 'イベント画像準備中' : '終了したイベント'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">イベント詳細</h2>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">会場・アクセス</h2>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-medium">会場</span>
                </div>
                <p className="text-gray-700">{event.location.address}</p>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Google Maps準備中</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">主催者</p>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">お問い合わせ</p>
                    <p className="text-gray-600">{event.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">開催情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">開催日</p>
                    <p className="text-gray-600">
                      {new Date(event.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long'
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">開催時間</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Yen className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">参加費</p>
                    <p className="text-gray-600">{event.fee}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">対象者</p>
                    <p className="text-gray-600">{event.target}</p>
                  </div>
                </div>
              </div>
            </div>

            {isUpcoming && (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-primary-800 mb-2">参加申し込み</h3>
                <p className="text-primary-700 text-sm mb-4">
                  このイベントに参加ご希望の方は、お問い合わせください。
                </p>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  参加申し込み
                </button>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">その他のイベント</h3>
              <div className="space-y-3">
                {events
                  .filter(e => e.id !== event.id)
                  .slice(0, 3)
                  .map((relatedEvent) => (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                      className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900">{relatedEvent.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(relatedEvent.date).toLocaleDateString('ja-JP', {
                          month: 'long',
                          day: 'numeric'
                        })} - {relatedEvent.category}
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