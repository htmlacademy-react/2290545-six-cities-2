import {Offer} from '../../types/offer.ts';
import Card from '../../components/card/card';
import {useState} from 'react';

type CardListProps = {
  offers: Offer[];
  className: String;
};

export default function CardList({offers, className}: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  return (
    <div className={`${className} places__list`}>
         {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={() => setActiveCard(offer.id)} className="near-places__list"/>
      ))}
    </div>
  );
}

