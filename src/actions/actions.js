import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    creds,
  };
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    token: user.token,
  };
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message,
  };
}
