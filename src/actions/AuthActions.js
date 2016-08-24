import { push } from 'react-router-redux'
import jwtDecode from 'jwt-decode';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    data: {
      isFetching: true,
      isAuthenticated: false
    }
  }
}

function receiveLogin(session) {
  return {
    type: LOGIN_SUCCESS,
    data: {
      isFetching: false,
      isAuthenticated: true,
      session,
      errorMessage: ''
    }
  }
}

function loginError(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    data: {
      isFetching: false,
      isAuthenticated: false,
      errorMessage
    }
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    data: {
      isFetching: false,
      isAuthenticated: false
    }
  }
}

export function loginUser(username, password) {
  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${username}&password=${password}`
  };

  return dispatch => {
    dispatch(requestLogin());

    return fetch(process.env.API_ENDPOINT + '/sign_in', config)
      .then(response =>
        response.json().then(json => ({json, response}))
      ).then(({json, response}) => {
        if (!response.ok) {
          dispatch(loginError(json.error));
          return Promise.reject(json)
        } else {
          const session = jwtDecode(json.token);
          localStorage.setItem('token', json.token);
          localStorage.setItem('session', JSON.stringify(session));
          dispatch(receiveLogin(session));
          dispatch(push('/'));
        }
      }).catch(err => console.log('Error: ', err))
  }
}

export function logoutUser() {
  return dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('session');
    dispatch(receiveLogout());
    dispatch(push('/'));
  }
}
