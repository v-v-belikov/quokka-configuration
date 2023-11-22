import { useRef, useEffect } from 'react';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { DEFAULT_OFFER_MAP_ICON, CURRENT_OFFER_MAP_ICON } from './consts';
import { useAppSelector } from '../store';
import { getOffersByActiveCity } from '../store/reduser';

type MapProps = {
  selectedCardId: number;
};

function Map({ selectedCardId }: MapProps) {
  const currentCity = useAppSelector((state) => state.activeCity);
  const offersCurrentCity = useAppSelector(getOffersByActiveCity);

  // const offersCurrentCity = offers.filter(
  //   (offer) => offer.city.name === activetCity
  // );
  const currentOffer = offersCurrentCity.find(
    (offer) => offer.city.name === `${currentCity}`
  );
  console.log(currentOffer);
  const activetCity = currentOffer?.city || {
    location: {
      lat: 52.37403,
      lng: 4.88969,
      zoom: 12,
    },
    name: 'Amsterdam',
  };
  console.log(activetCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, activetCity);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: DEFAULT_OFFER_MAP_ICON,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: CURRENT_OFFER_MAP_ICON,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });
  useEffect(() => {
    if (map) {
      offersCurrentCity.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.site.lat,
              lng: offer.site.lng,
            },
            {
              icon:
                offer.id === selectedCardId
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offersCurrentCity, selectedCardId, defaultCustomIcon, currentCustomIcon]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
