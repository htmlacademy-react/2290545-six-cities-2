import {createReducer} from '@reduxjs/toolkit';
import { CitiesName } from '../const';
import { offersMock} from '../mocks/offers';
import { filterOffers, pickCity } from './action';
import {initialStateType} from '../types/state.ts';

const START_CITY_NAME = 'Paris';

const initialState: initialStateType = {
  cityName: CitiesName.PARIS,
  offers: offersMock.filter((offer) => offer.city.name === START_CITY_NAME),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.offers = offersMock.filter((offer)=> offer.city.name === state.cityName);
    });
});
