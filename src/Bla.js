import React, { Component } from 'react';

class Bla extends Component {
  scramble(str){
  let times = str.length / 3
  let output = ""

  for(var i=0; i < times; i++){
    output = output + "bla"
  }

  let remainder = str.length % 3
  output = output + "bla".slice(0, remainder -1)
  return output
}
  render() {
    return (
      <h3>Bla Robot: I hear you are saying, {this.scramble(this.props.message)}, Is that Correct? </h3>
    );
  }
}

export default Bla;
