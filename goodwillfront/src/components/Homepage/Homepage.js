import React, { useState } from 'react';
import JobPosting from '../JobPostings/JobPostings';
import MessageDisplay from '../MessageBoard/MessageBoard';
import PostButton from '../PostButton/PostButton';

function Homepage() {
    const [messages, setMessages] = useState([]); // This state will hold the messages

  // Function to handle new message submissions
  const handleNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
    return (
        <div className="homepage-container">
            <div className="content-section">
                <h1>Hello World</h1>
            </div>
            <PostButton onNewMessage={handleNewMessage} /> {/* Updated PostButton with the handler */}
            <MessageDisplay messages={messages} /> {/* Display the messages */}
            <div className="job-posting-section">
                <JobPosting/>
            </div>
        </div>
    );
}

export default Homepage;
