import { take, put, call } from 'redux-saga';
import { routeActions } from 'react-router-redux';

import { receiveLogin, loginError } from '../actions/actions';
import { login } from '../api';

function* loginSaga(getState) {
  yield take('LOGIN_REQUEST');
  console.log('%%%%%%%% ', JSON.stringify(getState().user.creds));
  const res = yield call(login, getState().user.creds);
  console.log('$$$$$$$$$$$$$$$$$$$$$$', res);
  if (res.error) {
    yield put(loginError(res.error));
  }
  else {
    yield put(receiveLogin(res));
    yield put(routeActions.push('/dashboard'));
  }
}

export default loginSaga;
