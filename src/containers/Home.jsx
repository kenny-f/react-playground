import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.requestLogin({ formVisible: false });
  }

  render() {
    return (
      <div>
        {this.props.user.message}
        <RaisedButton label="Login" onClick={this.handleLogin}/>
      </div>
    );
  }
}

Home.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
