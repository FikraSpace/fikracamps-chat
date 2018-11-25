import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MessageInputContainer from './MessageInputContainer'
import MessageList from './MessageList'

import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAzjyVetlhL-aSALC1CLzKqnpAOIDNQQ60",
  authDomain: "fikrachat-4cb5b.firebaseapp.com",
  databaseURL: "https://fikrachat-4cb5b.firebaseio.com",
  projectId: "fikrachat-4cb5b",
  storageBucket: "fikrachat-4cb5b.appspot.com",
  messagingSenderId: "129439978196"
};

firebase.initializeApp(config);



import Context from './Context'

class App extends Component {
  constructor(){
    super()
    this.state = {
      messageContent: '',
      messages: []
    }

    firebase.firestore().collection('msgs')
    .orderBy('date', "asc")
    .onSnapshot((snapshot)=>{
      let msgs = []
      snapshot.forEach((doc)=>{
        msgs.push(doc.data())
      })

      this.setState({
        messages: msgs
      })



    })

  }

  render(){
    return (
      <Context.Provider value={{ 
        state: this.state,
        actions: {
          updateList: ()=>{

            firebase.firestore().collection('msgs').add({
              date: Date.now(),
              content: this.state.messageContent
            })

            this.setState({
              messageContent: ''
            })

            
          },
          updateInput: (value)=>{
            this.setState({
              messageContent: value
            })
          }
        }
        }}>

        <input type="file"/>
        <MessageList />
        <MessageInputContainer/>
      </Context.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))