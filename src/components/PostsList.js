import React from 'react';
import PostForm from '../components/PostForm.js';
import {Link} from 'react-router';

class PostList extends React.Component {
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
        <li key={post.id} className="list-group-item">
          <button type="button" className="pull-sm-right btn btn-danger btn-sm" onClick={this._handleRemove.bind(this, post.id)}>Delete</button>
          <strong>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </strong>
          <br/>
          {post.body}
        </li>
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

export default PostList;
