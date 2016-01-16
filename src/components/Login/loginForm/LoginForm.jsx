import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { login } from '../../../actions/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(login({ email: 'hello@world.com', password: 'very safe password' }));
  }

  render() {
    const styles = {
      formInput: {
        height: '50px',
        margin: 0,
        padding: '0 20px',
        verticalAlign: 'middle',
        background: '#f8f8f8',
        border: '3px solid #ddd',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '50px',
        color: '#888',
        borderRadius: '4px',
        boxShadow: 'none',
        transition: 'all .3s',
      },
      btn: {
        width: '100%',
        margin: '0',
        padding: '0 20px',
        verticalAlign: 'middle',
        background: '#4aaf51',
        border: 0,
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '50px',
        color: '#fff',
        borderRadius: '4px',
        textShadow: 'none',
        boxShadow: 'none',
        transition: 'all .3s',

        ':hover': {
          opacity: 0.6,
          color: '#fff',
        },
      },
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor="form-email">Email</label>
          <input
            type="text"
            name="form-email"
            placeholder="Email..."
            className="form-control"
            ref="email"
            style={styles.formInput}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="form-password">Password</label>
          <input
            type="password"
            name="form-password"
            placeholder="Password..."
            className="form-control"
            ref="password"
            style={styles.formInput}
          />
        </div>
        <button type="submit" className="btn" style={styles.btn}>Sign in!</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default radium(LoginForm);
