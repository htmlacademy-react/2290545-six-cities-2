import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../const.ts';
import {Offer} from '../types/offer.ts';
import useMap from '../hooks/use-map.tsx';


type MapProps = {
  offers: Offer[];
  selectedPoint: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {offers, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
