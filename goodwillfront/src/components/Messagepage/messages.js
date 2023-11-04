import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './components.css';

import { react } from "@babel/types";
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageGroup,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import { string } from "yargs";

function Messages() {
  // user input data
  const [userData, setUserData] = useState({username: string, message: string});
  const[messages, setMessages] = useState([{username: string, message: string}]); // all the messages

 
  function handleInput(event) {
    const {value} = event.target;
    setUserData({...userData, "message": value});
  }
  function handleSend(event) {
    setMessages(...messages,messages.push(userData.message));
    fetch('http://localhost:5000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }


  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            
            {messages.map((content, index)=>{return (<Message model={{sender: content.username, message: content.message}}></Message>)}) }

          </MessageList>
          <MessageInput placeholder="Type message here" onChange="handleInput"/>
          <button type="button" onClick="handleSend">Send</button>
        </ChatContainer>
      </MainContainer>
    </div> 
  );
}

export default Messages;