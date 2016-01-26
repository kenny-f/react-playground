import assert from 'assert';
import Immuatable from 'seamless-immutable';

import userReducer from './user';

describe('user reducer should', () => {
  it('have inital state', () => {
    const nextState = userReducer(undefined, {});
    const expectedState = Immuatable({
      isFetching: false,
      isAuthenticated: false,
    });
    assert.deepEqual(nextState, expectedState);
  });

  it('user reducer gets a LOGIN_REQUEST action', () => {
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

    assert.deepEqual(nextState, expectedState);
  });

  it('user reducer gets a LOGIN_SUCCESS action', () => {
    const user = { token: '123' };
    const action = {
      type: 'LOGIN_SUCCESS',
      user,
    };
    const expectedState = Immuatable({
      isFetching: false,
      isAuthenticated: true,
      user,
    });
    const nextState = userReducer(undefined, action);
    assert.deepEqual(nextState, expectedState);
  });

  it('user reducer gets a LOGIN_FAILURE action', () => {
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
    assert.deepEqual(nextState, expectedState);
  });
});
