/* eslint-disable react/no-array-index-key */
import { Helmet } from 'react-helmet-async';
import CardList from '../components/card-list';
import MainHeader from '../components/main-header';
import Map from '../components/map';
import CitiesList from '../components/cities-list';
import { useAppSelector } from '../store';
import { getOffersByActiveCity } from '../store/reduser';
type MainPageProps = {
  setSelectedCardId: React.Dispatch<React.SetStateAction<number>>;
  selectedCardId: number;
};

function MainPage({ setSelectedCardId, selectedCardId }: MainPageProps) {
  const currentCity = useAppSelector((state) => state.selectedCityName);
  const offersCurrentCity = useAppSelector(getOffersByActiveCity);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <MainHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offersCurrentCity.length} places to stay in ${currentCity}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <CardList setSelectedCardId={setSelectedCardId} />
            </section>
            <div className="cities__right-section">
              <Map selectedCardId={selectedCardId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
