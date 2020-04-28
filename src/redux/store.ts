import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import mainReducer from '../components/Main/_redux/mainReducers';
import searchReducer from '../components/_common/SearchInput/_redux/searchReducers';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  main: mainReducer,
  search: searchReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const middleware: SagaMiddleware[] = [sagaMiddleware];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store: any = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
