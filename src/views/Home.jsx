import React from 'react';

import Navigation from './../components/Navigation';
import Header from './../components/header/Header';
import About from './../components/about/About';


class Home extends React.Component {
  render() {
    return (
			<div>
				<Navigation />
				<Header />
				<About />
			</div>
    );
  }
}

export default Home;
