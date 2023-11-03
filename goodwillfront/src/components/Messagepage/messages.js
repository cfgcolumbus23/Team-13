import { Route, Routes } from "react-router-dom";
import './components.css';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {useState} from 'react';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageGroup,
} from "@chatscope/chat-ui-kit-react";
import { react } from "@babel/types";
import { string } from "yargs";

function Messages() {
  // user input data
  const [userData, setUserData] = useState({username: string, message: string});
  const[messages, setMessages] = useState([{username: string, message: string}]); // all the messages

  fetch('https://emoji-api.com/emojis?access_key=5ae2f4f6740c6dc6d6f246f19228e53d32b133e3')
      .then((response) => response.json())
      .then((data) => data.forEach(messages.push(JSON.parse(data))
      ))
  function handleInput(event) {
    const {value} = event.target;
    setUserData({...userData, "message": value});
  }
  

  function handleSend(event) {
    setMessages(...messages,messages.push(userData.message));
    fetch('/api/message', JSON.stringify(userData.message))
      .then(response=>response.json());
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