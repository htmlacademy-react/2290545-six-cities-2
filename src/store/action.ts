import {createAction} from '@reduxjs/toolkit';
import { Actions } from '../const';
import {TSorting} from '../types/sort.ts';

export const pickCity = createAction(Actions.PickCity, (newCity: string) => ({
  payload: newCity,

}));

export const changeSortType = createAction(Actions.sortType, (newSort: TSorting) => ({
  payload: newSort,

}));
