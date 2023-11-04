import React from "react";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div> Account </div>
      <div> Home </div>
      <div> Messages! </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Toggle Sidebar
      </button>
    </div>
  );
};
export default SideBar;