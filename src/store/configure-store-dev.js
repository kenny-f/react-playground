import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers';
import loginSaga from '../sagas/login-saga';

const logger = createLogger();

const sagas = [
  loginSaga,
];

const reduxRouterMiddleware = syncHistory(browserHistory);

const finalCreateStore = applyMiddleware(
  sagaMiddleware(...sagas), reduxRouterMiddleware, logger)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
