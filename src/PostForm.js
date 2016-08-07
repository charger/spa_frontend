import React from 'react';

class PostForm extends React.Component {
  _submit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    this.props.onPostSubmit({title, body});
  }

  render() {
    return (
      <form onSubmit={this._submit.bind(this)} ref="postForm">
      <div>Add new post:</div>
      <div>Title: <input type="text" ref="title"/></div>
      <div>Body: <textarea ref="body"/></div>
      <input type="submit" value="Post" />
      </form>
    );
  }
}

export default PostForm;
