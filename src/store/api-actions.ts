import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferDetail, OfferPreview} from '../types/offer.ts';
import {ThunkOptions} from '../types/state.ts';
import {APIRoute, AppRoute} from '../const.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData, UserData} from '../types/userData.ts';
import axios from 'axios';
import {CommentPost, Review} from '../types/review.ts';
import {StatusCodes} from 'http-status-codes';
import {redirectToRoute} from './action.ts';

export const fetchOffers = createAsyncThunk<OfferPreview[], void, ThunkOptions>(
  'offers/loadOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkOptions>(
  'user/login',
  async ({login, password}, {dispatch,extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email: login, password,});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  });

export const fetchOfferDetails = createAsyncThunk<OfferDetail, string, ThunkOptions>(
  'details/fetchOfferDetails',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferDetail>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === StatusCodes.NOT_FOUND) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      throw error;
    }
  }
);

export const fetchOfferComments = createAsyncThunk<Review[], string, ThunkOptions>(
  'comments/fetchOfferComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);
export const sendComment = createAsyncThunk<Review, CommentPost, ThunkOptions>(
  'comments/sendComment',
  async ({comment, rating, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<OfferPreview[], string, ThunkOptions>(
  'details/fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<OfferPreview[], void, ThunkOptions>(
  'offers/fetchFavoriteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.Favorites);
    return data;
  }
);

export const addFavorite = createAsyncThunk<OfferPreview, string, ThunkOptions>(
  'favorites/addFavorite',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<OfferPreview>(
      `${APIRoute.Favorites}/${offerId}/1`
    );

    return data;
  });

export const deleteFavorite = createAsyncThunk<OfferPreview, string, ThunkOptions>(
  'favorites/deleteFavorite',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<OfferPreview>(
      `${APIRoute.Favorites}/${offerId}/0`
    );

    return data;
  });
