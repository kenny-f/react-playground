import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Joi from 'joi';
import strategy from 'joi-validation-strategy';
import validation from 'react-validation-mixin';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.validatorTypes = {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    };
    this.getValidatorData = this.getValidatorData.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getErrorMessages = this.getErrorMessages.bind(this);
  }

  getValidatorData() {
    return {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
    };
  }

  getErrorMessages(key) {
    const msgs = this.props.getValidationMessages(key);
    if (msgs.length === 0) {
      return null;
    }
    return msgs;
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.requestLogin({
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
    });
  }

  render() {
    return (
      <div>
        <TextField
          ref="email"
          hintText="Email"
          floatingLabelText="Email"
          onBlur={this.props.handleValidation('email')}
          errorText={this.getErrorMessages('email')}
        />
        <br/>
        <TextField
          ref="password"
          type="password"
          hintText="Password"
          floatingLabelText="Password"
          onBlur={this.props.handleValidation('password')}
          errorText={this.getErrorMessages('password')}
        />
        <br />
        <RaisedButton
          label="Login"
          secondary
          onClick={this.handleLogin}
          disabled={!this.props.isValid()}
        />
        <br />
        <br />
        <br />
        <br />
        {this.props.user.message}
        <br />
        <br />
        <br />
        <p>isValid - email: { this.props.isValid('email').toString() }</p>
        <br />
        <p>isValid: { this.props.isValid().toString() }</p>
        <br />
        <p>errors: { JSON.stringify(this.props.errors) }</p>
        <br />
        <p>get validation messages: { JSON.stringify(this.props.getValidationMessages()) }</p>
      </div>
    );
  }
}

Home.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  handleValidation: PropTypes.func.isRequired,
  getValidationMessages: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch);
};

Home = validation(strategy)(Home);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
