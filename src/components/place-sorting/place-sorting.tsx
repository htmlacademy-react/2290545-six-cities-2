import classNames from 'classnames';
import {useState} from 'react';
import {useAppDispatch} from '../../hook/use-app-dispatch.tsx';
import {SortingMap} from '../../const.ts';
import {Sorting} from '../../types/sort.ts';
import {changeSortingType} from '../../store/app/app-slice.ts';

type SortEntries = [Sorting, (typeof SortingMap)[Sorting]][];

type SortingProps = {
  activeSorting: Sorting;
}

export default function PlaceSorting({activeSorting}: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  const iconStyle = {
    transform: `transLateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };


  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleSortingItemClick(type: Sorting) {
    dispatch(changeSortingType(type));
    setIsOpened(false);

  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by{' '}</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {SortingMap[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {(Object.entries(SortingMap) as SortEntries).map(([type, label]) => (

          <li
            key={type}
            className={classNames('places__option', {
              'places__option--active': activeSorting === type,
            })}
            tabIndex={0}
            onClick={() => handleSortingItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
