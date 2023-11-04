import React, { useState } from 'react';
import JobPosting from '../JobPostings/JobPostings';
import MessageDisplay from '../MessageBoard/MessageBoard';
import PostButton from '../PostButton/PostButton';
import './Homepage.css';

function Homepage() {
    const [messages, setMessages] = useState([]); // This state will hold the messages

  // Function to handle new message submissions
  const handleNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
    return (
        <div className='page'>
            <div className="column-container">
            <div className="horizontal-container">
                <div className="header-title">
                    <h1 className='header-text'>Goodwill</h1>
                </div>
                <div className="search-bar">

                </div>
            </div>
            <div className="horizontal-container">
                <div className="column-container post-container">

                </div>
                <div className="column-container job-container">
                    <JobPosting />
                    <JobPosting />
                    <JobPosting />
                    <JobPosting />
                    <JobPosting />
                </div>

            </div>
        </div>
        </div>
        
    );
}

export default Homepage;
