// File: App.js
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import './components/styles.css';
import Employee from './components/Employeepage/employee.js';
import Home from './components/Homepage/Homepage.js';
import JobPosting from './components/JobPostings/JobPostings.js';
import Login from './components/Loginpage/Loginpage.js';
import MessageDisplay from './components/MessageBoard/MessageBoard';
import SideBar from './components/SideBar.js';

const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
  setSideBarOpen(!sidebarOpen);
  }
  return (
    <div>
      <span>
          <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<MessageDisplay />} />
        <Route path="/job-posting" element={<JobPosting />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
 
    </span>
 
  
    </div>
    
  );
}

export default App;
 