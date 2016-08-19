export const POST_ADD = 'POST_ADD';
export const POST_REMOVE = 'POST_REMOVE';
export const POSTS_GET = 'POSTS_GET';
import {logoutUser} from './AuthActions'

export function postAdded(post) {
  return {
    type: POST_ADD,
    item: { id: post.id, title: post.title, body: post.body }
  }
}

export function postsReceived(posts) {
  return {
    type: POSTS_GET,
    items: posts
  }
}

export function postRemoved(id) {
  return {
    type: POST_REMOVE,
    itemId: id
  }
}

function headers(){
  let token = localStorage.getItem('token') || null;
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export function getPosts() {
  return dispatch => {
    let token = localStorage.getItem('token') || null;

    fetch(process.env.API_ENDPOINT + '/posts', {
      method: 'GET',
      headers: headers()
    })
      .then((response) => _handleErrors(response, dispatch))
      .then((response) => response.json() )
      .then((json) => { dispatch( postsReceived(json) ) })
      // .catch((ex) => { console.log('request failed', ex)});
  }
}

export function getPost(id) {
  return dispatch => {
    fetch(process.env.API_ENDPOINT + '/posts/' + id, {
      method: 'GET',
      headers: headers()
    })
      .then((response) => _handleErrors(response, dispatch))
      .then((response) => response.json() )
      .then((json) => { dispatch( postAdded(json) ) })
      // .catch((ex) => { console.log('request failed', ex)});
  }
}

export function addPost(title, body) {
  return dispatch => {
    const params = { title, body };
    fetch(process.env.API_ENDPOINT + '/posts', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(params)
    })
      .then((response) => _handleErrors(response, dispatch))
      .then((response) => response.json() )
      .then((json) => { dispatch( postAdded(json) ) })
      .catch((ex) => { console.log('request failed', ex)});
  }
}
export function removePost(id) {
  return dispatch => {
    fetch(process.env.API_ENDPOINT + '/posts/' + id, {
      method: 'DELETE',
      headers: headers(),
    })
      .then((response) => _handleErrors(response, dispatch))
      .then((response) => dispatch(postRemoved(id)) )
      .catch((ex) => { console.log('request failed', ex)});
  }
}

function _handleErrors(response, dispatch){
  if (response.status == 401) {
    // dispatch(logoutUser);
  }
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}
