import {Link} from 'react-router-dom';
import {AppRoute, housing} from '../../const.ts';
import {OfferPreview} from '../../types/offer.ts';
import {getRatingStarsStyle} from '../../utils/utils.ts';
import {BookmarkButton} from '../bookmark-button/bookmark-button.tsx';


type CardProps = {
  offer: OfferPreview;
  onCardHover?: (offerId: OfferPreview['id'] | null) => void;
};

export default function Card({offer, onCardHover}: CardProps) {
  const {
    previewImage,
    isPremium,
    title,
    type,
    rating,
    price,
    id,
  } = offer;

  const handleCardOver = () => {
    onCardHover?.(offer.id);
  };

  const handleCardLeave = () => {
    onCardHover?.(null);
  };

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className="cities__image-wrapper place-card__image-wrapper"
        onMouseOver={handleCardOver}
        onMouseLeave={handleCardLeave}
      >
        <Link to={`${AppRoute.cardOffer}/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
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
          <Link to={`${AppRoute.cardOffer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{housing[type]}</p>
      </div>
    </article>

  );
}


