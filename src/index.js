import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';

import App from './app';
import reducers from './reducers';

const initialState = Map({});

const loggerMiddleware = createLogger({
  level: 'info',
  collasped: true,
});

const reducer = combineReducers(reducers);

const store = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)(createStore)(reducer, initialState);

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
//
// const reducer = combineReducers(reducers);
//
// const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
