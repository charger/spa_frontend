import React from 'react';
import Dropzone from 'react-dropzone';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  _submit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    let image = this.state.image;
    if (title === '' || body === '') return;
    this.props.onPostSubmit(title, body, image);
    this.refs.postForm.reset();
    this.setState({image: null});
  }

  _onDrop(files) {
    this.setState({
      image: files[0]
    });
  }

  render() {
    const t = {
      addNewPost: this.props.intl.formatMessage({ id: 'post_form.add_new_post', defaultMessage: 'Add new post' }),
      title: this.props.intl.formatMessage({ id: 'post_form.title', defaultMessage: 'Title' }),
      body: this.props.intl.formatMessage({ id: 'post_form.body', defaultMessage: 'Body' }),
      image: this.props.intl.formatMessage({ id: 'post_form.image', defaultMessage: 'Image' }),
      post: this.props.intl.formatMessage({ id: 'post_form.post', defaultMessage: 'Post' }),
      dropZoneText: this.props.intl.formatMessage({ id: 'post_form.drop_zone_text', defaultMessage: 'Try dropping some files here, or click to select files to upload.' }),
    };

    return (
      <div className="m-t-3">
        <div className="form-group row">
          <div className="col-sm-10">
            <h2>{t.addNewPost}</h2>
          </div>
        </div>


        <form onSubmit={this._submit.bind(this)} ref="postForm">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">{t.title}</label>
            <div className="col-sm-10">
              <input type="text" ref="title" className="form-control"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">{t.body}</label>
            <div className="col-sm-10">
              <textarea ref="body" className="form-control" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">{t.image}</label>
            <div className="col-sm-10">
              <Dropzone ref="image" onDrop={this._onDrop.bind(this)} accept='image/*'>
                <div>{t.dropZoneText}</div>
              </Dropzone>
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <input type="submit" value={t.post} className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
