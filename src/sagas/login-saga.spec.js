import 'babel-polyfill';
import test from 'tape';
import { take, call, put } from 'redux-saga';
import loginSaga from './login-saga';
import { login } from '../api';
import { receiveLogin } from '../actions/actions';

test('login saga', assert => {
  const saga = loginSaga();

  let actual = null;
  let expected = null;

  actual = saga.next().value;
  expected = take('LOGIN_REQUEST');
  assert.deepEqual(actual, expected, 'waits for LOGIN_REQUEST action');

  actual = saga.next().value;
  const loginResponse = actual;
  expected = call(login);
  assert.deepEqual(actual, expected, 'calls login api');

  actual = saga.next().value;
  expected = put(receiveLogin());
  assert.deepEqual(actual, expected, 'dispatch login success action');

  actual = saga.next().done;
  expected = true;
  assert.deepEqual(actual, expected, 'finished');
  assert.end();
});
