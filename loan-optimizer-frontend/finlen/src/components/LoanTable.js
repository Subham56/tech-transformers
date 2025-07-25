import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/LoanTable.css";

const LoanTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.application;

  return (
    <div className="table-wrapper">
      <h2>Loan Recommendation</h2>
      <table className="loan-table">
        <tbody>
                   <tbody>
          {Object.entries(formData).map(([key, value]) => (
            <  tr key={key}>
              <th>{key}</th>
              <td>{String(value)}</td>
            </tr>
          ))}
        </tbody>
          <tr><th>Loan type</th> <td>Test dataloanAmount</td> </tr>
          <tr><th>Interest Rate</th><td>Test dataphone</td></tr>
          <tr><th>Loan EMI</th><td>Test dataemail</td></tr>
          <tr><th>Total Paid</th><td>Test datapan</td></tr>
          <tr><th>Total Interest Paid</th><td>Test dataaadhar</td></tr>
          <tr><th>Processing fees</th><td>Test datadob</td></tr>
          <tr><th>Tenure (Years) </th><td>₹ Test dataincome</td></tr>
          <tr><th>Credit Score required</th><td>Test dataoccupation</td></tr>
          <tr><th>Loan Disbursement Days</th><td>Test dataaddress</td></tr>
          <tr><th>Remarks</th><td>Test datapincode</td></tr>
          <tr><th>Prepayment Allowed</th><td>₹ Test dataloanAmount</td></tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
