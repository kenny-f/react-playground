export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthed: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthed: true,
    id_token: user.id_token,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthed: false,
    message,
  };
}

export function login(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.email}&password=${creds.password}`,
  };

  return dispatch => {
    // dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    return fetch('http://localhost:3001/login', config)
    .then();
  };
}
