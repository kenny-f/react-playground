import React from 'react';
import radium from 'radium';

import Icon from '../icon/Icon';


class SocialBtn extends React.Component {
  render() {
    const styles = {
      base: {
        background: '#4862a3',
        display: 'inline-block',
        height: '50px',
        margin: '5px',
        padding: '16px 20px 0 20px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: '300',
        lineHeight: '16px',
        borderRadius: '4px',
        color: '#fff',

        ':hover': {
          outline: 0,
          opacity: 0.6,
          color: '#fff',
  }
      },
    };

    const {
      className,
      type,
      style,
      ...other,
      } = this.props;

    return (
      <a className="btn" href="#" style={[styles.base, this.props.style]}>
        <Icon className={`fa fa-${this.props.type}`}
              style={{ paddingRight: '5px', verticalAlign: 'middle', fontSize: '20px', lineHeight: '20px' }}/>
        {this.props.children}
      </a>
    );
  }
}

SocialBtn.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string
};

export default radium(SocialBtn);
