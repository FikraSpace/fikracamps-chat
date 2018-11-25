import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

let MessageInput = styled.input`
  width: 90%;
  padding: 0px;
  margin: 0px;
  height: 60px;
  border: none;
  outline: none;
  font-size: 1.4rem;
`
let Button = styled.button`

  border-radius: 4px;
  background-color: #466AB3;
  color: white;
  width: 9%;
  padding: 0px;
  margin: 0px;
  font-size: 1.4rem;
  
`

let Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #000;
  position: fixed;
  padding: 5px;
  height: 60px;
  bottom: 0px;
`

class MessageInputContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          (ctx)=>{
            return (
              <Container>
                <MessageInput 
                value={ctx.state.messageContent} 
                onChange={(event)=>{
                  ctx.actions.updateInput(event.target.value)
                }}
                placeholder="Write A Message"/>
                <Button onClick={ctx.actions.updateList}>Send</Button>
              </Container>
            )
          }
        }
      </Context.Consumer>
    )
  }
}

export default MessageInputContainer