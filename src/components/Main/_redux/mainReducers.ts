import { IWithLoaded, IWithPending, IWithError } from '../../../utils/models';
import {
  AIRPORTS_ENTRIES,
  ROUTES_ENTRIES,
} from '../../../config/airportsConfig';
import { getEntriesFromDatFile } from '../../../utils/helpers';
import { IAirport, IRoute } from '../_models/airportModel';
import {
  mainTypes,
  GET_AIRPORTS,
  GET_AIRPORTS_SUCCESS,
  GET_AIRPORTS_FAIL,
  GET_ROUTES,
  GET_ROUTES_SUCCESS,
  GET_ROUTES_FAIL,
} from './mainTypes';

export interface IMainReducer extends IWithLoaded, IWithPending, IWithError {
  airportsList: IAirport[];
  routesList: IRoute[];
}

const initialState: IMainReducer = {
  airportsList: [],
  routesList: [],
  _pending: false,
  _loaded: false,
  _error: null,
};

const mainReducer = (state = initialState, action: mainTypes) => {
  switch (action.type) {
    // GET_AIRPORTS
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

    // GET_ROUTES
    case GET_ROUTES:
      return { ...state, _pending: true, _loaded: false };

    case GET_ROUTES_SUCCESS: {
      const routesList = getEntriesFromDatFile(action.payload, ROUTES_ENTRIES);
      return {
        ...state,
        routesList,
        _pending: false,
        _loaded: true,
      };
    }

    case GET_ROUTES_FAIL: {
      return { ...state, _loaded: false, _pending: false };
    }

    default:
      return state;
  }
};

export default mainReducer;
