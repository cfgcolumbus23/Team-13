import React from 'react';
import './employee.css';

const Employee = () => {
    // Hardcoded data for the employee Lisa
    const employeeData = {
        name: 'Lisa Smith',
        phone: '555-123-4567',
        address: '1234 Maple Street, Columbus, OH 43215',
        email: 'lisa.smith@goodwillcolumbus.org',
        employeeId: 'GS2345',
        jobTitle: 'Retail Associate',
        startDate: 'March 12, 2020',
        hourlyWage: '$15.00',
        paySchedule: 'Bi-weekly',
        hoursWorked: '80 hours',
    };

    return (
        <div className="employee-container">
            <div className="employee-card">
                <h1>👤 Employee Information</h1>
                <div className="info-section">
                    <h2>📛 Name</h2>
                    <p>{employeeData.name}</p>
                </div>
                <div className="info-section">
                    <h2>📞 Phone:</h2>
                    <p>{employeeData.phone}</p>
                </div>
                <div className="info-section">
                    <h2>🏠 Address:</h2>
                    <p>{employeeData.address}</p>
                </div>
                <div className="info-section">
                    <h2>📧 Email:</h2>
                    <p>{employeeData.email}</p>
                </div>
                <div className="info-section">
                    <h2>🆔 Employee ID:</h2>
                    <p>{employeeData.employeeId}</p>
                </div>
            </div>
            <div className="employee-card">
                <div className="info-section">
                    <h2>💼 Job Title</h2>
                    <p>{employeeData.jobTitle}</p>
                </div>
                <div className="info-section">
                    <h2>📅 Employment Start Date</h2>
                    <p>{employeeData.startDate}</p>
                </div>
            </div>
            <div className="employee-card">
                <div className="info-section">
                    <h2>💵 Hourly Wage</h2>
                    <p>{employeeData.hourlyWage}</p>
                </div>
                <div className="info-section">
                    <h2>🗓 Pay Schedule</h2>
                    <p>{employeeData.paySchedule}</p>
                </div>
                <div className="info-section">
                    <h2>⏰ Hours Worked</h2>
                    <p>{employeeData.hoursWorked}</p>
                </div>
            </div>
        </div>  
    );
}

export default Employee;