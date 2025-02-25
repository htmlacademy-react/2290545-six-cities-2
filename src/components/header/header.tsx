import Logo from '../logo/logo.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {useAppDispatch} from '../../hook/use-app-dispatch.tsx';
import {useAppSelector} from '../../hook/use-app-selector.tsx';
import {getIsAuth, getUser} from '../../store/user-process/selector.ts';
import {fetchFavoriteOffers, logoutAction} from '../../store/api-actions.ts';
import {Fragment, MouseEvent, useEffect} from 'react';
import {getFavorites} from '../../store/favorites/selector.ts';


type HeaderProps = {
  withNav?: boolean;
}

export default function Header({withNav = true }: HeaderProps) {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getIsAuth);
  const user = useAppSelector(getUser);
  const favorites = useAppSelector(getFavorites);


  const handleLogoutClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [isAuth, dispatch]);


  return (
    <div className="header__wrapper">
      <div className="header__left">
        <Logo/>
      </div>
      {withNav && (
        <nav className="header__nav">
          <ul className="header__nav-list">
            {isAuth ? (
              <Fragment>
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user?.email}</span>
                    <span className="header__favorite-count">{favorites?.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link"
                    to={AppRoute.Login}
                    onClick={handleLogoutClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </Fragment>
            ) : (
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}

    </div>
  );
}
