import React from 'react';
import Radium from 'radium';
import styles from './button-styles';

class Button extends React.Component {
  render() {
    return (
      <a className="btn btn-primary btn-xl page-scroll"
         style={[styles.base, styles[this.props.kind], styles.xl]}>
        {this.props.children}
      </a>
    );
  }
}

Button.propTypes = {
  kind: React.PropTypes.oneOf(['default', 'primary']).isRequired,
};

export default Radium(Button);
