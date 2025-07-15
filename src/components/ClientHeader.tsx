'use client'

import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import SearchModal from './SearchModal'

export default function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openSearch = () => {
    setIsSearchOpen(true)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">
              塩尻Rainbow
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/tourist-spots" className="text-gray-700 hover:text-primary-600 transition-colors">
              観光スポット
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-primary-600 transition-colors">
              イベント
            </Link>
            <Link href="/restaurants" className="text-gray-700 hover:text-primary-600 transition-colors">
              グルメ
            </Link>
            <Link href="/souvenirs" className="text-gray-700 hover:text-primary-600 transition-colors">
              お土産
            </Link>
            <Link href="/access" className="text-gray-700 hover:text-primary-600 transition-colors">
              アクセス
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={openSearch}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <button className="px-3 py-1 text-sm bg-primary-100 text-primary-600 rounded-full hover:bg-primary-200 transition-colors">
                日本語
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                English
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/tourist-spots" className="text-gray-700 hover:text-primary-600 transition-colors">
                観光スポット
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-primary-600 transition-colors">
                イベント
              </Link>
              <Link href="/restaurants" className="text-gray-700 hover:text-primary-600 transition-colors">
                グルメ
              </Link>
              <Link href="/souvenirs" className="text-gray-700 hover:text-primary-600 transition-colors">
                お土産
              </Link>
              <Link href="/access" className="text-gray-700 hover:text-primary-600 transition-colors">
                アクセス
              </Link>
              <div className="flex space-x-2 pt-2">
                <button className="px-3 py-1 text-sm bg-primary-100 text-primary-600 rounded-full">
                  日本語
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 rounded-full hover:bg-gray-100">
                  English
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  )
}