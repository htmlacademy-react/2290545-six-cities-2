import {MAX_STARS_RATING} from '../const.ts';

export function getRatingStarsStyle(rating: number): string {
  return `${rating * 100 / MAX_STARS_RATING }%`;
}
