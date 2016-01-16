import { LOGIN_REQUEST } from '../actions/login';
import { Map, fromJS } from 'immutable';

export default function login(state = Map({login: {}}), action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      const n = {
        isFetching: true,
        isAuthed: false,
        user: action.creds,
      };
      return state.merge(fromJS(n));
    default:
      return state;
  }
}
