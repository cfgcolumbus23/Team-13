import React from 'react';
//import './JobPosting.css'; // Style your component here

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
        <div className="job-posting">
            <h1>{job.title}</h1>
            <h2>{job.company}</h2>
            <p>{job.location} | {job.type}</p>
            <h3>Description:</h3>
            <p>{job.description}</p>
            <h3>Required Qualifications:</h3>
            <ul>
                {job.requiredQualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                ))}
            </ul>
            {/* ... other sections */}
        </div>
    );
}

export default JobPosting;
