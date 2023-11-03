// File: App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Accountpage/Navbar/Navbar.js';
import Home from './components/Homepage/Homepage.js';
import JobPosting from './components/JobPostings/JobPostings.js';
import Login from './components/Loginpage/Loginpage.js';

function App() {
  const [data, setData] = useState([{}])
  
    useEffect(() => {
      fetch('http://127.0.0.1:5000/test') // Adjust the URL to match your Flask endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-posting" element={<JobPosting />} /> {/* New hardcoded job posting route */}
      </Routes>
    </div>
  );
}

export default App;
