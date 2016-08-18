import React from 'react';
import Post from './PostRow.js';
import PostForm from './PostForm.js';
import {Link} from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2>404 - Page not found</h2>
            <Link to="/">To main page</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
