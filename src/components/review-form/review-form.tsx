import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { MAX_COMMENTS_LENGTH, MIN_COMMENTS_LENGTH } from '../../const.ts';
import { sendComment } from '../../store/api-actions.ts';
import { useAppDispatch } from '../../hook/use-app-dispatch.tsx';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hook/use-app-selector.tsx';
import { sendCommentsLoadingStatus } from '../../store/comments/selector.ts';
import { toast } from 'react-toastify';

const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not-bad',
  '2': 'badly',
  '1': 'terribly',
};

export default function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isLoading = useAppSelector(sendCommentsLoadingStatus);

  function handleTextAriaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setRating(evt.target.value);
  }

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!id) {
      toast.error('ID предложения не найден');
      return;
    }

    dispatch(sendComment({
      offerId: id,
      comment: comment,
      rating: Number(rating),
    })).unwrap()
      .then(() => {
        setRating('');
        setComment('');
      }).catch(() => {
        toast.error('Комментарий не отправился');
      });
  };

  const isValidRating = ['1', '2', '3', '4', '5'].includes(rating);
  const isValid = comment.length >= MIN_COMMENTS_LENGTH &&
    comment.length <= MAX_COMMENTS_LENGTH &&
    isValidRating;

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingMap)
          .reverse()
          .map(([score, title]) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={rating === score}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextAriaChange}
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_COMMENTS_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
