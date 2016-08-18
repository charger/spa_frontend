import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import Post from '../components/Post';
import * as PostActions from '../actions/PostActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostContainer extends React.Component {
  componentDidMount(){
    const id = this.props.params.id;
    this.props.getPost(id);
  }

  _findPost() {
    const id = this.props.params.id;
    const items = this.props.posts.items;
    return items.find((p) => { return p.id == id });
  }

  render() {
    const post = this._findPost();
    if (!post) return <NotFoundPage/>;
    return <Post item={post} />;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
