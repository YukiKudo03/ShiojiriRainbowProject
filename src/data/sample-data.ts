import { TouristSpot, Event, Restaurant, Souvenir } from '@/types'

export const touristSpots: TouristSpot[] = [
  {
    id: '1',
    name: '塩尻市立博物館',
    description: '塩尻市の歴史と文化を紹介する博物館。縄文時代から現代までの展示が充実しています。',
    images: ['/images/museum.jpg'],
    location: {
      address: '長野県塩尻市大門一番町4-25',
      lat: 36.1144,
      lng: 137.9569
    },
    access: 'JR塩尻駅から徒歩10分',
    hours: '9:00-17:00（入館は16:30まで）',
    price: '一般200円、小中学生100円',
    relatedLinks: ['https://www.city.shiojiri.lg.jp/museum/'],
    category: '文化施設'
  },
  {
    id: '2',
    name: '平出遺跡公園',
    description: '縄文時代から平安時代までの複合遺跡。復元された竪穴住居や体験施設があります。',
    images: ['/images/hiraide.jpg'],
    location: {
      address: '長野県塩尻市宗賀1011-3',
      lat: 36.1234,
      lng: 137.9876
    },
    access: 'JR塩尻駅からバス20分',
    hours: '9:00-17:00',
    price: '大人400円、小中学生200円',
    relatedLinks: ['https://www.city.shiojiri.lg.jp/hiraide/'],
    category: '歴史遺跡'
  }
]

export const events: Event[] = [
  {
    id: '1',
    name: '塩尻ワイン祭り',
    date: '2024-09-15',
    time: '10:00-16:00',
    location: {
      address: '長野県塩尻市大門一番町12-2',
      lat: 36.1144,
      lng: 137.9569
    },
    description: '塩尻市の地元ワイナリーが集結する年に一度のワイン祭り。',
    fee: '前売り2,000円、当日2,500円',
    target: '20歳以上',
    organizer: '塩尻市観光協会',
    contact: '0263-52-0280',
    category: '食・グルメ'
  },
  {
    id: '2',
    name: '桜並木ライトアップ',
    date: '2024-04-10',
    time: '18:00-22:00',
    location: {
      address: '長野県塩尻市大門一番町',
      lat: 36.1144,
      lng: 137.9569
    },
    description: '塩尻駅前の桜並木を美しくライトアップします。',
    fee: '無料',
    target: 'どなたでも',
    organizer: '塩尻市',
    contact: '0263-52-0280',
    category: '季節イベント'
  }
]

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: '信州そば処 山里',
    genre: '和食・そば',
    description: '地元産そば粉を使用した本格手打ちそば。天然山菜の天ぷらも人気です。',
    images: ['/images/soba.jpg'],
    location: {
      address: '長野県塩尻市大門一番町8-1',
      lat: 36.1144,
      lng: 137.9569
    },
    hours: '11:00-14:00, 17:00-21:00',
    priceRange: '1,000円-2,500円',
    reservationAvailable: true,
    phone: '0263-52-1234',
    category: '和食'
  },
  {
    id: '2',
    name: 'ワイナリーレストラン ヴィーニョ',
    genre: '洋食・イタリアン',
    description: '塩尻産ワインと地元食材を使った創作イタリアン。',
    images: ['/images/winery.jpg'],
    location: {
      address: '長野県塩尻市宗賀1298-170',
      lat: 36.1234,
      lng: 137.9876
    },
    hours: '11:30-14:00, 18:00-21:00',
    priceRange: '2,000円-4,000円',
    reservationAvailable: true,
    phone: '0263-52-5678',
    category: '洋食'
  }
]

export const souvenirs: Souvenir[] = [
  {
    id: '1',
    name: '塩尻ワイン',
    store: '道の駅 塩尻',
    price: '2,500円-5,000円',
    description: '塩尻市の代表的なお土産。桔梗ヶ原産メルローを使用したワインです。',
    images: ['/images/wine.jpg'],
    category: 'お酒'
  },
  {
    id: '2',
    name: '信州味噌',
    store: '塩尻駅前商店街',
    price: '800円-1,500円',
    description: '長野県の伝統的な味噌。まろやかな味わいが特徴です。',
    images: ['/images/miso.jpg'],
    category: '調味料'
  }
]