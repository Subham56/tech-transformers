import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LoanCalculator from "./components/LoanCalculator";
import LoanDecision from "./components/LoanDecision";
import Navigation from "./components/Navigation"; // ✅ import this

export function AppWrapper() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const location = useLocation();

  const isLoginPage = location.pathname === "/" && !isAuthenticated;

  return (
    <div className={isLoginPage ? "login-background" : "app-container"}>
      
      {/* ✅ Show navigation if not on login page */}
      {!isLoginPage && (
        <Navigation setIsAuthenticated={setIsAuthenticated} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setCurrentUser={setCurrentUser}
              />
            )
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/decision" element={<LoanDecision />} />
        <Route path="/calculator" element={<LoanCalculator />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
