import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DEFAULT_CITY, DEFAULT_SORTING, NameSpace} from '../../const.ts';
import {Sorting} from '../../types/sort.ts';


type AppSlice = {
  city: string;
  sortTypes: Sorting;
};

const initialState: AppSlice = {
  city: DEFAULT_CITY,
  sortTypes: DEFAULT_SORTING,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {

    changeSortingType: (state, { payload }: PayloadAction<Sorting>) => {
      state.sortTypes = payload;
    },
    changeCity: (state, { payload }: PayloadAction<string>) => {
      state.city = payload;
    },
  },
});

export const {changeSortingType, changeCity} = appSlice.actions;
