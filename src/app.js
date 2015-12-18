import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';
import routes from './routes';

render(
	<Root routes={routes} />,
	document.getElementById('root')
);
