import React, { useState } from 'react';
import '../styles/Register.css'; // Ensure you import the CSS file
import loanImageLogo from "../images/finlen3.png";

const Register = ({ setShowRegister }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    userName:'',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(
      (user) => user.email.toLowerCase() === form.email.toLowerCase()
    );

    if (userExists) {
      alert("User with this email already exists.");
      return;
    }

    const newUser = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      password: form.password,
      username:form.userName,
      role: "User",
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Registration successful. Please login.");
    setShowRegister(false);
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
      <div className="loan-header">
      <img src={loanImageLogo} alt="Loan Logo" className="logo" />
        <h2 className="register-title">Create an Account</h2>
        </div>
        <form onSubmit={handleRegister} className="register-form">
          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
           <input
            name="userName"
            type="text"
            placeholder="User Name"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-button">Register</button>
          <p className="switch-login">
            Already have an account?{" "}
            <button
              type="button"
              className="login-link"
              onClick={() => setShowRegister(false)}
            >
              Back to Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
