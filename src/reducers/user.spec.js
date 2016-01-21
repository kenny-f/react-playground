import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import userReducer from './user';

describe('user reducer', () => {
  it('it has initial state', () => {
    const nextState = userReducer(undefined, {});
    const expectedState = fromJS({
      isFetching: false,
      isAuthenticated: false,
    });
    expect(nextState).to.deep.equal(expectedState);
  });

  describe('when action is LOGIN_REQUEST', () => {
    it('sets...', () => {
      const creds = { email: '123' };
      const action = {
        type: 'LOGIN_REQUEST',
        isFetching: true,
        isAuthenticated: false,
        creds,
      };
      const expectedState = fromJS({
        isFetching: true,
        isAuthenticated: false,
        creds,
      });
      const nextState = userReducer(undefined, action);

      expect(nextState).to.deep.equal(expectedState);
    });
  });
});
