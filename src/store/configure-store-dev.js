// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
// import saga from 'redux-saga';
import rootReducer from '../reducers';

// const logger = createLogger({
//  stateTransformer: state => {
//    let newState = {};
//
//    for (var i of Object.keys(state)) {
//      if (Immutable.Iterable.isIterable(state[i])) {
//        newState[i] = state[i].toJS();
//      } else {
//        newState[i] = state[i];
//      }
//    }
//
//    return newState;
//  },
// });

const logger = createLogger();

const finalCreateStore = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
