// File: App.js
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import Navbar from './components/Accountpage/Navbar/Navbar.js';
import Home from './components/Homepage/Homepage.js';
import JobPosting from './components/JobPostings/JobPostings.js';
import Login from './components/Loginpage/Loginpage.js';
import PostButton from './components/PostButton/PostButton.js';
import MessageDisplay from './components/MessageBoard/MessageBoard.js'; // Import the MessageDisplay component

function App() {
  const [messages, setMessages] = useState([]); // This state will hold the messages

  // Function to handle new message submissions
  const handleNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <Navbar />
      <PostButton onNewMessage={handleNewMessage} /> {/* Updated PostButton with the handler */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-posting" element={<JobPosting />} />
      </Routes>
      <MessageDisplay messages={messages} /> {/* Display the messages */}
    </div>
  );
}

export default App;
