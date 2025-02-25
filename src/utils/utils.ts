import {MAX_STARS_RATING} from '../const.ts';
import {OfferPreview} from '../types/offer.ts';
import {Sorting} from '../types/sort.ts';

export function getRatingStarsStyle(rating: number): string {
  const percentage = (Math.round(rating) * 100) / MAX_STARS_RATING;
  return `${percentage}%`;
}

function sortByRating(a: OfferPreview, b: OfferPreview) {
  return a.rating - b.rating;
}

function sortLowToHigh(a: OfferPreview, b: OfferPreview) {
  return a.price - b.price;
}

function sortHighToLow(a: OfferPreview, b: OfferPreview) {
  return b.price - a.price;
}

export const sorting: Record<Sorting, (offers: OfferPreview[]) => OfferPreview[]> = {
  Popular: (offers: OfferPreview[]) => offers.slice(),
  HighToLow: (offers: OfferPreview[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: OfferPreview[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: OfferPreview[]) => offers.slice().sort(sortByRating),
};
