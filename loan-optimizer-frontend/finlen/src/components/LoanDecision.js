import React, { useState } from "react";
import axios from "axios";
import bgimage from "../images/loan.png"; // Adjust the path as needed
import "../styles/Loanoptimizer.css";

const LoanDecision = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    pan: "",
    aadhar: "",
    pincode: "",
    dob: "",
    income: "",
    occupation: "",
    address: "",
    loanAmount: "",
    loanTerm: "",
    loanPurpose: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit-loan", formData);
      alert("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  return (
    <div className="loan-container">
      <div className="loan-header">
        <img src={bgimage} alt="Loan Logo" className="logo" />
        <h1 style={{ color: "blue" }}>Loan Optimizer</h1>
      </div>
 <div className="scrollable-form">
      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Middle Name</label>
            <input type="text" name="middleName" placeholder="Enter your middle name" value={formData.middleName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>PAN Number</label>
            <input type="text" name="pan" placeholder="ABCDE1234F" value={formData.pan} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="text" name="aadhar" placeholder="Enter your 12-digit Aadhar number" value={formData.aadhar} onChange={handleChange} />
          </div>

         

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Annual Income</label>
            <input type="number" name="income" placeholder="Enter your income in ₹" value={formData.income} onChange={handleChange} />
          </div>

          <div className="form-group full-width">
  <label htmlFor="occupation">Occupation </label>
  <select
    id="occupation"
    name="employement"
    value={formData.employement}
    onChange={handleChange}
  >
    <option value="">-- Select Occupation --</option>
    <option value="Engineer">Salaried</option>
    <option value="Business Owner">Business Owner</option>
    <option value="Student">Student</option>
    <option value="Other">Other</option>
  </select>
</div>


          <div className="form-group full-width">
            <label>Residential Address</label>
            <textarea name="address" placeholder="Enter your full address" value={formData.address} onChange={handleChange}></textarea>
          </div>
           <div className="form-group">
            <label>Pincode</label>
            <input type="number" name="pincode" placeholder="Enter your area pincode" value={formData.pincode} onChange={handleChange} />
          </div>
        
          <div className="form-group">
            <label>Loan Amount (₹)</label>
            <input type="number" name="loanAmount" placeholder="How much do you need?" value={formData.loanAmount} onChange={handleChange} />
          </div>

          <div className="form-group full-width">
  <label htmlFor="loanPurpose">Loan Plan </label>
  <select
    id="loanPurpose"
    name="loanPurpose"
    value={formData.loanPurpose}
    onChange={handleChange}
  >
    <option value="">-- Select Loan Plan --</option>
    <option value="Home">Home Renovation</option>
    <option value="Education">Education</option>
    <option value="Medical">Medical</option>
    <option value="Business">Business</option>
    <option value="Car">Car</option>
    <option value="Other">Other</option>
  </select>
</div>


          <div className="form-group checkbox full-width">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            <label>I agree to the terms and authorize data usage.</label>
          </div>

          <div className="form-group full-width">
            <button type="submit">Submit Application</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoanDecision;
