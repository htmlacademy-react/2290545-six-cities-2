import {getRatingStarsStyle} from '../../utils/utils.ts';
import {Review} from '../../types/review.ts';

type ReviewProps = {
  reviews: Review[];
}

export default function ReviewList({reviews}: ReviewProps): JSX.Element {

  return (
    <section>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {reviews.map(({rating, id, user, comment}) => (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
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
              <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
