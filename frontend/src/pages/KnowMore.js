import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./KnowMore.css";

const steps = [
  {
    icon: "🔍",
    title: "Discover Issues",
    desc: "Find local civic problems like potholes, garbage, streetlights, etc."
  },
  {
    icon: "📸",
    title: "Capture Issues",
    desc: "Take photos of local problems like potholes, garbage, or broken streetlights and submit them instantly via CivicMate."
  },
  {
    icon: "⏳",
    title: "Track Progress",
    desc: "Follow your complaint from submission to resolution."
  },
  {
    icon: "📝",
    title: "Submit Your Complaint",
    desc: "Submit your complaint with photos and details. It’s easy and quick!"
  },
  {
    icon: "👥",
    title: "Engage With Community",
    desc: "Connect with neighbors, vote on priority issues, and see collective impact."
  }
];

const KnowMore = () => {
  const navigate = useNavigate();

  return (
    <div className="knowmore-container">
      {/* Header */}
      <header className="knowmore-header">
        <h1>Welcome to CivicMate!</h1>
        <p>Step into your city’s transformation journey.</p>
      </header>

      {/* Timeline / Roadmap */}
      <div className="timeline">
        <div className="timeline-line"></div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="icon">{step.icon}</div>
            <div className="content">
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Start Exploring Button */}
      <motion.button
        className="start-btn"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Exploring
      </motion.button>
    </div>
  );
};

export default KnowMore;
