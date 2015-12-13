import React from 'react';
import { render } from 'react-dom';
import {Router, Route } from 'react-router';

import Component from './Component.jsx';
import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';
import styles from './app.css';

// render(<Navigation />, document.getElementById('root'));

render(
  (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  ),
  document.getElementById('root')
);
