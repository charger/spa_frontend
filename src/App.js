import React from 'react';
import Post from './Post.js';
import PostForm from './PostForm.js';

class App extends React.Component {
  render() {
    let posts = [
      { id: 1, name: 'Generic name #1', description: 'Generic description #1' },
      { id: 2, name: 'Generic name #2', description: 'Generic description #2' },
      { id: 3, name: 'Generic name #3', description: 'Generic description #3' },
    ];

    let postNodes = posts.map(function(post) {
      return (
        <Post key={post.id} id={post.id} name={post.name} description={post.description} />
      );
    });


    return(
      <div>
        {postNodes}
        <PostForm />
      </div>
    );
  }
}

export default App;
