import React from 'react'
//import 'styles/core.scss'

class CoreLayout extends React.Component {
	//const propTypes = {
  //  children: React.PropTypes.element
  //};

  render () {
    return (
      //<div className='page-container'>
      //  <div className='view-container'>
      //    {this.props.children}
      //  </div>
      //</div>
			<div>
				{this.props.children}
			</div>
    )
  }
}

export default CoreLayout;
