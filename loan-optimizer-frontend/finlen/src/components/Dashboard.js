import React from "react";
import '../styles/Dashboard.css';
import loanImage from "../images/loan.png"; 
const Dashboard = () => {
  return (
   <div className="navigate-container">
      <div className="overlay">
        <h1 className="welcome-text">Welcome to the Loan Optimiser Application</h1>
        <img src={loanImage} alt="Loan Icon" className="loan-image" />
    
    </div>
    </div>
  );
};

export default Dashboard;
