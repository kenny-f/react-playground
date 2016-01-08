import React from 'react';
import radium from 'radium';

class Icon extends React.Component {
  render() {
    const {
      type,
      ...other,
      } = this.props;
    return (
      <i className={className} {...other}/>
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
};

export default radium(Icon);
