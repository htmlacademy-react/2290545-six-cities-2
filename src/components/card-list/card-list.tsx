import Card from '../../components/card/card';
import {Offer} from '../../types/offer.ts';

type CardListProps = {
  offers: Offer[];
  className: string;
};

export default function CardList({offers, className}: CardListProps): JSX.Element {

  return (
    <div className={`${className} places__list`}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

