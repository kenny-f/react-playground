import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import loginSaga from '../sagas/loginSaga';

const logger = createLogger({
  stateTransformer: state => {
    return JSON.stringify(state);
  },
});

const finalCreateStore = applyMiddleware(
  sagaMiddleware(...loginSaga), logger)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
