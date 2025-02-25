import {RequestStatus, State} from '../../types/state.ts';
import {OfferPreview} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';

export const getFavorites = (state: State):OfferPreview[] => state[NameSpace.Favorites].favorites;

export const getFavoritesLoadingStatus = (state: State): boolean =>
  state[NameSpace.Favorites].favoritesLoadingStatus === RequestStatus.Loading;
