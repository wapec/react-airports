import React, { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { areEqual } from '../../utils/helpers';
import { getAirportsAction, getRoutesAction } from './_redux/mainActions';
import SearchAirport from './SearchAirport/SearchAirport';

import styles from './Main.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const Main: FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirportsAction());
    dispatch(getRoutesAction());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <SearchAirport />
    </div>
  );
};

export default memo(Main, areEqual);
