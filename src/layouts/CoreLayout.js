import React from 'react';

class CoreLayout extends React.Component {
	// const propTypes = {
  //  children: React.PropTypes.element
  // };

  render() {
    return (
      // <div className='page-container'>
      //  <div className='view-container'>
      //    {this.props.children}
      //  </div>
      // </div>
			<div>
				{this.props.children}
			</div>
    );
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.node,
};

export default CoreLayout;
