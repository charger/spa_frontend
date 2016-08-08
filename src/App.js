import React from 'react';
import Post from './Post.js';
import PostForm from './PostForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount(){
    fetch(this.props.apiEndpoint + '/posts')
      .then((response) => this._parseJson(response))
      .then((json) => {this.setState({posts: json})})
      .catch((ex) => { console.log('parsing failed', ex)});
  }

  _handlePostSubmit(params){
    fetch(this.props.apiEndpoint + '/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then((response) => this._parseJson(response))
      .then((json) => {this.setState({posts: this.state.posts.concat(json)})})
      .catch((ex) => { console.log('parsing failed', ex)});
  }

  _parseJson(data){
    return data.json();
  }

  render() {
    let posts = this.state.posts;
    let postNodes = posts.map(function(post) {
      return (
        <Post key={post.id} id={post.id} name={post.title} description={post.body} />
      );
    });

    return(
      <div>
        {postNodes}
        <PostForm onPostSubmit={this._handlePostSubmit.bind(this)}/>
      </div>
    );
  }
}

export default App;
