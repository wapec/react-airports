import { all } from 'redux-saga/effects';

import mainSaga from '../components/Main/_redux/mainSagas';

export default function* rootSaga() {
  yield all([mainSaga()]);
}
