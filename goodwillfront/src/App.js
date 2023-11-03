// File: App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Accountpage/Navbar/Navbar.js';
import Home from './components/Homepage/Homepage.js';
import Login from './components/Loginpage/Loginpage.js';
import JobPosting from './components/JobPostings/JobPostings.js';

function App() {
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
