import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions.ts';
import {RequestStatus} from '../../types/state.ts';
import {UserData} from '../../types/userData.ts';
import {dropToken} from '../../services/token.ts';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  loginStatus: RequestStatus;
  user: UserData | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  loginStatus: RequestStatus.Idle,
  user: null,
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    resetUserInfo(state) {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      dropToken();
    },
  },
  extraReducers(builder){
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.user = null;
        state.loginStatus = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loginStatus = RequestStatus.Success;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.user = null;
        state.loginStatus = RequestStatus.Error;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
