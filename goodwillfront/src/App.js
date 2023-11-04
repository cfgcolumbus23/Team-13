// File: App.js
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import Navbar from './components/Accountpage/Navbar/Navbar.js';
import Home from './components/Homepage/Homepage.js';
import JobPosting from './components/JobPostings/JobPostings.js';
import Login from './components/Loginpage/Loginpage.js';
import MessageDisplay from './components/MessageBoard/MessageBoard.js'; // Import the MessageDisplay component
import PostButton from './components/PostButton/PostButton.js';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-posting" element={<JobPosting />} />
      </Routes>
    </div>
  );
}

export default App;
