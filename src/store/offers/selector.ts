import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';
import {OfferDetail, OfferPreview} from '../../types/offer.ts';

export const getOffers = (state: State): OfferPreview[] =>
  state[NameSpace.Offers].offers;

export const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isOffersDataLoading;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Offers].hasError;

export const getNearbyOffers = (state: State):OfferPreview[] =>
  state[NameSpace.Offers].nearbyOffers;

export const getNearbyOffersLoadingStatus = (state : State) : boolean =>
  state[NameSpace.Offers].isNearbyOffersLoading;

export const getOfferDetail = (state: State):OfferDetail | null =>
  state[NameSpace.Offers].offerDetail;


