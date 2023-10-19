import MainPage from '../pages/main';
import Login from '../pages/login';
import Offer from '../pages/offer';
import Favorites from '../pages/favorites';
import ErrorPage from './error-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute } from './consts';

type AppProps = {
  CountRentOffers:number;
}

function App ({CountRentOffers}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainPage CountRentOffers={CountRentOffers}/>}
        />
        <Route
          path = {AppRoute.Login}
          element = {<Login />}
        />
        <Route
          path = {AppRoute.Offer}
          element = {<Offer />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {<Favorites />}
        />
        <Route
          path = '*'
          element = {<ErrorPage/>}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
