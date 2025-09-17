import React, { useState } from "react";

function Complaint() {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint submitted! 📝 (Dummy flow)");
    setComplaint("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File a Complaint</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <textarea
          placeholder="Enter your complaint..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          style={{ width: "100%", height: "100px", marginBottom: "10px", padding: "8px" }}
          required
        ></textarea>
        <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
      </form>
    </div>
  );
}

export default Complaint;
