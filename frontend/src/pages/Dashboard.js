// src/pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to your Dashboard 🎉</h2>
      <p>Here you can track your activities and raise complaints.</p>
      <button 
        onClick={() => navigate("/complaint")}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Raise Complaint
      </button>
    </div>
  );
}

export default Dashboard;
