import Header from '../../components/header/header.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import {useAppSelector} from '../../hook/use-app-selector.tsx';
import {getCurrentCity} from '../../store/app/selector.ts';

type MainEmptyProps = {
  location: string;
};

export function MainEmpty({ location }: MainEmptyProps): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <Header/>
        </div>
      </header>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {location}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
