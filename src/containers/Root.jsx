import React from 'react';
import { Router } from 'react-router';

class Root extends React.Component {
  render() {
    return (
      <Router>
        {this.props.routes}
      </Router>
    );
  }
}

export default Root;
