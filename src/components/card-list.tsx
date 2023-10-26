import CitiesCard from '../components/cities-card';
import { OfferType } from '../types';



function CardList(mockData: OfferType[]) {
  const citiesCards = Array.from({ length: 4 });
  return (
    {citiesCards.map((data, index: number) => (<CitiesCard mockData= {data[index]} key={index} />))}
  )
}