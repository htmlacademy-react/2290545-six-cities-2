import {useState, KeyboardEvent} from 'react';
import cn from 'classnames';
import {SortingMap} from '../../const.ts';
import {TSorting} from '../../types/sort.ts';
import {useAppDispatch} from '../../hooks';
import {sortType} from '../../store/action.ts';



type SortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
}

function Sorting({activeSorting, onChange}: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  const iconStyle = {
    transform: `transLatey(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleSortingItemClick(type: TSorting) {
    dispatch(sortType(type));
    onChange(type);
    setIsOpened(false);

  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by</span>
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
        className={cn('places__options', 'places__options--custom', {
          'places__option--opened': isOpened,
        })}
      >
        {(
          Object.entries(SortingMap) as [
            TSorting,
            (typeof SortingMap)[TSorting]
          ][]
        ).map(([type, label]) => (

          <li
            key={type}
            className={cn('places__options', {
              'places__options--active': activeSorting === type,
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

export default Sorting;
