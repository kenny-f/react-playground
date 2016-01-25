import { take, put, call } from 'redux-saga';

import { receiveLogin } from '../actions/actions';
import { login } from '../api';

function* loginSaga() {
  yield take('LOGIN_REQUEST');
  const res = yield call(login);
  yield put(receiveLogin(res));
}

export default loginSaga;
