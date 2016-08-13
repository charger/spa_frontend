import React from 'react';

class Post extends React.Component {
  render(){
    return (
      <li key={this.id} className="list-group-item">
        <strong>{this.props.name}</strong>
        <br/>
        {this.props.description}
      </li>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default Post;
