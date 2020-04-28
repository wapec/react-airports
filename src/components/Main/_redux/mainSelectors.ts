import { AppState } from '../../../redux/store';
import { IMainReducer } from './mainReducers';

export const mainSelector = (state: AppState): IMainReducer => state.main;
