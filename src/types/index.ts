export interface TouristSpot {
  id: string
  name: string
  description: string
  images: string[]
  videos?: string[]
  location: {
    address: string
    lat: number
    lng: number
  }
  access: string
  hours: string
  price: string
  relatedLinks: string[]
  category: string
}

export interface Event {
  id: string
  name: string
  date: string
  time: string
  location: {
    address: string
    lat: number
    lng: number
  }
  description: string
  fee: string
  target: string
  organizer: string
  contact: string
  category: string
}

export interface Restaurant {
  id: string
  name: string
  genre: string
  description: string
  images: string[]
  location: {
    address: string
    lat: number
    lng: number
  }
  hours: string
  priceRange: string
  reservationAvailable: boolean
  phone: string
  category: string
}

export interface Souvenir {
  id: string
  name: string
  store: string
  price: string
  description: string
  images: string[]
  category: string
}

export interface SearchResult {
  id: string
  title: string
  description: string
  category: 'tourist-spot' | 'event' | 'restaurant' | 'souvenir'
  url: string
}