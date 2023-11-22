/* eslint-disable react/no-array-index-key */

import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { activeCityAction } from '../store/action';

function CitiesList() {
  const CITIES = [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf',
  ];
  const currentCity = useAppSelector((state) => state.selectedCityName);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <Fragment key={city}>
          <li className="locations__item">
            <a
              className={`locations__item-link tabs__item${
                city === currentCity && '--active'
              }`}
              href="#"
              onClick={() => {
                dispatch(activeCityAction(city));
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export default CitiesList;
