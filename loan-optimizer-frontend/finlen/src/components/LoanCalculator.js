import React, { useState, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import  '../styles/LoanCalculator.css';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [term, setTerm] = useState("");
  const [emi, setEmi] = useState(null);
  const [data, setData] = useState([]);
  const chartRef = useRef();

  const calculateEMI = (e) => {
    e.preventDefault();
    const P = parseFloat(principal);
    const R = parseFloat(interest) / 12 / 100;
    const N = parseInt(term);

    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));

    const chartData = [];
    for (let i = 1; i <= N; i++) {
      chartData.push({ month: i, EMI: parseFloat(emiCalc.toFixed(2)) });
    }
    setData(chartData);
  };

  const exportToPDF = async () => {
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.text("Loan EMI Report", 10, 10);
    pdf.addImage(imgData, "PNG", 10, 20, 180, 100);
    pdf.save("emi-report.pdf");
  };

  return (
    <div className="card">
      <h2 style={{color:"white"}}>Loan EMI Calculator</h2>
      <form onSubmit={calculateEMI}>
        <label>Loan Amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
        />

        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
        />

        <label>Loan Term (months)</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />

        <button type="submit" className="button">Calculate EMI</button>
      </form>

      {emi && (
        <>
          <div style={{ marginTop: "20px" }}>
            <h3>Your Monthly EMI: ₹ {emi}</h3>
          </div>
          <div ref={chartRef} style={{ height: 300, marginTop: "20px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="EMI" stroke="#ff6f61" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <button className="button" onClick={exportToPDF} style={{ marginTop: "20px" }}>
            Export Report to PDF
          </button>
        </>
      )}
    </div>
  );
};

export default LoanCalculator;
