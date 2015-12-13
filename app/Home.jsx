import React from 'react';

import Navigation from './Navigation';
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
			<div>
				<Navigation />
				<Header />
			</div>
    );
  }
}

export default Home;
