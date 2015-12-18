import React from 'react';
import Radium from 'radium';
import styles from './line-styles';

class Line extends React.Component {
	render() {
		return (
			<hr style={[styles.base, styles[this.props.color]]} />
		);
	}
}

Line.propTypes = {
	color: React.PropTypes.string,
};

export default Radium(Line);
