import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Complaint from "./pages/Complaint";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/signup" style={{ margin: "0 10px" }}>Sign Up</Link>
        <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
        <Link to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</Link>
        <Link to="/complaint" style={{ margin: "0 10px" }}>Complaint</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
    </Router>
  );
}

export default App;
