import React from "react";
import { Link } from 'react-router-dom'

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <button><Link to={"/"}>Home</Link></button>
      <button><Link to={"/messages"}>Messages</Link></button>
      <button><Link to={"/job-posting"}>Jobposting</Link></button>
      <button><Link to={"/login"}>Login</Link></button>
      <button><Link to={"/employee"}>Employee</Link></button>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Menu
      </button>
    </div>
  )
};
export default SideBar;
