import Header from '../../components/header/header';
import {Offer} from '../../types/offer';
import Cities from '../../components/cities/cities.tsx';
import Sort from '../../components/sort/sort.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../hooks';

type MainProps = {
  offers: Offer[];
};

function MainScreen({offers}: MainProps): JSX.Element {
  const currentCity = useAppSelector((state)=>state.cityName);
console.log(currentCity);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities currentCity={currentCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <Sort/>
              <CardList offers={offers} className="cities__places--list"></CardList>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
