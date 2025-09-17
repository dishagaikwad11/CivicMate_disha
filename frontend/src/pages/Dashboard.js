import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Dashboard</h2>
      <p>Welcome to your dashboard. From here you can:</p>
      <ul>
        <li><Link to="/complaint">File a Complaint</Link></li>
        <li>Check complaint status (coming soon)</li>
      </ul>
    </div>
  );
}

export default Dashboard;
