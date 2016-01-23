import Immuatable from 'seamless-immutable';
import { expect } from 'chai';

import userReducer from './user';

describe('user reducer', () => {
  it('it has initial state', () => {
    const nextState = userReducer(undefined, {});
    const expectedState = Immuatable({
      isFetching: false,
      isAuthenticated: false,
    });
    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles LOGIN_REQUEST', () => {
    const creds = { email: '123' };
    const action = {
      type: 'LOGIN_REQUEST',
      creds,
    };
    const expectedState = Immuatable({
      isFetching: true,
      isAuthenticated: false,
      creds,
    });
    const nextState = userReducer(undefined, action);

    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles LOGIN_SUCCESS', () => {
    const user = { token: '123' };
    const action = {
      type: 'LOGIN_SUCCESS',
      user,
    };
    const expectedState = Immuatable({
      isFetching: false,
      isAuthenticated: true,
      user: user,
    });
    const nextState = userReducer(undefined, action);

    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles LOGIN_FAILURE', () => {
    const action = {
      type: 'LOGIN_FAILURE',
      message: 'error message',
    };
    const expectedState = Immuatable({
      isFetching: false,
      isAuthenticated: false,
      message: action.message,
    });
    const nextState = userReducer(undefined, action);

    expect(nextState).to.deep.equal(expectedState);
  });
});
