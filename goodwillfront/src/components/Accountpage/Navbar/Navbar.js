import React from 'react';
import './Navbar.css';
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { alignProperty } from '@mui/material/styles/cssUtils';


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
                <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                <MenuItem icon={<ReceiptOutlinedIcon />}>Messages</MenuItem>
                <MenuItem icon={<PeopleOutlinedIcon />}>Login</MenuItem>
            </Menu>
        </Sidebar>
        </div>
    );
}
export default Navbar;

