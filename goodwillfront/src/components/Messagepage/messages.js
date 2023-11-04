import React, { useState } from 'react';

function ChatBox() {
  const [messageHistory, setMessageHistory] = useState([{
    username: '',
    message: 'How can I help you today?',
    receivername: '',
  }]);
  const [newMessage, setNewMessage] = useState({ username: '', message: '', receivername: '' });


  const handleSendMessage = () => {
    const message = {
      username: "Lucy",
      message: newMessage.message,
      receivername: newMessage.receivername,
      timestamp: new Date().toLocaleString(),
    };

    // post request to insert new message to database
    fetch('http://localhost:5000/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
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

    // Update the state and clear the input
    setMessageHistory([...messageHistory, message]);
    setNewMessage({ username: '', message: '', receivername: '' });
  }

  return (
    <div style={styles.chatContainer}>
      <h1 style={styles.header}>Chat Room</h1>
      <div style={styles.messageHistory}>
        <ul style={styles.messageList}>
          {messageHistory.map((message, index) => (
            <li key={index} style={styles.messageItem}>
              <strong>From: </strong>{message.username}
              <br />
              <strong>To: </strong>{message.receivername}
              <br />
              {message.message}
              <br />
              <small>{message.timestamp}</small>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.messageInputContainer}>
        <input
          type="text"
          value={newMessage.receivername}
          onChange={(e) => setNewMessage({ ...newMessage, receivername: e.target.value })}
          placeholder="Receiver name"
          style={styles.input}
        />
        <input
          type="text"
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
          placeholder="Your message"
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  chatContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    margin: '0',
    padding: '10px 0',
  },
  messageHistory: {
    height: '500px',
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  messageList: {
    listStyleType: 'none',
    padding: 0,
  },
  messageItem: {
    textAlign: 'left',
    padding: '8px',
    borderBottom: '1px solid #eee',
  },
  messageInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginRight: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  sendButton: {
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ChatBox;