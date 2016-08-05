import React from 'react';

class Post extends React.Component {
  render(){
    return (
      <div key={this.id}>
        {this.props.name}
        <br/>
        {this.props.description}
      </div>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default Post;
