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
        },
      },
      iconBase: {
        paddingRight: '5px',
        verticalAlign: 'middle',
        fontSize: '20px',
        lineHeight: '20px',
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
        <Icon
          className={`fa fa-${this.props.type}`}
          style={styles.iconBase}
        />
        {this.props.children}
      </a>
    );
  }
}

SocialBtn.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  style: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
};

export default radium(SocialBtn);
