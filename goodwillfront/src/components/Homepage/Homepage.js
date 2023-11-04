import React, { useState } from 'react';
import JobPosting from '../JobPostings/JobPostings';
import './Homepage.css';

function Homepage() {
    const [messages, setMessages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle new message submissions
    const handleNewMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    // Function to handle search query changes
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };


    // Potentially here you could also filter your messages or job postings based on the searchQuery
    // const filteredMessages = messages.filter(message => message.includes(searchQuery));

    return (
        <div className='page'>
            <div className="column-container">
                <div className="horizontal-container">
                    <div className="header-title">
                        <h1 className='header-text'>Goodwill</h1>
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                    </div>
                </div>
                <div className="horizontal-container">
                    <div className="column-container post-container">
                        {/* You would place your PostButton and MessageDisplay components here if needed */}
                    </div>
                    <div className="column-container job-container">
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

