import {Offer} from '../../types/offer.ts';
import Card from '../../components/card/card';
import {useState} from 'react';
import {MouseEvent} from 'react';

type CardListProps = {
  offers: Offer[];
  onMouseOver?: (evt: MouseEvent) => void;
};

function CardList({offers, onMouseOver}: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  console.log(activeCard);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={()=> setActiveCard(offer.id)}/>
      ))}
    </div>
  );
}

export default CardList;
