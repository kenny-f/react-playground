import 'babel-polyfill';
import test from 'tape';
import { take, call } from 'redux-saga';
import loginSaga from './login-saga';

test('login saga', assert => {
  const saga = loginSaga();

  let actual = null;
  let expected = null;

  actual = saga.next().value;
  expected = take('LOGIN_REQUEST');

  assert.deepEqual(actual, expected, 'waits for LOGIN_REQUEST action');
  assert.end();
});
