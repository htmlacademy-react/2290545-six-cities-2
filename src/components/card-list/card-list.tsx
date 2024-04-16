import {Offer} from '../../types/offer.ts';
import Card from '../../components/card/card';
import {useState} from 'react';


type CardListProps = {
  offers: Offer[];
  className: string;
};

export default function CardList({offers, className}: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={() => setActiveCard(offer.id)}/>
      ))}
    </div>
  );
}

