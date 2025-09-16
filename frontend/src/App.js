import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Hello from CivicMate 🚀</h1>
        <nav>
          <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/signup" element={<h2>Signup Page</h2>} />
          <Route path="/login" element={<h2>Login Page</h2>} />
          <Route path="/" element={<h2>Welcome Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
