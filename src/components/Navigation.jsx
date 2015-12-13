import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import styles from './navigation.css';

class Navigation extends React.Component {
	render() {
		return (
			<Navbar fixedTop={true} styleName="navbar">
				<Navbar.Header>
					<Navbar.Brand styleName="brand">
						<Link to="/">Stay on budget</Link>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem styleName="navItem" eventKey={1} href="#">About</NavItem>
						<NavItem styleName="navItem" eventKey={2} href="#">Contact</NavItem>
						<NavItem styleName="navItem" eventKey={3} href="#">Login</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default CSSModules(Navigation, styles);
