import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import loginSaga from '../sagas/login-saga';

const logger = createLogger({
  stateTransformer: state => {
    return JSON.stringify(state);
  },
});

const sagas = [
  loginSaga,
];

const finalCreateStore = applyMiddleware(
  sagaMiddleware(...sagas), logger)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
