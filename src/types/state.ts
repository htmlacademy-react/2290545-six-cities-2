import { Offer } from './offer';
import {TSorting} from './sort.ts';

export type initialStateType = {
  cityName: string;
  sortType: TSorting;
  offers: Offer[];
}
