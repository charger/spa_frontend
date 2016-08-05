import React from 'react';
import Post from './Post.jsx';
import PostForm from './PostForm.jsx';

class App extends React.Component {
  render() {
    return(
      <div>
        <Post />
        <PostForm />
      </div>
    );
  }
}

export default App;
