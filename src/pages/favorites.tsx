/* eslint-disable react/no-array-index-key */
import { Helmet } from 'react-helmet-async';
import { generatedOffers } from '../components/mocks/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../components/consts';
import CityFavouriteItem from '../components/city-favourite-ltem';
import LoginLink from '../components/login-link';
import MainLogoLink from '../components/main-logo-link';

function Favorites() {
  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <MainLogoLink />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <LoginLink />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {generatedOffers.map((_, index) => (
                <CityFavouriteItem
                  mockData={generatedOffers}
                  cityToDisplay={generatedOffers[index].city.name}
                  isFavourite={generatedOffers[index].isFavourite}
                  key={index}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
