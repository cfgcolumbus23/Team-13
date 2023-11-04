// File: MessageDisplay.js

import React from 'react';
import './MessageBoard.css'; // Create a CSS file to style your messages


const MessageDisplay = () => {
  return (
    <div className="message-grid">
      {/* {messages.map((message, index) => (
        <div key={index} className="message-square">
          {message}
        </div>
      ))} */}
      <div>
        Message 1
        <div>
        By Author
      </div>
      </div>
      
    </div>
  );
};

export default MessageDisplay;
