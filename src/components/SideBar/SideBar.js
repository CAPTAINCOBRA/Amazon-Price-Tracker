import React from "react";
// import "./SideBar.scss";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Price Tracker</h3>

          <div className="sidebar__headerRight">
            <p>Sign In</p>

            <p>Sign Up</p>

            <p>Help</p>

            <p>Settings</p>

            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
