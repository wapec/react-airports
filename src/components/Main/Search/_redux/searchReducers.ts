import {
  IWithLoaded,
  IWithPending,
  IWithError,
} from '../../../../utils/models';
import { searchTypes, SET_SEARCH } from './searchTypes';

export interface ISearchReducer extends IWithLoaded, IWithPending, IWithError {
  searchResults: any[];
}

const initialState: ISearchReducer = {
  searchResults: [],
  _pending: false,
  _loaded: false,
  _error: null,
};

const searchReducer = (state = initialState, action: searchTypes) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
};

export default searchReducer;
