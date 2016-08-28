import queryString from 'query-string';

export const POST_ADD = 'POST_ADD';
export const POST_REMOVE = 'POST_REMOVE';
export const POSTS_GET = 'POSTS_GET';
export const POST_OPTIONS = 'POST_OPTIONS';

export function postAdded(post) {
  return {
    type: POST_ADD,
    item: { id: post.id, title: post.title, body: post.body, image: post.image, created_at: Date.parse(post.created_at) }
  }
}

export function setPostOptions(params) {
  return {
    type: POST_OPTIONS,
    params: params
  }
}

export function postsReceived(posts) {
  return {
    type: POSTS_GET,
    items: posts.items,
    page: posts.pagination.page,
    total_pages: posts.pagination.total_pages,
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
  return (dispatch, getState) => {
    const state = getState()['posts'];
    let params = {
      filter: state.filter,
      order: state.order,
      order_direction: state.order_direction,
      page: state.page
    };

    let token = localStorage.getItem('token') || null;
    const query = queryString.stringify(params);

    fetch(process.env.API_ENDPOINT + '/posts?' + query, {
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

export function addPost(title, body, image) {
  return dispatch => {
    const token = localStorage.getItem('token') || null;
    let data = new FormData();
    data.append('post[title]', title);
    data.append('post[body]', body);
    if (image) { data.append('post[image]', image); }

    fetch(process.env.API_ENDPOINT + '/posts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`},
      body: data
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

function _handleErrors(response){
  if (response.status == 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('session');
  }
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}
