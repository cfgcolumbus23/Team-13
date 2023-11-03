import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './employee.css';
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";


function Employee() {
    return (
        <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem icon={<HomeOutlinedIcon />}>General</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Summary</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Pay</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Schedule</MenuItem>
        </Menu>
      </Sidebar>
      );
}



export default Employee;