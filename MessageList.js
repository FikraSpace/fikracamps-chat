import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

let MSG = styled.div`
  font-size: 2rem;
`


class MessageList extends Component {
  render(){
    return(
    <Context.Consumer>
      {
        (ctx)=>{
          return (<div>
            {
              ctx.state.messages.map((item, i)=>{
                return <MSG key={i}>{item.content}</MSG>
              })
            }
          </div>)
        }
      }
    </Context.Consumer>
    )
  }
}


export default MessageList;
