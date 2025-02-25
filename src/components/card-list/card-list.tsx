import Card from '../card/card.tsx';
import {OfferPreview} from '../../types/offer.ts';


type CardListProps = {
  offers: OfferPreview[];
  onCardHover: (offerId: OfferPreview['id'] | null) => void;
};

export default function CardList({offers, onCardHover}: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onCardHover={onCardHover} />
      ))}
    </div>
  );


}
