import React from 'react';
import {Link} from 'react-router';

class PostRow extends React.Component {
  render(){
    return (
      <li key={this.id} className="list-group-item">
        <button type="button" className="pull-sm-right btn btn-danger btn-sm" onClick={this.props.onRemove}>Delete</button>
        <strong>
          <Link to={`/posts/${this.props.id}`}>{this.props.name}</Link>
        </strong>
        <br/>
        {this.props.description}
      </li>
    );
  }
}

PostRow.propTypes = {
  onRemove: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default PostRow;
