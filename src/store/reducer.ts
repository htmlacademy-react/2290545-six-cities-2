import {createReducer} from '@reduxjs/toolkit';
import {CitiesName, SortingMap} from '../const';
import {offersMock} from '../mocks/offers';
import {pickCity, sortType} from './action';
import {initialStateType} from '../types/state.ts';

const initialState: initialStateType = {
  cityName: CitiesName.Paris,
  sortType: SortingMap.Popular,
  offers: offersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(sortType, (state, action) => {
      state.sortType = action.payload;
    });
});
