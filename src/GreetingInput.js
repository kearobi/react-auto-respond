import React, { Component } from 'react';

class MessageInput extends Component {
  handleChange(e){
    this.props.updateMessage(e.target.value)
  }

  render() {
    return (
      <input value={this.props.greeting} onChange={this.handleChange.bind(this)} />
    );
  }
}

export default MessageInput;
