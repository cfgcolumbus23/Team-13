import React, { Component } from 'react';
import './employee.css';

const Employee = () => {

    return (
        <div class="content">
        <div class="General"><h2>General</h2>
            <h3>Name</h3>
            <p>Display name</p>
            <h3>Phone</h3>
            <p>Display phone</p>
            <h3>address</h3>
            <p>Display address</p>
            <h3>email</h3>
            <p>Display email</p>
            <h3>Employee ID</h3>
            <p>Display ID</p>
        </div>
        <div class="job"><h2>Job</h2>
            <h3>Job Title</h3>
            <p>Display title</p>
            <h3>Employment startdate</h3>
            <p>Display employment start date</p>
        </div><div class="pay">
            <h3>Wage</h3>
            <p>Display hourly wage</p>
            <h3>Pay Schedule</h3>
            <p>Display pay sched</p>
            <h3>Hours worked</h3>
            <p>Display hours worked in pay period</p>
        </div></div>
    )
}

export default Employee;