import {createAction} from '@reduxjs/toolkit';
import { Actions } from '../const';

export const pickCity = createAction(Actions.PickCity, (textContent: string) => ({
  payload: textContent,

}));

export const sortType = createAction(Actions.sortType, (textContent: string) => ({
  payload: textContent,

}));
