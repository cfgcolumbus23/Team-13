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
import { useState, useEffect } from 'react';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const fetchMessages = () => {
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
        return response.json(); 
      })
      .then(data => {
        setMessages(data); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    };

    fetchMessages(); 
  }, []); 

  const messageElements = messages.map((message, index) => (
    <div key={index}>
      <strong>{message.username}</strong>: {message.content}
    </div>
  ));

  return (
    <div>
      <div id='divbox'>{messageElements}</div>
    </div>
  );
};

export default MessageDisplay;