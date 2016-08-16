import React from 'react';
import Post from './Post.js';
import PostForm from './PostForm.js';

class App extends React.Component {

  componentDidMount(){
    this.props.getPosts();
  }

  render() {
    let posts = this.props.posts.items;
    let postNodes = posts.map((post) => {
      return (
        <Post key={post.id} id={post.id} name={post.title} description={post.body} onDelete={this.props.removePost.bind(self, post.id)} />
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

export default App;
