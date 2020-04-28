import React, { FC } from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { isEmpty } from 'ramda';
import clsx from 'clsx';

import { MAP_CONFIG } from '../../../config/mapConfig';
import { IMarker, IPosition } from '../_models/mapModel';

import styles from './Map.module.scss';

interface IOwnProps {
  markers: IMarker[];
  center: IPosition;
  zoom?: number;
  lines?: IPosition[][];
  className?: string;
}

type Props = IOwnProps;

const LeafMap: FC<Props> = ({ markers, center, className, lines, zoom }) => {
  const opacityHandler = (lat: number, lng: number): number => {
    return center.lat === lat && center.lng === lng ? 1 : 0.5;
  };

  return (
    <Map
      center={center}
      zoom={zoom || MAP_CONFIG.zoom}
      minZoom={MAP_CONFIG.minZoom}
      maxZoom={MAP_CONFIG.maxZoom}
      className={clsx(styles.root, className)}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {!isEmpty(markers) &&
        markers.map(({ lat, lng, info, id }: IMarker) => (
          <Marker
            position={{ lat, lng }}
            opacity={opacityHandler(lat, lng)}
            key={id}
          >
            <Popup>{info}</Popup>
          </Marker>
        ))}
      {lines &&
        !isEmpty(lines) &&
        lines.map((line, index) => <Polyline positions={line} key={index} />)}
    </Map>
  );
};

export default LeafMap;
