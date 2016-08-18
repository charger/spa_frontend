import React from 'react';
import PostsPage from '../components/PostsPage.js';
import * as PostActions from '../actions/PostActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { posts: state.posts }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
