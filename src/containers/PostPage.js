import React from 'react';
import {Link} from 'react-router';
import NotFoundPage from '../components/NotFoundPage';
import * as PostActions from '../actions/PostActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostPage extends React.Component {
  _findPost() {
    const id = this.props.params.id;
    const items = this.props.posts.items;
    return items.find((p) => { return p.id == id });
  }

  render() {
    const post = this._findPost();
    if (!post) return <NotFoundPage/>;
    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2>{post.title}</h2>
            {post.body}

            <div className="m-t-3">
              <Link to="/posts">Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
