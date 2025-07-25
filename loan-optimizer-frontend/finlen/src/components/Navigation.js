
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
     <div className={`nav-links ${menuOpen ? "show" : ""}`}>
     <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/decision" >Loan Optimizer</NavLink>
    <NavLink to="/calculator">Loan Calculator</NavLink>

    <button className="logout-button" onClick={handleLogout}><font style={{color:'blue'}}>Logout</font></button>
       &nbsp;&nbsp;&nbsp;&nbsp;<h2 style={{color:'blue'}}>Welcome to Loan Optimiser</h2>
</div>
    </nav>
  );
};

export default Navigation;
