import {User} from './userData.ts';

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type CommentPost = {
  comment: string;
  rating: number;
  offerId: string;
}

