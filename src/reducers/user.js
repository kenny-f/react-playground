import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isFetching: false,
  isAuthenticated: false,
});

function user(state = initialState, action) {
  console.log('*** User Reducer ***');
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state.merge({
        isFetching: true,
        isAuthenticated: false,
        creds: action.creds,
      });
    case 'LOGIN_SUCCESS':
      console.log('*** LOGIN_SUCCESS ***');
      return state.merge({
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
      });
    case 'LOGIN_FAILURE':
      return state.merge({
        isFetching: false,
        isAuthenticated: false,
        message: action.message,
      });
    default:
      return state;
  }
}

export default user;
