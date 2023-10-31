import React, { useState } from 'react';
import './sidebar.css'

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      return 'bx bx-menu-alt-right';
    } else {
      return 'bx bx-menu';
    }
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo-details">
      <div className="logo_name">Botifly</div>
      <i className={menuBtnChange()} id="btn" onClick={toggleSidebar}></i>
    </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <div>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </div>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Nos Services</span>
          </a>
          <span className="tooltip">Nos Services</span>
        </li>
        <li>
          <a href="#">
          <i class='bx bx-bot'></i>
            <span className="links_name">Your Bots</span>
          </a>
          <span className="tooltip">Your Bots</span>
        </li>
        <li>
          <a href="#">
          <i className="bx bx-user"></i>
            <span className="links_name">Utilisateurs</span>
          </a>
          <span className="tooltip">Utilisateurs</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="links_name">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img
              src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z"
              alt="profileImg"
            />
            <div className="name_job">
              <div className="name">Stella Army</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
