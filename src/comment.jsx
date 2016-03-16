import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {
  render() {
    return(
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Comment
