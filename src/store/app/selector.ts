import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getCurrentCity = (state: State) => state[NameSpace.App].city;

export const getCurrentSort = (state: State) => state[NameSpace.App].sortTypes;
