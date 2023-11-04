// File: App.js
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import Account from './components/Accountpage/Account.js';
import Navbar from './components/Accountpage/Navbar/Navbar.js';
import Employee from './components/Employeepage/employee.js';
import Home from './components/Homepage/Homepage.js';
import JobPosting from './components/JobPostings/JobPostings.js';
import Login from './components/Loginpage/Loginpage.js';
import MessageDisplay from './components/MessageBoard/MessageBoard';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<MessageDisplay />} />
        <Route path="/job-posting" element={<JobPosting />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
