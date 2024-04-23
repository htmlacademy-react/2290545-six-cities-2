import {createReducer} from '@reduxjs/toolkit';
import { CitiesName } from '../const';
import { offersMock} from '../mocks/offers';
import { pickCity } from './action';
import {initialStateType} from '../types/state.ts';

const initialState: initialStateType = {
  cityName: CitiesName.Paris,
  offers: offersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    });

});
