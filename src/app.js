import React from 'react';
import { render } from 'react-dom';
import {Router, Route } from 'react-router';

import Root from './containers/Root';
import routes from './routes';
import styles from './styles/app.css';

render(
	<Root routes={routes} />,
	document.getElementById('root')
);
