import React from 'react';
import radium from 'radium';
import Affix from 'react-overlays/lib/Affix';
import styles from './styles';
import {Link} from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <Affix offsetTop={100} affixStyle={styles.navbarAffix}>
        <nav id="mainNav"
             className="navbar navbar-default navbar-fixed-top"
             style={styles.navbarStyle}
             key="navbar">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <a className="navbar-brand page-scroll"
                 style={styles.brand}
                 key="brand"
                 href="#page-top">Start Bootstrap</a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="page-scroll"
                     style={styles.navItem}
                     key="about"
                     href="#about">About
                  </a>
                </li>
                <li>
                  <a className="page-scroll"
                     style={styles.navItem}
                     key="services"
                     href="#services">Services
                  </a>
                </li>
                <li>
                  <a className="page-scroll"
                     style={styles.navItem}
                     key="contact"
                     href="#contact">Contact
                  </a>
                </li>
                <li>
                  <Link to="/login" style={styles.navItem}>Login</Link>
                </li>
              </ul>
            </div>
            {/* .navbar-collapse */}
          </div>
          {/* .container-fluid */}
        </nav>
      </Affix>
    );
  }
}

export default radium(Navigation);
