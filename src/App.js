import React, { Component } from 'react';
import GoodRobot from './GoodRobot'
import MessageInput from './GreetingInput'
import BadRobot from './BadRobot'
import KanyeRobot from './KanyeRobot'
import Bla from './Bla'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: '....'
    }
  }

  updateMessage(message){
    this.setState({message: message})
  }

  render() {
    return (
      <div>
        <h1>Auto Bots</h1>
        <MessageInput message={this.state.message} updateMessage={this.updateMessage.bind(this)} />
        <GoodRobot message={this.state.message} />
        <BadRobot message={this.state.message} />
        <KanyeRobot message={this.state.message} />
        <Bla message={this.state.message} />
      </div>
    );
  }
}

export default App;
