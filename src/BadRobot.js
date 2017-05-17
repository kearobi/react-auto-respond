import React, { Component } from 'react';

class BadRobot extends Component {
  render() {
    return (
      <h1>Sup, {this.props.message} </h1>
    );
  }
}

export default BadRobot;
