import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/actions';
import RaisedButton from 'material-ui/lib/raised-button';

class App extends Component {
  render() {
    return (
      <RaisedButton label="Login" onClick={this.props.requestLogin} />
    );
  }
}

App.propTypes = {
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
