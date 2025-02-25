import {getRatingStarsStyle} from '../../utils/utils.ts';
import {OfferPreview} from '../../types/offer.ts';
import {housing} from '../../const.ts';
import {BookmarkButton} from '../bookmark-button/bookmark-button.tsx';

type FavoriteCardProps = {
  offer: OfferPreview;
};

export default function FavoriteCard({offer}: FavoriteCardProps) {
  const {previewImage, title, type, rating, price} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <BookmarkButton id={offer.id} block={'place-card'}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingStarsStyle(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{housing[type]}</p>
      </div>
    </article>
  );
}
