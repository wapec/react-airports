import React, {
  FC,
  memo,
  ChangeEvent,
  useState,
  MouseEvent,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Card, Label } from 'semantic-ui-react';
import { isEmpty } from 'ramda';

import { areEqual } from '../../../utils/helpers';
import useDebounce from '../../../hooks/useDebounce';
import { IAirport } from '../../Main/_models/airportModel';
import { setSearchAction } from './_redux/searchActions';
import { searchSelector } from './_redux/searchSelectors';

import styles from './SearchInput.module.scss';

interface IOwnProps {
  list: any[];
  searchCondition: string[];
  onResultClick: (e: MouseEvent, list: any[]) => void;
}

type Props = IOwnProps;

const SearchInput: FC<Props> = ({ list, onResultClick, searchCondition }) => {
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
                header={iata}
                meta={icao}
                description={`${name} / ${city}, ${country}`}
                data-id={id}
                onClick={onCardClickHandler}
              ></Card>
            ),
          )}
        </div>
      )}
      {isEmpty(searchResults) && searchAvailabilityFlag && (
        <span className={styles.noResults}>No results</span>
      )}
    </div>
  );
};

export default memo(SearchInput, areEqual);
