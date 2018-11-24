import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MessageInputContainer from './MessageInputContainer'
import MessageList from './MessageList'

import Context from './Context'

class App extends Component {
  constructor(){
    super()
    this.state = {
      messageContent: 'Hello World',
      messages: [{},{},{}, {}, {}]
    }
  }

  render(){
    return (
      <Context.Provider value={{ 
        state: this.state,
        actions: {
          updateList: ()=>{
            let msgs = this.state.messages
            msgs.push({})
            this.setState({
              messages: msgs
            })
          },
          updateInput: (value)=>{
            this.setState({
              messageContent: value
            })
          }
        }
        }}>
        <MessageList />
        <MessageInputContainer/>
      </Context.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))