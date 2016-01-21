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
    id_token: user.id_token,
  };
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    // isFetching: false,
    // isAuthenticated: true,
    message,
  };
}
