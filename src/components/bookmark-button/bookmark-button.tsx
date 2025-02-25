import {MouseEvent} from 'react';
import {OfferPreview} from '../../types/offer.ts';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hook/use-app-selector.tsx';
import {getIsAuth} from '../../store/user-process/selector.ts';
import {AppRoute} from '../../const.ts';
import {addFavorite, deleteFavorite} from '../../store/api-actions.ts';
import cn from 'classnames';
import {getFavorites} from '../../store/favorites/selector.ts';
import {useAppDispatch} from '../../hook/use-app-dispatch.tsx';

type BookmarkButtonImageSize = 'small' | 'large';

type BookmarkButtonProps = {
  id: OfferPreview['id'];
  block: string;
  size?: BookmarkButtonImageSize;
};

const sizeMap: Record<BookmarkButtonImageSize, { width: string; height: string }> = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'},
};

export function BookmarkButton({id, block, size = 'small'}: BookmarkButtonProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getIsAuth);
  const favorites = useAppSelector(getFavorites);
  const isActive = favorites.some((offer) => offer.id === id);

  const handleButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }
    if (id) {
      if (isActive) {
        dispatch(deleteFavorite(id));
      } else {
        dispatch(addFavorite(id));
      }
    }
  };

  return (
    <button
      className={cn(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: isActive && isAuth,
      })}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${block}__bookmark-icon`} {...sizeMap[size]}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        {isActive && isAuth ? 'In' : 'To'}
      </span>
    </button>
  );
}
