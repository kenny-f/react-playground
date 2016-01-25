import { take, put, call } from 'redux-saga';
import 'isomorphic-fetch';
import { receiveLogin } from '../actions/actions';

const fetchLogin = () => {
  return fetch('http://localhost:3001/login')
    .then(res => res.json())
    .then(function (json) {
      return json;
    });
};

function* login() {
  console.log('in login saga', 'waiting for LOGIN_REQUEST');
  yield take('LOGIN_REQUEST');
  const res = yield call(fetchLogin);
  yield put(receiveLogin({
    token: res,
  }));
}

export default login;
