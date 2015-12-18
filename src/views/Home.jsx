import React from 'react';
import CSSModules from 'react-css-modules';

import Navigation from './../components/Navigation';
import Header from './../components/header/Header';
import About from './../components/about/About';

import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
			<div styleName="main">
				<Navigation />
				<Header />
				<About />
			</div>
    );
  }
}

export default CSSModules(Home, styles);
