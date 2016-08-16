import React from 'react';

class Post extends React.Component {
  render(){
    return (
      <li key={this.id} className="list-group-item">
        <button type="button" className="pull-sm-right btn btn-danger btn-sm" onClick={this.props.onRemove}>Delete</button>
        <strong>{this.props.name}</strong>
        <br/>
        {this.props.description}
      </li>
    );
  }
}

Post.propTypes = {
  onRemove: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default Post;
