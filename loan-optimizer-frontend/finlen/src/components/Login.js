import React, { useState } from "react";
import './Login.css';
import loanImage from "../images/loan.png";
import loanImageLogo from "../images/credit-loan.png";
import Register from "./Register";
import { users } from "../data/User"; // Adjust path if needed
import { blue } from "@mui/material/colors";

const Login = ({ setIsAuthenticated , setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      setIsAuthenticated(true);
      setCurrentUser(matchedUser);
    } else {
      setUsername("");
      setPassword("");
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        {!showRegister ? (
          <>
            <div className="login-left">
              <img src={loanImage} alt="Loan Visual" />
            </div>

            <div className="login-right">
              <div className="loan-header">
                <img src={loanImageLogo} alt="Loan Logo" className="logo" />
                <h1 className="logo-title"><font color="blue">Loan Optimizer </font></h1>
              </div>

              <div className="login-form">
                <h2 style={{color: "blue"}}><u>Login </u></h2>
                <form onSubmit={handleSubmit}>
                  <label style={{color:"blue"}}>Username</label>
                  <input
                    type="text"
                    value={username}
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <label style={{color:"blue"}}>Password</label>
                  <input
                    type="password"
                    value={password}
                     placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <div className="button-container">
                    <button style={{ color:"white"}} type="submit" className="button"> Login</button>
                  </div>
                </form>
                <p style={{ color:"blue"}}>
                    New User? Create Account{" "} 
                    <button
                      type="button"
                      className="button button-secondary"
                      onClick={() => setShowRegister(true)}
                    >
                     <font color="white" >Register </font>
                   
                    </button>
                  </p>
              </div>
            </div>
          </>
        ) : (
          <Register
            setShowRegister={setShowRegister}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
