import { take, put, call } from 'redux-saga';
import fetch from 'isomorphic-fetch';
import { receiveLogin } from '../actions/actions';

const fetchLogin = () => {
  console.log('fetch login called');
  const req = new Request({
    url: 'http://localhost:3001/login',
    method: 'GET',
  });
  return fetch(req);
};

function* login() {
  console.log('in login saga', 'waiting for LOGIN_REQUEST');
  yield take('LOGIN_REQUEST');
  yield call(fetchLogin);
  yield put(receiveLogin({
    token: '123',
  }));
}

export default [login];
