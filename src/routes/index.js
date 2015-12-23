import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from '../layouts/CoreLayout';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';

export default (
	<Route component={CoreLayout} path="/">
		<IndexRoute component={Home} />
		<Route component={Dashboard} path="/dashboard" />
	</Route>
);
