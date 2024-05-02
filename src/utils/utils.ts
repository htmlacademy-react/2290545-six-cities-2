import {MAX_STARS_RATING} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {TSorting} from '../types/sort.ts';

export function getRatingStarsStyle(rating: number): string {
  return `${rating * 100 / MAX_STARS_RATING }%`;
}

function sortByRating (a: Offer, b:Offer) {
  return a.rating - b.rating;
}

function sortLowToHigh (a: Offer, b: Offer) {
  return a.price - b.price;
}

function sortHighToLow (a: Offer, b: Offer) {
  return b.price - a.price;
}

export const sorting: Record<TSorting, (offers: Offer[]) => Offer[]> = {
  Popular: (offers: Offer[]) => offers.slice(),
  HighToLow: (offers: Offer[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: Offer[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: Offer[]) => offers.slice().sort(sortByRating),
};
