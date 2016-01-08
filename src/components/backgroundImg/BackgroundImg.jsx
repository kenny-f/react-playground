import React from 'react';
import radium from 'radium';
import styles from './styles';

class BackgroundImg extends React.Component {
  render() {
    return (
      <div style={[styles.base]}>
        {this.props.children}
      </div>
    );
  }
}

BackgroundImg.propTypes = {
  children: React.PropTypes.node,
};

export default radium(BackgroundImg);
