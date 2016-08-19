import React from 'react';
import {Route, IndexRoute} from 'react-router'
import MainLayout from './containers/MainLayout.js';
import Post from './containers/Post'
import PostList from './containers/PostList'
import NotFoundPage from './components/NotFoundPage'
import SignIn from './containers/SignIn';
import {UserAuthWrapper} from 'redux-auth-wrapper';
import {routerActions} from 'react-router-redux'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  failureRedirectPath: '/sign_in'
});
const Authenticated = UserIsAuthenticated((props) => props.children);

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={UserIsAuthenticated(PostList)}/>
    <Route path="sign_in" component={SignIn}/>
    <Route component={Authenticated}>
      <Route path="posts" component={PostList}/>
      <Route path="posts/:id" component={Post}/>
    </Route>
    <Route path='*' component={NotFoundPage}/>
  </Route>
)
