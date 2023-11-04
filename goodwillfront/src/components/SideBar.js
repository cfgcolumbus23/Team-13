import React from "react";
import { Link } from 'react-router-dom'

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <li><Link to={'/Home'}>Home</Link></li>
      <li><Link to={'/JobPosting'}>JobPosting</Link></li>
      <li><Link to={'/Login'}>Login</Link></li>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Menu
      </button>
    </div>
  );
};
export default SideBar;