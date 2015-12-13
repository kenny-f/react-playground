import React from 'react';
import CSSModules from 'react-css-modules';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import styles from './header.css';

class Header extends React.Component {
	render() {
		return (
				<header styleName="header">
					<div styleName="header-content">
						<div styleName="header-content-inner">
							<h1 styleName="tagline">Your Favorite Source of Free Bootstrap Themes</h1>
							<hr styleName="hr"/>
								<p styleName="p">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
								<a href="#about" className="page-scroll" styleName="btn">Find Out More</a>
						</div>
					</div>
				</header>
		);
	}
}

export default CSSModules(Header, styles);
