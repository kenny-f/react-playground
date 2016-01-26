import { take, put, call } from 'redux-saga';
import { routeActions } from 'react-router-redux';

import { receiveLogin } from '../actions/actions';
import { login } from '../api';

function* loginSaga() {
  yield take('LOGIN_REQUEST');
  const res = yield call(login);
  yield put(receiveLogin(res));
  yield put(routeActions.push('/dashboard'));
}

export default loginSaga;
