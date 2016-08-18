import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App.js';
import PostPage from './containers/PostPage'
import PostsPage from './containers/PostList'
import NotFoundPage from './components/NotFoundPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsPage} />
    <Route path="posts" component={PostsPage}/>
    <Route path="posts/:id" component={PostPage}/>
    <Route path='*' component={NotFoundPage} />
  </Route>
)
