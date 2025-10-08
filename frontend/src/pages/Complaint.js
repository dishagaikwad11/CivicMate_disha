import React, { useState } from "react";

function Complaint() {
  const [formData, setFormData] = useState({ subject: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint submitted! 📝 (Dummy flow)");
    setFormData({ subject: "", description: "" }); // reset form
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Raise Complaint</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          required
        />
        <textarea
          name="description"
          placeholder="Complaint Description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px", minHeight: "100px" }}
          required
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
      </form>
    </div>
  );
}

export default Complaint;
