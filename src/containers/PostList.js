import React from 'react';
import PostsPage from '../components/PostsList.js';
import {removePost, getPosts, addPost, setPostOptions}  from '../actions/PostActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { posts: state.posts }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePost, getPosts, addPost, setPostOptions}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
