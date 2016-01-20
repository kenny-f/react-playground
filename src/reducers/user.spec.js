import { Map } from 'immutable';
import { expect } from 'chai';

import userReducer from './user';

describe('user reducer', () => {
  describe('initial state', () => {
    it('should be empty', () => {
      const nextState = userReducer(undefined, {});
      const expectedState = Map();
      expectedState.should.deep.equal(nextState);
    });
  });
});
