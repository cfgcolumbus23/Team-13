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

function getMessages(event) {
  fetch('http://127.0.0.1:5000/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response.json)
    return response.json();
  })
  .then(responseData => {
    console.log(responseData);

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}
function createDivs(array) {
  var container = document.getElementById('container');

  array.forEach(function(item) {
    var div = document.createElement('div');
    div.title = 'Username: ' + item.username + ' Content: ' + item.content;
    container.appendChild(div);
  });
}


const MessageDisplay = () => {
  // const[messages, setMessages] = useState([{username: string, message: string}]);
  let messages = getMessages();
  
  // console.log("start")
  // console.log(messages)
  return (
      <div id='divbox'>
        {/* do this */}
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
