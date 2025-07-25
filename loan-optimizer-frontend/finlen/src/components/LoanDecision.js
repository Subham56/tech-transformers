import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // ✅ Add this
import bgimage from "../images/loan.png";
import "../styles/Loanoptimizer.css";

const LoanDecision = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    pan: "",
    aadharNumber: "",
    gender:"",
    dateOfBirth: "",
    annualIncome: "",
    employmentStatus: "",
    employerOrBusiness:"",
    address: "",
    pincode: "",
    loanPurpose: "",
    loanPlan:"",
    existingEmi:"",
    cibilVerificationConsent: false,
  });
   
  const navigate = useNavigate(); //

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cibilVerificationConsent) {
      alert("You must agree to the terms before submitting.");
      return;
    }
    
    let loanType = "home";

switch (formData.loanPurpose) {
  case "HomeLoan":
    loanType = "home";
    break;
  case "EducationLoan":
    loanType = "education";
    break;
  case "CreditCardLoan":
    loanType = "credit";
    break;
  case "PersonalLoan":
    loanType = "personal";
    break;
  case "GoldLoan":
    loanType = "gold";
    break;
  case "BusinessLoan":
    loanType = "business";
    break;
  case "CarLoan":
    loanType = "car";
    break;
  case "all":
    loanType = "all";
    break;
  default:
    loanType = "home";
}

     const optimisedLoanUrl = `http://34.38.171.252:8080/api/optimizer/loan/${loanType}`;

   
    try {
  const response = await axios.post(optimisedLoanUrl, formData, {
  headers: {
    "Content-Type": "application/json",
  },
}); // ✅ Replace with real API
      console.log("Form submitted successfully:", response);

      // ✅ Optional: Show success message or store response
      alert("Application submitted successfully Loading data!" + response.data);
       
      // ✅ Navigate to table page
      navigate("/loanTable", { state: { application: response.data } });

    } catch (error) {
      console.error("Submission failed:", error);
        navigate("/loanTable");
      alert("Failed to submit. Please try again.");
    }
  };
  return (
    <div className="loan-container">
      <div className="loan-header">
        <img src={bgimage} alt="Loan Logo" className="logo" />
        <h1 style={{ color: "blue" }}> Loan Optimizer - </h1>
         <h4 style={{ color: "purple" }}> Get the best Loan options for your profile</h4>
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
            &nbsp;
            </div>
             <div className="form-group">
            <label>Date of Birth</label>
            <input type="text" name="dateOfBirth"  placeholder="YYYY-MM-DD"
value={formData.dateOfBirth} onChange={handleChange} required />
          </div>
          
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
  {["Male", "Female", "Other"].map((gender) => (
    <label
      key={gender}
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        border: "2px solid #007bff",
        backgroundColor: formData.gender === gender ? "#007bff" : "white",
        color: formData.gender === gender ? "white" : "#007bff",
        fontWeight: "bold",
      }}
    >
      <input
        type="radio"
        name="gender"
        value={gender}
        checked={formData.gender === gender}
        onChange={handleChange}
        placeholder="Gender"
        style={{ display: "none" }}
      />
      {gender}
    </label>
  ))}
</div>

          <div className="form-group">
            <label>PAN Number</label>
            <input type="text" name="pan"  minLength={10}  maxLength={10} pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
    placeholder="ABCDE1234F" value={formData.pan} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="number" name="aadharNumber"  pattern="\d{12}" maxLength={12} placeholder="Enter your 12-digit Aadhar number" value={formData.aadharNumber} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phoneNumber"   minLength={10} maxLength={10} pattern="\d{10}"  placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="emailAddress" placeholder="Enter your email address" value={formData.emailAddress} onChange={handleChange} required />
          </div>

          <div className="form-group full-width">
            <label> Address</label>
            <textarea name="address" placeholder="Enter your Full address" value={formData.address} onChange={handleChange}></textarea>
          </div>
           <div className="form-group">
            <label>Pincode</label>
            <input type="number" name="pincode" placeholder="Enter your area pincode" value={formData.pincode} onChange={handleChange} />
          </div>

           <div className="form-group full-width">
              <label htmlFor="employmentStatus"> Employement </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange} required
              >
                <option value="">-- Select Occupation --</option>
                <option value="Salaried">Salaried</option>
                <option value="Business">Business Owner</option>
                <option value="Self_Employed">Self-Employed</option>
                <option value="Unemployed">UnEmployed</option>
                <option value="Other">Other</option>
              </select>
            </div>

           <div className="form-group">
            <label>Employer Name (if Salaried)</label>
            <input type="text" name="employerOrBusiness" placeholder="Enter Employer Name" value={formData.employerOrBusiness} onChange={handleChange} />
          </div>

                    
          <div className="form-group">
            <label>Annual Income 
            </label>
            <input type="number" name="annualIncome" placeholder="Enter your income" value={formData.annualIncome} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Loan Purpose (₹)</label>
            <input type="text" name="loanPurpose" placeholder="Loan Purpose" value={formData.loanPurpose} onChange={handleChange} />
          </div>

                <div className="form-group full-width">
                <label htmlFor="loanPlan">Loan Plan </label>
                <select
                  id="loanPlan"
                  name="loanPlan"
                  value={formData.loanPlan}
                  onChange={handleChange}
                >
                  <option value="">-- Select Loan Plan --</option>
                  <option value="HomeLoan">Home Loan</option>
                  <option value="EducationLoan">Education</option>
                  <option value="CreditCardLoan">Credit</option>
                  <option value="PersonalLoan">Personal</option>
                  <option value="GoldLoan">Gold</option>
                  <option value="BusinessLoan">Business</option>
                  <option value="CarLoan">Car</option>
                  <option value="all">All</option>
                </select>
              </div>
           <div className="form-group">
            <label>Existing EMI 
            </label>
            <input type="number" name="existingEmi" placeholder="Enter your Existing EMI" value={formData.existingEmi} onChange={handleChange} />
          </div>

          <div className="form-group checkbox full-width">
            <input type="checkbox" name="cibilVerificationConsent" checked={formData.cibilVerificationConsent} onChange={handleChange} />
            <label>I agree to the terms and authorize data usage.</label>
          </div>

          <div className="form-group full-width">
            <button type="submit">Proceed for further Recommendation</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoanDecision;
