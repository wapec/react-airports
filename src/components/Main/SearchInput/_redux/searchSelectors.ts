import { AppState } from '../../../../redux/store';
import { ISearchReducer } from './searchReducers';

export const searchSelector = (state: AppState): ISearchReducer => state.search;
