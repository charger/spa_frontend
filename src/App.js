import React from 'react';
import Post from './Post.js';
import PostForm from './PostForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount(){
    fetch(process.env.API_ENDPOINT + '/posts')
      .then((response) => this._parseJson(response))
      .then((json) => {this.setState({posts: json})})
      .catch((ex) => { console.log('parsing failed', ex)});
  }

  _handlePostSubmit(params){
    fetch(process.env.API_ENDPOINT + '/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(this._handleErrors)
      .then((response) => this._parseJson(response))
      .then((json) => {this.setState({posts: this.state.posts.concat(json)})})
      .catch((ex) => { console.log('parsing failed', ex)});
  }

  _handleErrors(response){
    if (!response.ok) {
      throw Error(response);
    }
    return response;
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
            <PostForm onPostSubmit={this._handlePostSubmit.bind(this)}/>
          </div>
        </div>

            <input type="button" onClick={this.props.onTestClick} value="Test" />
      </div>
    );
  }
}

export default App;
