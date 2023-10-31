/* eslint-disable react/no-array-index-key */
import CitiesCard from '../components/cities-card';
import { OfferType } from '../types';
import { useState } from 'react';

type CardListProps = {
  mockData: OfferType[];
};

function CardList(props: CardListProps) {
  const [mouseOverState, setMouseOverState] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.mockData.map((data, index) => (
        <CitiesCard
          mouseEnterHandler={(id: number) => {
            setMouseOverState(id);
          }}
          cardData={data}
          key={index}
        />
      ))}
    </div>
  );
}

export default CardList;
