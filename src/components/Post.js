import React from 'react';
import {Link} from 'react-router';

class Post extends React.Component {
  render() {
    const post = this.props.item;

    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2>{post.title}</h2>
            {post.body}

            <div>
              <img src={post.image.url} width="200px"/>
            </div>
            <div className="m-t-3">
              <Link to="/posts">Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default Post;
