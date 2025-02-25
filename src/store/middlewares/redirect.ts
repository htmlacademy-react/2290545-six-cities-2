import {rootReducer} from '../root-reducer.ts';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browserHistory/browserHistory.ts';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'offer/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
