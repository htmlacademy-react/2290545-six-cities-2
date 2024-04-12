import Header from '../../components/header/header';
import {Offer} from '../../types/offer';
import Cities from '../../components/cities/cities.tsx';
import Sort from '../../components/sort/sort.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../map/map.tsx';
import {useState} from 'react';

type MainProps = {
  offers: Offer[];
  selectedPoint?: Offer | undefined;
};

function MainScreen({offers, selectedPoint}: MainProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState(0);

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
              <CardList offers={offers} setSelectedPoint={setSelectedPoint}/>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} selectedPoint={selectedPoint}/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
