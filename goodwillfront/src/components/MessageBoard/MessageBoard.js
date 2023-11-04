// File: MessageDisplay.js

import React, { useEffect, useState } from 'react';
import './MessageBoard.css'; // Create a CSS file to style your messages

const MessageDisplay = () => {
  const [messages, setMessages] = useState([]); 
  const [addData, setAddData] = useState({username: "", content: ""});

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

  function handleUsernameInput(event) {
    const {value} = event.target;
    setAddData({...addData, "username":value});
  }

  function handleContentInput(event) {
    const {value} = event.target;
    setAddData({...addData, "content":value});
  } 
  
  function handleAdd() {
    console.log(addData.username);
    fetch('http://127.0.0.1:5000/addmessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(addData)
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
  console.log(messages)
  const messageElements = messages.map((message, index) => (
    <div class='border-black background message-square'key={index}>
      <strong>Username: {message.username}</strong> 
      <div>
        {message.content}
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Announcements</h1>
      <div id='divbox'>{messageElements}</div>
      <h1>Add Announcements</h1>
      <form id="loginForm">
          <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={handleUsernameInput} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Content:</label>
              <input className="form-control" id="content" placeholder="Enter content" onChange={handleContentInput}/>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={handleAdd}>Add</button>
      </form>
    </div>
    

  );
};

export default MessageDisplay;