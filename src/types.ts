export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
}

export type Host = {
  avatarImage: string;
  hostName: string;
  isPro: boolean;
  id: number;
}

export type OfferType = {
  image: string|string[];
  header: string;
  description: string;
  isPrime: boolean;
  isFavorit: boolean;
  housingType: string;
  rating: number;
  bedroomQuantity: number;
  maxGuest: number;
  costPerNight: string;
  city: City;
  host: Host;
  reviews: number;
  id: number;
}
