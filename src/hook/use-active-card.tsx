import {useState} from 'react';
import {OfferPreview} from '../types/offer.ts';
import {useAppSelector} from './use-app-selector.tsx';
import {getOffers} from '../store/offers/selector.ts';

export const useActiveCard = () => {
  const offers = useAppSelector(getOffers);
  const [activeCard, setActiveCard] = useState<OfferPreview>(offers[0]);

  return {activeCard, setActiveCard};
};
