import {getRatingStarsStyle} from '../../utils/utils.ts';
import {Review} from '../../types/review.ts';
import dayjs from 'dayjs';
import {DateFormat} from '../../const';

type ReviewProps = {
  reviews: Review[];
}

export function ReviewList({reviews}: ReviewProps): JSX.Element {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map(({rating, id, user, comment, date}) => (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar"
                  src={user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: getRatingStarsStyle(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment}
              </p>
              <time
                className="reviews__time"
                dateTime={dayjs(date).format(DateFormat.ATTRIBUTE_FORMAT)}
              >
                {dayjs(date).format(DateFormat.REVIEW_DATE_FORMAT)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
