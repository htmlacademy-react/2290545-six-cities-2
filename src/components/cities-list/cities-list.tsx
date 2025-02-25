import {useAppDispatch} from '../../hook/use-app-dispatch.tsx';
import {Cities} from '../../const.ts';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {changeCity} from '../../store/app/app-slice.ts';

type CitiesListProps = {
  currentCity: string;
}

export default function CitiesList({currentCity}: CitiesListProps) {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <li
          key={city}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <Link
            className={classNames('locations__item-link', 'tabs__item', {
              'tabs__item--active': currentCity === city,
            })}
            to="#"
          >
            <span>{city}</span>
          </Link>

        </li>
      ))}

    </ul>
  );
}
