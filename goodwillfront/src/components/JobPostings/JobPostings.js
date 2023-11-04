import React from 'react';
import './JobPostings.css';
function JobPosting(props) {
    // Hardcoded job data for demonstration
    const job = {
        title: props.title,
        company: props.company,
        location: props.location,
        type: props.type,
        description: props.description,
        requiredQualifications: props.requiredQualifications,
        salaryIncrease: props.salaryIncrease,

    };

    return (
        <div className="card">
            <div className="card-image" ></div>
                <div className="card-content">
                <h2 className="card-title">{job.title}</h2>
                <h3 className="card-subtitle">{job.company}</h3>
                <p className="card-description">{job.description}</p>
                <h3 className="card-subtitle">Salary Increase: {job.salaryIncrease}</h3>
            </div>
        </div>
    );
}

export default JobPosting;
