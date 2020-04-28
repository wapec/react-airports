import React, { FC, memo, useMemo, useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { areEqual } from '../../../utils/helpers';
import { IAirport } from '../_models/airportModel';
import LeafMap from '../../_common/Map/Map';
import { mainSelector } from '../_redux/mainSelectors';
import { searchSelector } from '../../_common/SearchInput/_redux/searchSelectors';
import { IMarker, IPosition } from '../_models/mapModel';
import SearchInput from '../../_common/SearchInput/SearchInput';

import styles from './SearchAirport.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const SearchAirport: FC<Props> = () => {
  const [mapCenter, setMapCenter] = useState<IPosition>({
    lat: 51.505,
    lng: -0.09,
  });
  const searchCondition = ['iata', 'name', 'country', 'city'];

  const { airportsList } = useSelector(mainSelector);
  const { searchResults } = useSelector(searchSelector);

  const transformForMapMarker: IMarker[] = useMemo(() => {
    let markers = [] as IMarker[];
    searchResults.forEach(({ lat, lng, name, id }: IAirport) => {
      if (!Number.isNaN(+lat) && !Number.isNaN(+lng))
        markers = [...markers, { lat: +lat, lng: +lng, info: name, id }];
    });
    return markers;
  }, [searchResults]);

  const onResultClickHandler = (e: MouseEvent, list: any[]) => {
    const airportId =
      e.currentTarget && e.currentTarget.getAttribute('data-id');
    const foundAirport = list.find(item => item.id === airportId);
    if (foundAirport && foundAirport.lat && foundAirport.lng)
      setMapCenter({ lat: +foundAirport.lat, lng: +foundAirport.lng });
  };

  return (
    <div className={styles.root}>
      <LeafMap
        markers={transformForMapMarker}
        center={mapCenter}
        className={styles.map}
      />
      <div className={styles.searchContainer}>
        <SearchInput
          searchCondition={searchCondition}
          onResultClick={onResultClickHandler}
          list={airportsList}
        />
      </div>
    </div>
  );
};

export default memo(SearchAirport, areEqual);
