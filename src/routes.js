import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

console.log('');
console.log('');
console.log('hhh');

export default (
  <Route component={App} path="/">
    <IndexRoute component={Home} />
    <Route component={Dashboard} path="dashboard"/>
  </Route>
);

//     <IndexRoute component={Home} />
// <Route component={Login} path="/login" />
