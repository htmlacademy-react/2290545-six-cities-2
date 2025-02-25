import {createSlice} from '@reduxjs/toolkit';
import {fetchNearbyOffers, fetchOfferDetails, fetchOffers} from '../api-actions.ts';
import {OfferDetail, OfferPreview} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';

type OfferData = {
  offers: OfferPreview[];
  isOffersDataLoading: boolean;
  hasError: boolean;
  loading: boolean;
  offerDetail: OfferDetail | null;
  error: string | null;
  nearbyOffers: OfferPreview[];
  isNearbyOffersLoading: boolean;
  isOfferDetailLoading: boolean;
  isFavoriteLoading: boolean;
};

const initialState: OfferData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
  loading: false,
  offerDetail: null,
  error: null,
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  isOfferDetailLoading: false,
  isFavoriteLoading: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferDetails.pending, (state) => {
        state.isOfferDetailLoading = true;
      })
      .addCase(fetchOfferDetails.fulfilled, (state, action) => {
        state.offerDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchOfferDetails.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isNearbyOffersLoading = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffers = [];
        state.isNearbyOffersLoading = false;
      });
  }
});
