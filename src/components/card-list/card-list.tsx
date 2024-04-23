import Card from '../../components/card/card';
import {useState} from 'react';
import {Offer} from '../../types/offer.ts';

type CardListProps = {
  offers: Offer[];
  className: string;
};

export default function CardList({offers, className}: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  return (
    <div className={`${className} places__list`}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={() => setActiveCard(offer.id)}/>
      ))}
    </div>
  );
}

