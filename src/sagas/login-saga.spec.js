import 'babel-polyfill';
import assert from 'assert';
import { take, call, put } from 'redux-saga';

import loginSaga from './login-saga';
import { login } from '../api';
import { receiveLogin } from '../actions/actions';

const saga = loginSaga();

let actual = null;
let expected = null;

describe('login saga should', () => {
  it('wait for LOGIN_REQUEST action', () => {
    actual = saga.next().value;
    expected = take('LOGIN_REQUEST');
    assert.deepEqual(actual, expected);
  });

  it('call the login api', () => {
    actual = saga.next().value;
    const loginResponse = actual;
    expected = call(login);
    assert.deepEqual(actual, expected);
  });
  it('dispatch login success action', () => {
    actual = saga.next().value;
    expected = put(receiveLogin());
    assert.deepEqual(actual, expected);
  });
  it('be done', () => {
    actual = saga.next().done;
    expected = true;
    assert.deepEqual(actual, expected, 'finished');
  });
});
