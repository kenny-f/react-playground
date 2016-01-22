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
      isFetching: true,
      isAuthenticated: false,
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
});
