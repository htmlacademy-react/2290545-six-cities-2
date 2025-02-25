import {Review} from '../../types/review.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOfferComments, sendComment} from '../api-actions.ts';
import {NameSpace} from '../../const.ts';
import {RequestStatus} from '../../types/state.ts';


type CommentsSlice = {
  comments: Review[];
  commentsStatus: RequestStatus;
  sendCommentStatus: RequestStatus;
}

const initialState: CommentsSlice = {
  comments: [],
  commentsStatus: RequestStatus.Idle,
  sendCommentStatus: RequestStatus.Idle,
};

export const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferComments.pending, (state) => {
        state.commentsStatus = RequestStatus.Loading;
      })
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsStatus = RequestStatus.Success;
      })
      .addCase(fetchOfferComments.rejected, (state) => {
        state.commentsStatus = RequestStatus.Error;
      })
      .addCase(sendComment.pending, (state) => {
        state.sendCommentStatus = RequestStatus.Loading;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.sendCommentStatus = RequestStatus.Success;
      })
      .addCase(sendComment.rejected, (state) => {
        state.sendCommentStatus = RequestStatus.Error;
      });

  },
});
