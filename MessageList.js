import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

class MessageList extends Component {
  render(){
    return(
    <Context.Consumer>
      {
        (ctx)=>{
          return (<div>
            {
              ctx.state.messages.map((item, i)=>{
                return <div key={i}>item #{i}</div>
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
