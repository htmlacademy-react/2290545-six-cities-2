import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import {Review} from '../../types/review.ts';
import {Offer} from "../../types/offer.ts";



type AppProps = {
  reviews: Review[];
  offers: Offer[]
}

export default function App({offers, reviews }: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.root}
            element={<MainScreen offers={offers}/>}
          />
          <Route
            path={AppRoute.favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.login}
            element={<LoginScreen />}
          />
          <Route
            path={`${AppRoute.offer}`}
            element={<OfferScreen offers={offers} reviews={reviews} />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
          <Route path={'*'} element ={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

