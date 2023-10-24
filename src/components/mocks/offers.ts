import { OfferType } from '../../types';

function generateMultipleOffers(count: number) :OfferType[] {
  const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
  const headers = ['Small comfortable room', 'Luxurious Beachfront Villa', 'Cozy Mountain Cabin', 'Downtown Loft in the City'];
  const descriptions = [
    'Offering a terrace or balcony with views of the sea and mountain.',
    'Stunning villa with private pool and beachfront views.',
    'Rustic cabin in the woods with a fireplace and mountain views.',
    'Modern loft apartment in the heart of the city with cityscape views'
  ];
  const isPrimeValues = [true, false, true, false];
  const isFavoritValues = [true, false, true, false];
  const housingTypes = ['apartment', 'villa', 'cabin', 'apartment'];
  const ratings = [4.5, 4.2, 4.0, 4.7];
  const bedroomQuantities = [3, 5, 2, 1];
  const maxGuestValues = [5, 10, 3, 4];
  const costPerNightValues = ['100€', '150€', '80€', '120€'];
  const cities = ['Брюссель', 'Париж', 'Гамбург', 'Амстердам'];
  const cityCoordinates = [
    { latitude: 50.8503, longitude: 4.3517, zoom: 10 },
    { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
    { latitude: 53.5753, longitude: 10.0153, zoom: 10 },
    { latitude: 52.3676, longitude: 4.9041, zoom: 11 },
  ];
  const hostAvatarImages = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png'];
  const hostNames = ['Georg', 'Alice', 'John', 'David'];
  const isProValues = [true, false, true, false];
  const reviewCounts = [12, 10, 8, 18];

  return Array.from({ length: count }, (_, i) => ({
    image: images[i],
    header: headers[i],
    description: descriptions[i],
    isPrime: isPrimeValues[i],
    isFavorit: isFavoritValues[i],
    housingType: housingTypes[i],
    rating: ratings[i],
    bedroomQuantity: bedroomQuantities[i],
    maxGuest: maxGuestValues[i],
    costPerNight: costPerNightValues[i],
    city: {
      location: cityCoordinates[i],
      name: cities[i],
    },
    host: {
      avatarImage: hostAvatarImages[i],
      hostName: hostNames[i],
      isPro: isProValues[i],
      id: 10 + i,
    },
    reviews: reviewCounts[i],
    id: 100 + i,
  }));
}

const numberOfOffers = 4;
const generatedOffers = generateMultipleOffers(numberOfOffers);


export {generatedOffers};

