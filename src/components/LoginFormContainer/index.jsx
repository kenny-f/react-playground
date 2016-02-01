import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import LoginForm from '../LoginForm';

import * as userActions from '../../actions/actions';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    console.log('&&&&&&&&&&&&&&&&', props);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.requestLogin({
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
    });
  }
//             errorText={props.fields.email.touched && props.fields.email.error}
//            errorText={props.fields.password.touched && props.fields.password.error}

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <TextField
            ref="email"
            hintText="Email"
            floatingLabelText="Email"
          />
          <br/>
          <TextField
            ref="password"
            type="password"
            hintText="Password"
            floatingLabelText="Password"
          />
          <br />
          <RaisedButton
            label="Login"
            type="submit"
            secondary
          />
        </form>
      </div>
    );
  }
}

LoginFormContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
