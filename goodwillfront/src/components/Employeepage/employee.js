import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './employee.css';
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { Divider } from 'rsuite'; 
import { blue } from '@mui/material/colors';
import { SIZE } from 'rsuite/esm/utils/constants';
//import '../node_modules/rsuite/dist/rsuite.min.css'; 

//<h2 style= {{color: 'blue'}}>Wage</h2>


const employee = () => { 
  
      return ( 
        
        <div style={{ margin: 10 }}> 
        <h1 style={{marginInlineStart: 100}}>Name  |  Job  |  Compensation | Schedule | Address  |   
Email</h1>
          <h2 style ={{marginRight: 100}}>Wage</h2>
         
          <h2 style ={{marginRight: 100}}>Hours</h2>
          
        
              
          </div> 
      ); 
  
} 
export default employee;





