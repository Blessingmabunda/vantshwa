import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import {

  mdiHome,
  mdiAccount,
  mdiFormatListCheckbox,
  mdiCog,
  mdiChartLine,
  mdiForum,
  mdiCalendar,
  mdiBell,
  mdiMagnify,
  mdiBriefcase,
  mdiHelpCircle,
} from "@mdi/js";
import "./../css/sidebar.css";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log("User logged out");
    navigate("/login"); // Navigate to the signup page
  };
  const Skills = () => {
    // Add logout functionality here
    console.log("User logged out");
    navigate("/Skill"); // Navigate to the signup page
  };
  const Table = () => {
    // Add logout functionality here
    console.log("User logged out");
    navigate("/Table"); // Navigate to the signup page
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        className={`floating-btn ${isSidebarVisible ? "active" : ""}`}
        onClick={toggleSidebar}
        aria-label={isSidebarVisible ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarVisible ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarVisible ? "visible" : ""}`} aria-label="Main Sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Dashboard</h2>
        </div>

        {/* Profile Section */}
        <div className="sidebar-profile">
          <div className="profile-picture">
            <img
              src="https://via.placeholder.com/80" // Replace with actual profile picture URL
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile-details">
            <p className="profile-email">blessie999@gmail.com</p> {/* Replace with dynamic email */}
            
          </div>
        </div>

        <nav className="sidebar-menu">
          <ul>
            <li className="menu-item">
              <Icon path={mdiHome} size={1} className="menu-icon" />
              <span className="menu-text">Overview</span>
            </li>
            <li className="menu-item">
              <Icon path={mdiAccount} size={1} className="menu-icon" />
              <span className="menu-text">My Profile</span>
            </li>
            <li className="menu-item">
              <Icon path={mdiFormatListCheckbox} size={1} className="menu-icon" />
              <span className="menu-text" onClick={Skills}>Skills Showcase</span>
            </li>
            <li className="menu-item">
              <Icon path={mdiFormatListCheckbox} size={1} className="menu-icon" />
              <span className="menu-text" onClick={Table}>Manage My Skills</span>
            </li>
          
            <li className="menu-item">
              <Icon path={mdiBriefcase} size={1} className="menu-icon" />
              <span className="menu-text">Opportunities</span>
            </li>
            <li className="menu-item">
              <Icon path={mdiHelpCircle} size={1} className="menu-icon" />
              <span className="menu-text">Help Center</span>
            </li>
          </ul>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
      </aside>
      
    </>
  );
};

export default Sidebar;
