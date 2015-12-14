import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import styles from './navigation.css';

class Navigation extends React.Component {
	render() {

		const navStyle = {

		};

		const style = {
			textTransform: 'uppercase',
		fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
		fontWeight: 700,
		color: '#f05f40',
		};

		return (
			<nav id="mainNav"
					 className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					{/* Brand and toggle get grouped for better mobile display */}
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
										data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a
							style={style}
							href="#page-top">Start Bootstrap</a>
					</div>

					{/* Collect the nav links, forms, and other content for toggling */}
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a className="page-scroll" href="#about">About</a>
							</li>
							<li>
								<a className="page-scroll" href="#services">Services</a>
							</li>
							<li>
								<a className="page-scroll" href="#portfolio">Portfolio</a>
							</li>
							<li>
								<a className="page-scroll" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
					{/* .navbar-collapse */}
				</div>
				{/* .container-fluid */}
			</nav>
		);
	}
}

export default Radium(Navigation);
