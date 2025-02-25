import {useRef, useEffect } from 'react';
import leaflet, {layerGroup, Marker} from 'leaflet';
import useMap from '../../hook/use-map.tsx';
import {OfferPreview} from '../../types/offer.ts';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';
const ZOOM_DEFAULT = 13;


type MapProps = {
  activeCardId: OfferPreview['id'] | null;
  offers: OfferPreview[];
  className: string;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

export default function Map({ offers, activeCardId, className}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.map(({location, id}) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        marker
          .setIcon(
            activeCardId === id ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  useEffect(() => {
    if (map) {
      map.setView([offers[0].location.latitude, offers[0].location.longitude], ZOOM_DEFAULT);
    }
  }, [offers, map]);


  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}


