import React, { Component } from 'react';
import './employee.css';
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

   class Employee extends Component{
    constructor(props){
        super();
    }
    sidebar=()=>{
        <div class="emp">
        <Menu>
            <MenuItem icon={<HomeOutlinedIcon />}>General</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Summary</MenuItem>
            <MenuItem icon={<ContactsOutlinedIcon />}>Pay</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>Schedule</MenuItem>
        </Menu>
        </div>
        }
        content=()=>{
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
        }
        render(){
            return(
                <div>
                    {this.content}
                    {this.sidebar}
                </div>
            )
        }
   }

export default Employee;