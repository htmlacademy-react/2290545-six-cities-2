import Main from './pages/main/main.tsx';
import Login from './pages/login/login.tsx';
import NotFound from './pages/notfound/notFound.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {useAppSelector} from './hook/use-app-selector.tsx';
import FullPageLoader from './components/full-page-loader/full-page-loader.tsx';
import browserHistory from './browserHistory/browserHistory.ts';
import HistoryRouter from './components/HistoryRouter/HistoryRouter.tsx';
import {getErrorStatus, getOfferDataLoadingStatus} from './store/offers/selector.ts';
import ErrorScreen from './components/error-screen/error-screen.tsx';
import CardOffer from './pages/card-offer/card-offer.tsx';
import {getAuthorizationStatus} from './store/user-process/selector.ts';
import PrivateRoute from './components/private-route/private-route.tsx';
import Favorites from './pages/favorites/favorites.tsx';


export default function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);


  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <FullPageLoader />;
  }

  if (hasError) {
    return (
      <ErrorScreen />);
  }


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={`${AppRoute.cardOffer}/:id`}
          element={<CardOffer/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <Login />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

