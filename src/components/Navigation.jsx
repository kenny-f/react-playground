import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

// import styles from './navigation.css';

class Navigation extends React.Component {
  render() {
    const navbarStyle = {
      borderColor: 'rgba(34,34,34,.05)',
      fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
      backgroundColor: '#fff',
      'WebkitTransition': 'all .35s',
      'MozTransition': 'all .35s',
      'transition': 'all .35s',

      '@media (min-width:768px)': {
        'borderColor': 'rgba(255,255,255,.3)',
        'backgroundColor': 'transparent',
      },
    };

    const brand = {
      textTransform: 'uppercase',
      fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
      fontWeight: 700,
      color: '#f05f40',
      ':hover': {
        color: '#eb3812',
      },
      ':focus': {
        color: '#eb3812',
      },

      '@media (min-width:768px)': {
        color: 'rgba(255,255,255,.7)',
        ':hover': {
          color: '#fff',
        },
        ':focus': {
          color: '#fff',
        },
      },
    };

    const navItem = {
      textTransform: 'uppercase',
      fontSize: '13px',
      fontWeight: 700,
      color: '#222',
      ':hover': {
        color: '#f05f40',
      },
      '@media (min-width:768px)': {
        color: 'rgba(255,255,255,.7)',
        ':hover': {
          color: '#fff',
        },
      },
    };

    return (
      <nav id="mainNav"
           className="navbar navbar-default navbar-fixed-top"
           style={navbarStyle}
           key="navbar">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll"
               style={brand}
               key="brand"
               href="#page-top">Start Bootstrap</a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll"
                   style={navItem}
                   key="about"
                   href="#about">About</a>
              </li>
              <li>
                <a className="page-scroll"
                   style={navItem}
                   key="services"
                   href="#services">Services</a>
              </li>
              <li>
                <a className="page-scroll"
                   style={navItem}
                   key="contact"
                   href="#contact">Contact</a>
              </li>
              <li>
                <a className="page-scroll"
                   style={navItem}
                   key="login"
                   href="#contact">Login</a>
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
