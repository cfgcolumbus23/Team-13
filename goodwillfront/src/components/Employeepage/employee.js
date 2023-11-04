import React, { Component } from 'react';
import './employee.css';

const Employee = () => {

    return (
        <div class="content">
        <div class="General">
            <h2>Name</h2>
            <p>Display name</p>
            <h2>Phone</h2>
            <p>Display phone</p>
            <h2>address</h2>
            <p>Display address</p>
            <h2>email</h2>
            <p>Display email</p>
            <h2>Employee ID</h2>
            <p>Display ID</p>
        </div>
        <div class="job">
            <h2>Job Title</h2>
            <p>Display title</p>
            <h2>Employment startdate</h2>
            <p>Display employment start date</p>
        </div><div class="pay">
            <p>Display hourly wage</p>
            <h2>Pay Schedule</h2>
            <p>Display pay sched</p>
            <h2>Hours worked</h2>
            <p>Display hours worked in pay period</p>
        </div></div>
    )
}

export default Employee;