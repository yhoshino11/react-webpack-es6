import React from 'react';
import ReactDOM from 'react-dom';

const TestButton = React.createClass({
  getInitialState() {
    return({status: 'button'})
  },

  handle() {
    this.setState({status: 'button is-loading'})
    setTimeout(() => {
      this.setState({status: 'button'})
    }, 1000)
  },

  render() {
    return(
      <button className={this.state.status} onClick={this.handle}>
        Click Me!
      </button>
    )
  }
})

ReactDOM.render(<TestButton />, document.getElementById('testButton'));
