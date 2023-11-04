import React from 'react';
import JobPosting from '../JobPostings/JobPostings';

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="content-section">
                <h1>Hello World</h1>
            </div>
            <div className="job-posting-section">
                <JobPosting/>
            </div>
        </div>
    );
}

export default Homepage;
