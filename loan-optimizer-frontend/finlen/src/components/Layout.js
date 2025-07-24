// src/components/Layout.js
import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaCalculator,
  FaChartLine,
  FaSignOutAlt
} from "react-icons/fa";
import loanImageLogo from "../images/credit-loan.png";
import profile from "../images/profile-icon.jpg";

const Layout = ({ currentUser, setIsAuthenticated }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={loanImageLogo} alt="Loan Logo" className="logo" />
          <h1 className="sidebar-logo">Loan Optimiser</h1>
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaBars />
          </button>
        </div>

        <nav className="nav-links">
          <Link to="/dashboard">
            <FaHome /> {!collapsed && "Dashboard"}
          </Link>
          <Link to="/decision">
            <FaChartLine /> {!collapsed && "Loan Optimiser"}
          </Link>
          <Link to="/calculator">
            <FaCalculator /> {!collapsed && "Calculator"}
          </Link>
        </nav>

        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> {!collapsed && "Logout"}
        </button>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <img src={profile} alt="Profile" />
          <span>
            Welcome {currentUser?.username}
          </span>
        </header>

        <section className="page-container">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
