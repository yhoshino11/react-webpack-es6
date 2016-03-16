import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment.jsx';

class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.name} key={comment.id}>
          {comment.body}
        </Comment>
      )
    })
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
}

export default CommentList
