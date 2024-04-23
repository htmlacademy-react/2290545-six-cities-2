import {Link} from 'react-router-dom';
import {CitiesName} from '../../const';
import {useAppDispatch} from '../../hooks';
import {pickCity} from '../../store/action';

type CitiesProps = {
  currentCity: string | null;
}

export default function Cities({currentCity}: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const cities = Object.keys(CitiesName);
  const handleClick = (city: string) => {
    dispatch(pickCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item " onClick={() => handleClick(city)}>
          <Link
            className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
            to="#"
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
