import React from 'react';
import ReactDOM from 'react-dom';

const CommentForm = React.createClass({
  getInitialState() {
    return {author: '', text: ''}
  },

  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  },

  handleTextChange(e) {
    this.setState({text: e.target.value})
  },

  handleSubmit(e) {
    e.preventDefault()
    let author = this.state.author.trim()
    let text = this.state.text.trim()
    if (!text || !author) {
      return
    }
    this.props.onCommentSubmit({name: author, body: text})
    this.setState({author: '', text: ''})
  },

  render() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input
         type='text'
         placeholder='Your name'
         value={this.state.author}
         onChange={this.handleAuthorChange}
        />
        <input
         type='text'
         placeholder='Say something...'
         value={this.state.text}
         onChange={this.handleTextChange}
        />
        <input type='submit' value='Post' />
      </form>
    )
  }
})

export default CommentForm
