import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/AuthActions'

export default function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  session: JSON.parse(localStorage.getItem('session'))
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, action.data);
    default:
      return state
  }
}
