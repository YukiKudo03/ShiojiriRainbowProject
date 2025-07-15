import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">塩尻Rainbow</h3>
            <p className="text-gray-400 mb-4">
              塩尻市の魅力を発信する公式観光情報サイト
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">観光情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tourist-spots" className="text-gray-400 hover:text-white transition-colors">
                  観光スポット
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  イベント
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="text-gray-400 hover:text-white transition-colors">
                  グルメ
                </Link>
              </li>
              <li>
                <Link href="/souvenirs" className="text-gray-400 hover:text-white transition-colors">
                  お土産
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">アクセス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/access" className="text-gray-400 hover:text-white transition-colors">
                  交通アクセス
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-400 hover:text-white transition-colors">
                  市内マップ
                </Link>
              </li>
              <li>
                <Link href="/parking" className="text-gray-400 hover:text-white transition-colors">
                  駐車場情報
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  〒399-0786<br />
                  長野県塩尻市大門一番町12-2
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">0263-52-0280</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">info@shiojiri-rainbow.jp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 塩尻市観光協会 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}