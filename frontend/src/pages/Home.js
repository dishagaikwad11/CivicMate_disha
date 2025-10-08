import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>CivicMate</h1>
      <p>Building stronger cities through citizen participation</p>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#0077cc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Features</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🧾 Report civic issues easily</li>
          <li>📊 Track issue resolution progress</li>
          <li>💬 Connect with local authorities</li>
          <li>🤝 Collaborate with your community</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
