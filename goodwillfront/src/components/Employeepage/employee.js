import React, { Component } from 'react';
import './employee.css';
import logo from '../../kisspng-computer-icons-user-profile-barcelona-5adea27d5159b4.5489773415245400293332.jpg'

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
const Employee = () => {

    return (
        <div class="content">
        <div class="General">
        <h2>Name</h2>
            <p>Display name</p>           
            
               
           <img src= {logo} alt="react logo" style={{ width: '300px', }}/>
          
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


           