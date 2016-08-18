import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App.js';
import Post from './containers/Post'
import PostList from './containers/PostList'
import NotFoundPage from './components/NotFoundPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostList} />
    <Route path="posts" component={PostList}/>
    <Route path="posts/:id" component={Post}/>
    <Route path='*' component={NotFoundPage} />
  </Route>
)
