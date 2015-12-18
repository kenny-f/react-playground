import React from 'react';
import Radium from 'radium';
import styles from './button-styles';

// <a href="#about"
// class="btn btn-primary btn-xl page-scroll">
// Find Out More</a>
class Button extends React.Component {
  render() {
    return (
      <a style={styles.base}>
        {this.props.children}
      </a>
    );
  }
}

export default Radium(Button);
