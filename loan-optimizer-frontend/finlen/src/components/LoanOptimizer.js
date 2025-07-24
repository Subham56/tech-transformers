import React, { useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const LoanOptimizer = () => {
  const [income, setIncome] = useState("");
  const [existingEMI, setExistingEMI] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [disposable, setDisposable] = useState(0);
  const chartRef = useRef();

  const handleOptimize = (e) => {
    e.preventDefault();
    const incomeNum = parseFloat(income);
    const emiNum = parseFloat(existingEMI);
    const remaining = incomeNum - emiNum;

    setDisposable(remaining);

    if (remaining > 15000) {
      setSuggestion("You can consider a higher loan amount or faster repayment.");
    } else if (remaining > 5000) {
      setSuggestion("You are eligible for a moderate loan. Stay within budget.");
    } else {
      setSuggestion("Focus on reducing existing liabilities before taking new loans.");
    }
  };

  const exportPDF = async () => {
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.text("Loan Optimization Report", 10, 10);
    pdf.addImage(imgData, "PNG", 10, 20, 180, 100);
    pdf.save("loan-optimization-report.pdf");
  };

  const chartData = [
    { name: "Income", value: parseFloat(income) || 0 },
    { name: "Existing EMI", value: parseFloat(existingEMI) || 0 },
    { name: "Disposable", value: disposable || 0 }
  ];

  return (
    <div className="card">
      <h2 style={{color:"white"}}>Loan Optimization</h2>
      <form onSubmit={handleOptimize}>
        <label>Monthly Income (₹)</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />

        <label>Existing EMI (₹)</label>
        <input
          type="number"
          value={existingEMI}
          onChange={(e) => setExistingEMI(e.target.value)}
          required
        />

        <button type="submit" className="button">Optimize</button>
      </form>

      {suggestion && (
        <>
          <div style={{ marginTop: "20px" }}>
            <h3>Suggestion: {suggestion}</h3>
          </div>
          <div ref={chartRef} style={{ height: 300, marginTop: "20px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <button className="button" onClick={exportPDF} style={{ marginTop: "20px" }}>
            Export Optimization Report to PDF
          </button>
        </>
      )}
    </div>
  );
};

export default LoanOptimizer;
