import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { alignProperty } from '@mui/material/styles/cssUtils';
import React from 'react';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const navStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div style={navStyle}>
        <Sidebar style={{ height: "100vh" }}>
            <Menu>
                <Link to="/" ><MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem></Link>
                <Link to="/messages" ><MenuItem icon={<ReceiptOutlinedIcon />}>Messages</MenuItem></Link>
                <Link to="/login" ><MenuItem icon={<PeopleOutlinedIcon />}>Login</MenuItem></Link>
            </Menu>
        </Sidebar>
        </div>
    );
}
export default Navbar;

