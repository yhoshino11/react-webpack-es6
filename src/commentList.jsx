import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment.jsx';

class CommentList extends React.Component {
  render() {
    return (
      <div className='commentList'>
        <Comment author='Pete Hunt'>This is one comment</Comment>
        <Comment author='Jordan Walke'>This is *another* comment</Comment>
      </div>
    )
  }
}

module.exports = CommentList
