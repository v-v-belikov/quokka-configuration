import { useRef } from 'react';
import useMap from '../hooks/use-map';
import { City } from '../types';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: City;
};

function Map({ city }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
