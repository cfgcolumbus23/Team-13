import React from "react";
import { Link } from 'react-router-dom'

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/messages"}>JobPosting</Link></li>
      <li><Link to={"/login"}>Login</Link></li>
      <li><Link to={"/employee"}>Employee</Link></li>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Menu
      </button>
    </div>
  );
};
export default SideBar;