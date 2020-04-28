import React, {
  FC,
  memo,
  useMemo,
  useState,
  MouseEvent,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { areEqual } from '../../../utils/helpers';
import { IAirport } from '../_models/airportModel';
import LeafMap from '../Map/Map';
import { mainSelector } from '../_redux/mainSelectors';
import { searchSelector } from '../SearchInput/_redux/searchSelectors';
import { IMarker, IPosition } from '../_models/mapModel';
import SearchInput from '../SearchInput/SearchInput';
import { MAP_CONFIG } from '../../../config/mapConfig';

import styles from './SearchAirport.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const SearchAirport: FC<Props> = () => {
  const [mapCenter, setMapCenter] = useState<IPosition>({
    lat: 51.477928,
    lng: -0.001545,
  }); // London City
  const [hubAirport, setHubAirport] = useState<IAirport | null>(null);
  const [zoom, setZoom] = useState(MAP_CONFIG.zoom);
  const searchCondition = ['iata', 'name', 'country', 'city'];

  const { airportsList } = useSelector(mainSelector);
  const { searchResults } = useSelector(searchSelector);

  const transformForMapMarker: IMarker[] = useMemo(() => {
    setZoom(MAP_CONFIG.zoom);
    let markers = [] as IMarker[];
    searchResults.forEach(({ lat, lng, name, id }: IAirport) => {
      if (!Number.isNaN(+lat) && !Number.isNaN(+lng))
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

  const onResultClickHandler = (e: MouseEvent, list: IAirport[]) => {
    const airport = getAirport(e, list);
    if (airport && airport.lat && airport.lng) {
      setMapCenter({ lat: +airport.lat, lng: +airport.lng });
      setZoom(MAP_CONFIG.optimalZoom);
    }
  };

  const onIconClickHandler = (e: MouseEvent, list: IAirport[]) => {
    const airport = getAirport(e, list);
    setHubAirport(airport);
    setZoom(MAP_CONFIG.optimalZoom);
  };

  useEffect(() => {
    // console.log(hubAirport);
  }, [hubAirport]);

  return (
    <div className={styles.root}>
      <LeafMap
        markers={transformForMapMarker}
        center={mapCenter}
        zoom={zoom}
        className={styles.map}
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
