import { IWithLoaded, IWithPending, IWithError } from '../../../utils/models';
import { AIRPORTS_ENTRIES } from '../../../config/airportsConfig';
import { getEntriesFromDatFile } from '../../../utils/helpers';
import { IAirport } from '../_models/airportModel';
import {
  mainTypes,
  GET_AIRPORTS,
  GET_AIRPORTS_SUCCESS,
  GET_AIRPORTS_FAIL,
} from './mainTypes';

export interface IMainReducer extends IWithLoaded, IWithPending, IWithError {
  airportsList: IAirport[];
}

const initialState: IMainReducer = {
  airportsList: [],
  _pending: false,
  _loaded: false,
  _error: null,
};

const mainReducer = (state = initialState, action: mainTypes) => {
  switch (action.type) {
    case GET_AIRPORTS:
      return { ...state, _pending: true, _loaded: false };

    case GET_AIRPORTS_SUCCESS: {
      const airportsList = getEntriesFromDatFile(
        action.payload,
        AIRPORTS_ENTRIES,
      );
      return {
        ...state,
        airportsList,
        _pending: false,
        _loaded: true,
      };
    }

    case GET_AIRPORTS_FAIL:
      return { ...state, _loaded: false, _pending: false };

    default:
      return state;
  }
};

export default mainReducer;
