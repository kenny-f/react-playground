import React from 'react';
import CSSModules from 'react-css-modules';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import styles from './navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar styleName="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            Stay on Budget
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
            <NavItem eventKey={3} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CSSModules(Navigation, styles);
