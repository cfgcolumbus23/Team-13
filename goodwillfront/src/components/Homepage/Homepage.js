import React from 'react';
import JobPosting from '../JobPostings/JobPostings';

function Homepage() {
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
