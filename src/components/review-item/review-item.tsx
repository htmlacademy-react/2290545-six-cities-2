import {getRatingStarsStyle} from '../../utils/utils.ts';
import {Review} from '../../types/review.ts';
import dayjs from 'dayjs';
import {DateFormat} from '../../const.ts';

type ReviewItemProps = {
  review: Review;
};

export function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const {user, comment, rating} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingStarsStyle(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={dayjs().format(DateFormat.AttributeFormat)}
        >
          {dayjs().format(DateFormat.ReviewDateFormat)}
        </time>
      </div>
    </li>
  );
}
