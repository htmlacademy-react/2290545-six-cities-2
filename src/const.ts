export enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  root = '/',

}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const housing: Record<string, string> = {
  Apartment: 'Apartment',
  Room: 'Private Room',
  House: 'House',
  Hotel: 'Hotel'
};

export const MAX_STARS_RATING = 20;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const DateFormat = {
  AttributeFormat: 'YYYY-MM-DD',
  ReviewDateFormat: 'MMMM YYYY'
};

export const CitiesName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;


export enum Actions {
  PickCity = 'PICK_CITY',
  sortType = 'SORT_TYPE',
}

export const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'LowToHigh',
  HighToLow: 'HighToLow',
  TopRated: 'Top rated first',
} as const;
