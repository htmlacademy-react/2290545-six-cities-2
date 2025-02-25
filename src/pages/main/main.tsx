import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import Header from '../../components/header/header.tsx';
import {useAppSelector} from '../../hook/use-app-selector.tsx';
import PlaceSorting from '../../components/place-sorting/place-sorting.tsx';
import {getOffers} from '../../store/offers/selector.ts';
import {sorting} from '../../utils/utils.ts';
import {getCurrentCity, getCurrentSort} from '../../store/app/selector.ts';
import {MainEmpty} from '../main-empty/main-empty.tsx';
import {useState} from 'react';


export default function Main() {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);
  const currentSortType = useAppSelector(getCurrentSort);
  const sortedOffers = sorting[currentSortType](filteredOffers);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  if (offers.length === 0) {
    return <MainEmpty location={currentCity}/>;
  }

  const handleCardHover = (offerId: string | null) => {
    setActiveCardId(offerId);
  };


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <Header/>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <PlaceSorting activeSorting={currentSortType}/>
              <CardList offers={sortedOffers} onCardHover={handleCardHover}/>
            </section>
            <div className="cities__right-section">
              <Map offers={filteredOffers} activeCardId={activeCardId} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


