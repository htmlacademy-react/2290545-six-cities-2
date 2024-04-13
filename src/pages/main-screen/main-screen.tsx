import Header from '../../components/header/header';
import {Offer, Location, City} from '../../types/offer';
import Cities from '../../components/cities/cities.tsx';
import Sort from '../../components/sort/sort.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';

type MainProps = {
  offers: Offer[];
  location: Location;
  city: City;
};

function MainScreen({offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort/>
              <CardList offers={offers} ></CardList>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} location={offers[0].city.location}></Map>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
