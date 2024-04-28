import Header from '../../components/header/header';
import Cities from '../../components/cities/cities.tsx';
import Sorting from '../../components/sorting/sorting.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import {TSorting} from '../../types/sort.ts';


function MainScreen(): JSX.Element {
  const [activeSorting, setActiveSorting] = useState<TSorting>('Popular');
  const currentCity = useAppSelector((state) => state.cityName);
  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);

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
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <Sorting activeSorting={activeSorting} onChange={(newSorting) => setActiveSorting(newSorting)}/>
              <CardList offers={filteredOffers} className="cities__places-list"></CardList>
            </section>
            <div className="cities__right-section">
              <Map offers={filteredOffers} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
