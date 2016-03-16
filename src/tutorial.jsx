import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './commentList.jsx';
import CommentForm from './commentForm.jsx';

class CommentBox extends React.Component {
  render() {
    return (
        <div className='commentBox'>
          <h1>Comments</h1>
          <CommentList />
          <CommentForm />
        </div>
        )
  }
}

ReactDOM.render(<CommentBox />, document.getElementById('content'));
