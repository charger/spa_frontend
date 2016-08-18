export const POST_ADD = 'POST_ADD';
export const POST_REMOVE = 'POST_REMOVE';
export const POSTS_GET = 'POSTS_GET';

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


export function getPosts() {
  return dispatch => {
    fetch(process.env.API_ENDPOINT + '/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(_handleErrors)
      .then((response) => response.json() )
      .then((json) => { dispatch( postsReceived(json) ) })
      // .catch((ex) => { console.log('request failed', ex)});
  }
}

export function getPost(id) {
  return dispatch => {
    fetch(process.env.API_ENDPOINT + '/posts/' + id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(_handleErrors)
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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(_handleErrors)
      .then((response) => response.json() )
      .then((json) => { dispatch( postAdded(json) ) })
      .catch((ex) => { console.log('request failed', ex)});
  }
}
export function removePost(id) {
  return dispatch => {
    fetch(process.env.API_ENDPOINT + '/posts/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(_handleErrors)
      .then((response) => dispatch(postRemoved(id)) )
      .catch((ex) => { console.log('request failed', ex)});
  }
}

function _handleErrors(response){
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}
