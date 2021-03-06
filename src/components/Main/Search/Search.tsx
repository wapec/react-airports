import React, {
  FC,
  memo,
  ChangeEvent,
  useState,
  MouseEvent,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Card, Label, Popup, Icon } from 'semantic-ui-react';
import { isEmpty } from 'ramda';
import clsx from 'clsx';

import { areEqual } from '../../../utils/helpers';
import useDebounce from '../../../hooks/useDebounce';
import { IAirport } from '../_models/airportModel';
import { setSearchAction } from './_redux/searchActions';
import { searchSelector } from './_redux/searchSelectors';

import styles from './Search.module.scss';

interface IOwnProps {
  list: any[];
  searchCondition: string[];
  onResultClick: (e: MouseEvent, list: IAirport[]) => void;
  onIconClick: (e: MouseEvent, list: IAirport[]) => void;
}

type Props = IOwnProps;

const Search: FC<Props> = ({
  list,
  onResultClick,
  searchCondition,
  onIconClick,
}) => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector(searchSelector);
  const [searchValue, setSearchValue] = useState('');
  const searchDebounce = useDebounce(searchValue, 800);
  const searchAvailabilityFlag =
    searchValue && searchValue.length >= 3 && searchDebounce;

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value || '');
  };

  const onCardClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    onResultClick(e, list);
  };

  const onIconClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    onIconClick(e, list);
  };

  useEffect(() => {
    let results = [];
    if (searchAvailabilityFlag) {
      results = list.filter(item =>
        searchCondition
          .map(condition => item[condition] && item[condition].toLowerCase())
          .join(',')
          .includes(searchValue.toLowerCase()),
      );
    }
    dispatch(setSearchAction(results));
  }, [searchValue, list, searchAvailabilityFlag, dispatch]);

  return (
    <div className={styles.root}>
      <Input
        icon="search"
        placeholder="Search airport"
        className={styles.searchInput}
        transparent
        loading={!searchDebounce && !!searchValue}
        onChange={onInputChangeHandler}
      />
      {!isEmpty(searchResults) && (
        <div className={styles.resultsWrapper}>
          <Label
            className={styles.resultLabel}
            attached="top right"
            size="tiny"
          >
            {searchResults.length}{' '}
            {searchResults.length > 1 ? 'results' : 'result'}
          </Label>
          {searchResults.map(
            (
              { iata, name, country, city, icao, id }: IAirport,
              index: number,
            ) => (
              <Card
                key={index}
                header={
                  <Popup
                    content="Where can I fly from here? Click"
                    position="top right"
                    inverted
                    basic
                    trigger={
                      <div className={clsx('header', styles.popupHeader)}>
                        {iata}
                        <span onClick={onIconClickHandler} data-id={id}>
                          <Icon name="globe" />
                        </span>
                      </div>
                    }
                  />
                }
                meta={icao}
                description={`${name} / ${city}, ${country}`}
                data-id={id}
                onClick={onCardClickHandler}
              ></Card>
            ),
          )}
          <span>
            Data from{' '}
            <a href="https://openflights.org/data.html">OpenFlights</a>
          </span>
        </div>
      )}
      {isEmpty(searchResults) && searchAvailabilityFlag && (
        <span className={styles.noResults}>No results</span>
      )}
    </div>
  );
};

export default memo(Search, areEqual);
