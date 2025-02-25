import {NameSpace} from '../../const.ts';
import {Review} from '../../types/review.ts';
import {RequestStatus, State} from '../../types/state.ts';


export const getCommentsLoadingStatus = (state: State): boolean =>
  state[NameSpace.Comments].commentsStatus === RequestStatus.Loading;

export const getComments = (state: State): Review[] =>
  state[NameSpace.Comments].comments;

export const sendCommentsLoadingStatus = (state: State): boolean =>
  state[NameSpace.Comments].sendCommentStatus === RequestStatus.Loading;
