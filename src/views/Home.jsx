import React from 'react';

import Navigation from './../components/Home/navigation/Navigation';
import Header from './../components/header/Header';
import About from './../components/about/About';
import Services from './../components/services/Services';


class Home extends React.Component {
  render() {
    return (
			<div>
				<Navigation />
				<Header />
				<About />
				<Services />
			</div>
    );
  }
}

export default Home;
