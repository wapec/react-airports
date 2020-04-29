import React, {
  FC,
  memo,
  useMemo,
  useState,
  MouseEvent,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'ramda';

import { areEqual } from '../../../utils/helpers';
import { IAirport } from '../_models/airportModel';
import LeafMap from '../Map/Map';
import { mainSelector } from '../_redux/mainSelectors';
import { searchSelector } from '../SearchInput/_redux/searchSelectors';
import { IMarker, IPosition } from '../_models/mapModel';
import SearchInput from '../SearchInput/SearchInput';
import { MAP_CONFIG } from '../../../config/mapConfig';
import { getAllDestinations } from '../_helpers/routesHelpers';

import styles from './SearchAirport.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const SearchAirport: FC<Props> = () => {
  const [mapCenter, setMapCenter] = useState<IPosition>({
    lat: 51.477928,
    lng: -0.001545,
  }); // Greenwich
  const [zoom, setZoom] = useState(MAP_CONFIG.zoom);
  const [hubAirport, setHubAirport] = useState<IAirport | null>(null);
  const [airportsTo, setAirportsTo] = useState<IAirport[]>([]);
  const [routesLines, setRouteLines] = useState<IPosition[][]>([]);

  const { airportsList, routesList } = useSelector(mainSelector);
  const { searchResults } = useSelector(searchSelector);

  const searchCondition = ['iata', 'name', 'country', 'city'];

  const clearInfo = () => {
    setZoom(MAP_CONFIG.zoom);
    setAirportsTo([]);
    setRouteLines([]);
  };

  const isPositionValid = (lat: number, lng: number) => {
    return !Number.isNaN(lat) && !Number.isNaN(lng);
  };

  const transformForMapMarker: IMarker[] = useMemo(() => {
    clearInfo();
    let markers = [] as IMarker[];
    searchResults.forEach(({ lat, lng, name, id }: IAirport) => {
      if (isPositionValid(+lat, +lng))
        markers = [...markers, { lat: +lat, lng: +lng, info: name, id }];
    });
    return markers;
  }, [searchResults]);

  const getAirport = (e: MouseEvent, list: IAirport[]): IAirport | null => {
    const airportId =
      e.currentTarget && e.currentTarget.getAttribute('data-id');
    const foundAirport = list.find(item => item.id === airportId);
    return foundAirport || null;
  };

  const focusOnAirportHandler = (airport: IAirport) => {
    const { lat, lng } = airport;
    if (isPositionValid(+lat, +lng)) setMapCenter({ lat: +lat, lng: +lng });
    setZoom(MAP_CONFIG.optimalZoom);
  };

  const onResultClickHandler = (e: MouseEvent, list: IAirport[]) => {
    const airport = getAirport(e, list);
    if (airport && isPositionValid(+airport.lat, +airport.lng)) {
      focusOnAirportHandler(airport);
    }
  };

  const onIconClickHandler = (e: MouseEvent, list: IAirport[]) => {
    const airport = getAirport(e, list);
    if (airport && isPositionValid(+airport.lat, +airport.lng)) {
      setHubAirport(airport);
    }
  };

  useEffect(() => {
    if (hubAirport) {
      focusOnAirportHandler(hubAirport);
      if (!isEmpty(routesList)) {
        const routesTo = getAllDestinations(hubAirport, routesList);
        const airportsIataTo = routesTo
          .map(route => route.sourceAirport)
          .join(',');
        setAirportsTo(
          airportsList.filter(airport => airportsIataTo.includes(airport.iata)),
        );
      }
    }
  }, [hubAirport]);

  useEffect(() => {
    if (!isEmpty(airportsTo) && hubAirport) {
      const { lat, lng } = hubAirport;
      const lines = airportsTo.reduce((acc: any, curr: IAirport) => {
        acc = [
          ...acc,
          [
            { lat, lng },
            { lat: +curr.lat, lng: +curr.lng },
          ],
        ];
        return acc;
      }, []);
      setRouteLines(lines);
    }
  }, [airportsTo]);

  return (
    <div className={styles.root}>
      <LeafMap
        markers={transformForMapMarker}
        center={mapCenter}
        zoom={zoom}
        className={styles.map}
        lines={routesLines}
      />
      <div className={styles.searchContainer}>
        <SearchInput
          list={airportsList}
          searchCondition={searchCondition}
          onResultClick={onResultClickHandler}
          onIconClick={onIconClickHandler}
        />
      </div>
    </div>
  );
};

export default memo(SearchAirport, areEqual);
