'use client'

import { useState, useEffect } from 'react'
import { Search, X, MapPin, Calendar, Utensils, Gift } from 'lucide-react'
import Link from 'next/link'
import { touristSpots, events, restaurants, souvenirs } from '@/data/sample-data'
import { SearchResult } from '@/types'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    if (query.trim()) {
      performSearch(query, selectedCategory)
    } else {
      setResults([])
    }
  }, [query, selectedCategory])

  const performSearch = (searchQuery: string, category: string) => {
    const searchResults: SearchResult[] = []
    const lowerQuery = searchQuery.toLowerCase()

    // 観光スポットを検索
    if (category === 'all' || category === 'tourist-spot') {
      touristSpots.forEach(spot => {
        if (spot.name.toLowerCase().includes(lowerQuery) || 
            spot.description.toLowerCase().includes(lowerQuery) ||
            spot.location.address.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: spot.id,
            title: spot.name,
            description: spot.description,
            category: 'tourist-spot',
            url: `/tourist-spots/${spot.id}`
          })
        }
      })
    }

    // イベントを検索
    if (category === 'all' || category === 'event') {
      events.forEach(event => {
        if (event.name.toLowerCase().includes(lowerQuery) || 
            event.description.toLowerCase().includes(lowerQuery) ||
            event.location.address.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: event.id,
            title: event.name,
            description: event.description,
            category: 'event',
            url: `/events/${event.id}`
          })
        }
      })
    }

    // レストランを検索
    if (category === 'all' || category === 'restaurant') {
      restaurants.forEach(restaurant => {
        if (restaurant.name.toLowerCase().includes(lowerQuery) || 
            restaurant.description.toLowerCase().includes(lowerQuery) ||
            restaurant.genre.toLowerCase().includes(lowerQuery) ||
            restaurant.location.address.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: restaurant.id,
            title: restaurant.name,
            description: restaurant.description,
            category: 'restaurant',
            url: `/restaurants/${restaurant.id}`
          })
        }
      })
    }

    // お土産を検索
    if (category === 'all' || category === 'souvenir') {
      souvenirs.forEach(souvenir => {
        if (souvenir.name.toLowerCase().includes(lowerQuery) || 
            souvenir.description.toLowerCase().includes(lowerQuery) ||
            souvenir.store.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: souvenir.id,
            title: souvenir.name,
            description: souvenir.description,
            category: 'souvenir',
            url: `/souvenirs/${souvenir.id}`
          })
        }
      })
    }

    setResults(searchResults.slice(0, 10)) // 最大10件表示
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tourist-spot':
        return <MapPin className="w-4 h-4" />
      case 'event':
        return <Calendar className="w-4 h-4" />
      case 'restaurant':
        return <Utensils className="w-4 h-4" />
      case 'souvenir':
        return <Gift className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'tourist-spot':
        return '観光スポット'
      case 'event':
        return 'イベント'
      case 'restaurant':
        return 'グルメ'
      case 'souvenir':
        return 'お土産'
      default:
        return ''
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">検索</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="検索キーワードを入力..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              autoFocus
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              すべて
            </button>
            <button
              onClick={() => setSelectedCategory('tourist-spot')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'tourist-spot'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              観光スポット
            </button>
            <button
              onClick={() => setSelectedCategory('event')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'event'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              イベント
            </button>
            <button
              onClick={() => setSelectedCategory('restaurant')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'restaurant'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              グルメ
            </button>
            <button
              onClick={() => setSelectedCategory('souvenir')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'souvenir'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              お土産
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-4 space-y-3">
              {results.map((result) => (
                <Link
                  key={`${result.category}-${result.id}`}
                  href={result.url}
                  onClick={onClose}
                  className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 text-primary-600 mt-1">
                      {getCategoryIcon(result.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{result.title}</h3>
                        <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                          {getCategoryLabel(result.category)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>「{query}」に一致する結果が見つかりませんでした</p>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>キーワードを入力して検索してください</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}