import {NameSpace} from '../../const';
import {RequestStatus, State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {UserData} from '../../types/userData.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getIsAuth = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getLoginRequestLoading = (state: State): boolean =>
  state[NameSpace.User].loginStatus === RequestStatus.Loading;

export const getUser = (state: State): UserData | null => state[NameSpace.User].user;


