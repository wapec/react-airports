import Axios from 'axios';
import { call, takeLeading, put } from 'redux-saga/effects';

import {
  GET_AIRPORTS,
  GET_AIRPORTS_SUCCESS,
  GET_AIRPORTS_FAIL,
  GET_ROUTES,
  GET_ROUTES_SUCCESS,
  GET_ROUTES_FAIL,
} from './mainTypes';
import { getAirportsAction, getRoutesAction } from './mainActions';

const airportsUrl =
  'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat';
const routesUrl =
  'https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat';

function* getAirportsSaga({ callback }: ReturnType<typeof getAirportsAction>) {
  try {
    const { data } = yield call(() => Axios.get(airportsUrl));
    yield put({ type: GET_AIRPORTS_SUCCESS, payload: data });
    if (callback) callback();
  } catch (error) {
    yield put({ type: GET_AIRPORTS_FAIL, payload: error });
  }
}

function* getRoutesSaga({ callback }: ReturnType<typeof getRoutesAction>) {
  try {
    const { data } = yield call(() => Axios.get(routesUrl));
    yield put({ type: GET_ROUTES_SUCCESS, payload: data });
    if (callback) callback();
  } catch (error) {
    yield put({ type: GET_ROUTES_FAIL, payload: error });
  }
}

export default function* mainSaga() {
  yield takeLeading(GET_AIRPORTS, getAirportsSaga);
  yield takeLeading(GET_ROUTES, getRoutesSaga);
}
