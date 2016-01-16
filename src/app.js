import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { loginUser } from '../actions';

import Root from './containers/Root';
import routes from './routes';

class App extends Component {
  render() {
    // const {
    //  dispatch,
    //  isAuthed,
    //  errorMessage,
    //  } = this.props;
    return (
      <Root routes={routes} />
    );
  }
}

// App.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // isAuthed: PropTypes.bool.isRequired,
  // errorMessage: PropTypes.string,
// };

export default App;
