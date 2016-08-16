import React from 'react';

class PostForm extends React.Component {
  _submit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    this.props.onPostSubmit(title, body);
  }

  render() {
    return (
      <div className="m-t-3">
        <div className="form-group row">
          <div className="col-sm-10">
            <h2>Add new post</h2>
          </div>
        </div>


        <form onSubmit={this._submit.bind(this)} ref="postForm">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" ref="title" className="form-control"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Body</label>
            <div className="col-sm-10">
              <textarea ref="body" className="form-control" />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <input type="submit" value="Post" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
