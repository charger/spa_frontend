import React from 'react';
import PostRow from '../components/PostRow.js';
import PostForm from '../components/PostForm.js';

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
        <PostRow key={post.id} id={post.id} name={post.title} description={post.body} onRemove={this._handleRemove.bind(this, post.id)} />
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

export default PostsPage;
