import React from 'react';
import './JobPostings.css';
function JobPosting() {
    // Hardcoded job data for demonstration
    const job = {
        title: "Frontend Developer",
        company: "Tech Solutions Inc",
        location: "Remote",
        type: "Full-Time",
        description: "We are looking for a skilled frontend developer to join our team...",
        requiredQualifications: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years of experience in frontend development",
            "Proficiency in React.js and modern JavaScript",
        ],

    };

    return (
        <div className="card">
            <div className="card-image" ></div>
                <div className="card-content">
                <h2 className="card-title">title</h2>
                <h3 className="card-subtitle">subtitle</h3>
                <p className="card-description">description</p>
            </div>
        </div>
    );
}

export default JobPosting;
