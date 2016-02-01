import React, { Component } from 'react';

import LoginFormContainer from '../components/LoginFormContainer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginFormContainer />
    );
  }
}

export default Home;
