// File: MessageDisplay.js

import React from 'react';
import './MessageBoard.css'; // Create a CSS file to style your messages
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageGroup,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import { useState } from 'react';

var messages = []
function getMessages() {
  fetch('http://127.0.0.1:5000/messages', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log("RESPONSE")
    // console.log(response)
    // console.log(response.json)
    // // return response.json
    response.json().then((data) => {
      // console.log(data);
      messages = data;
      console.log(messages)
      return data;
  }).catch((err) => {
      console.log(err);
  })
  })
  .then(responseData => {
    console.log("RESPONSE DATA")
    console.log(responseData);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}


const MessageDisplay = () => {
  // const[messages, setMessages] = useState([{username: string, message: string}]);
  getMessages();
  console.log(messages)
  messages = [{'username': 'robert', 'content': 'This is some dummy data to see the summary!'}]
  // console.log(messages)
  // const [message, setMyList] = useState(messages);
  // setMyList(messages)
  // console.log("start")
  // console.log(messages)
  const messageElements = [];
for (let i = 0; i < messages.length; i++) {
  messageElements.push(
    <div key={i}>
      <strong>{messages[i].username}</strong>: {messages[i].content}
    </div>
  );
}
  return (
    <div>
      <div id='divbox'>{messageElements}</div>
      <div>
        Message 1
      </div>
        
        <div>
        By Author
      </div>
    </div>
  );
};


export default MessageDisplay;
