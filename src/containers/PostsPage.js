import React from 'react';
import Post from '../components/Post.js';
import PostForm from '../components/PostForm.js';
import * as PostActions from '../actions/PostActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostsPage extends React.Component {
  componentDidMount(){
    this.props.getPosts();
  }

  _handleRemove(id){
    if (!confirm('Are you sure?')) {
      return
    }
    this.props.removePost(id);
  }

  render() {
    let posts = this.props.posts.items;
    let postNodes = posts.map((post) => {
      return (
        <Post key={post.id} id={post.id} name={post.title} description={post.body} onRemove={this._handleRemove.bind(this, post.id)} />
      );
    });

    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2>Posts</h2>
            <ul className="list-group">
              {postNodes}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <PostForm onPostSubmit={this.props.addPost}/>
          </div>
        </div>
      </div>
    );
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
)(PostsPage);
