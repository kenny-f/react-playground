import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import styles from './line-styles';

class Line extends Component {
  render() {
    return (
      <hr style={[styles.base, styles[this.props.color]]}/>
    );
  }
}

Line.propTypes = {
  color: PropTypes.string,
};

export default radium(Line);
