import MainPage from '../pages/main';

type AppProps = {
  CountRentOffers:number;
}

function App ({CountRentOffers}:AppProps):JSX.Element {
  return (
    <MainPage CountRentOffers={CountRentOffers}/>
  );
}

export default App;
