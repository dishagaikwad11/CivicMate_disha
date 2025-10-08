// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful! 🎉 (Dummy flow)");
    navigate("/login"); // 👈 redirect to login
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input type="text" name="name" placeholder="Name"
          value={formData.name} onChange={handleChange} required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        
        <input type="email" name="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        
        <input type="password" name="password" placeholder="Password"
          value={formData.password} onChange={handleChange} required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
