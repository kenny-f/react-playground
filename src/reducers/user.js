import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isFetching: false,
  isAuthenticated: false,
});

function user(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state.merge({
        isFetching: true,
        isAuthenticated: false,
        creds: action.creds,
      });
    default:
      return state;
  }
}

export default user;
