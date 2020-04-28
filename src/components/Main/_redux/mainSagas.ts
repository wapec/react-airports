import Axios from 'axios';
import { call, takeLeading, put } from 'redux-saga/effects';

import {
  GET_AIRPORTS,
  GET_AIRPORTS_SUCCESS,
  GET_AIRPORTS_FAIL,
} from './mainTypes';
import { getAirportsAction } from './mainActions';

const airPortsUrl =
  'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat';

function* getAirportsSaga({ callback }: ReturnType<typeof getAirportsAction>) {
  try {
    const { data } = yield call(() => Axios.get(airPortsUrl));
    yield put({ type: GET_AIRPORTS_SUCCESS, payload: data });
    if (callback) callback();
  } catch (error) {
    yield put({ type: GET_AIRPORTS_FAIL, payload: error });
  }
}

export default function* mainSaga() {
  yield takeLeading(GET_AIRPORTS, getAirportsSaga);
}
