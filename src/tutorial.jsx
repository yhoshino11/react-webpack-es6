import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './commentList.jsx';
import CommentForm from './commentForm.jsx';

const CommentBox = React.createClass({
  getInitialState() {
    return({data: []});
  },

  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data => {
        this.setState({data: data})
        console.log(data)
      }).bind(this),
      error: (status, err => {
        console.error(this.props.url, status, err.toString())
      }).bind(this)
    })
  },

  render() {
    return (
        <div className='commentBox'>
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm />
        </div>
        )
  }
})

let dummy_data_url = 'http://jsonplaceholder.typicode.com/comments';
ReactDOM.render(<CommentBox url={dummy_data_url} />, document.getElementById('content'));
