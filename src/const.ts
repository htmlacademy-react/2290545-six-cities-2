export enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  Root = '/',

}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const housing: Record<string, string> = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel'
};

export const MAX_STARS_RATING = 20;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
