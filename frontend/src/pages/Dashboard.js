import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import "./Dashboard.css";
import dashboardImage from "../assets/civic.png";
import civicImage1 from "../assets/civic1.png";

const Dashboard = () => {
  const navigate = useNavigate();

  // Language change handler (if i18n is setup)
  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
    // If using react-i18next, you would call: i18n.changeLanguage(lang)
  };

  const quotes = [
    "Clean city, green future 🌿",
    "Civic sense starts with you 🌍",
    "Together for a better tomorrow 🤝",
    "Every complaint makes a cleaner city 💧",
    "Smart citizens build smart cities 🏙️",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [quotes.length]); // add quotes.length here


  return (
    <div className="dashboard">
      {/* ---------- Top Bar ---------- */}
      <div className="top-bar">
  <div className="top-left">
    <h2 className="logo">CivicMate</h2>
    <p className="top-quote">{quotes[currentQuote]}</p>
  </div>

  <div className="top-right">
    <div className="language-selector">
      <FaGlobe className="globe-icon" />
      <select onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>

    <button className="top-login-btn" onClick={() => navigate("/login")}>
      Login
    </button>
  </div>
</div>


      {/* ---------- Hero Section ---------- */}
      <div
        className="dashboard-hero"
        style={{ backgroundImage: `url(${dashboardImage})` }}
      >
        <div className="overlay">
          <div className="dashboard-content">
            <h1 className="dashboard-title">Welcome to CivicMate</h1>
            <p className="dashboard-subtitle">
              CivicMate – Smart Civic Engagement Platform
            </p>
            <div className="dashboard-buttons">
              <button
                className="dashboard-btn"
                onClick={() => navigate("/knowmore")}
              >
                Know More
              </button>
              <button
                className="dashboard-btn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="dashboard-btn"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- About CivicMate Section ---------- */}
      <section className="about-civicmate">
        <div className="about-container">
          {/* Left Box */}
          <motion.div
            className="about-box about-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Connecting Citizens & Cities</h3>
            <p>
              CivicMate is a citizen-centric complaint management platform
              that bridges the gap between people and municipal bodies. It
              ensures transparency, faster redressal, and real-time updates
              on civic issues.
            </p>
            <p>
              The system encourages community participation, empowering every
              citizen to contribute toward a cleaner and smarter environment.
            </p>
          </motion.div>

          {/* Right Box */}
          <motion.div
            className="about-box about-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={civicImage1}
              alt="Civic engagement"
              className="about-img"
            />
            <div className="about-overlay">
              <p>
                “Empowering citizens to build cleaner, smarter, and more
                responsive cities — together.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Benefits to Citizens Section ---------- */}
      <section className="benefits-section">
        <h2 className="benefits-title">Benefits to Citizens</h2>

        <div className="benefits-container">
          <motion.div className="benefit-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3>🕒 Quick Resolution</h3>
            <p>
              Citizens receive faster grievance redressal through automated
              routing and tracking.
            </p>
          </motion.div>

          <motion.div className="benefit-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h3>📱 Easy Complaint Registration</h3>
            <p>
              Simple and intuitive interface for registering civic complaints
              anytime, anywhere.
            </p>
          </motion.div>

          <motion.div className="benefit-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }}>
            <h3>🔍 Transparency & Tracking</h3>
            <p>
              Track the status of complaints and monitor real-time updates from
              officials.
            </p>
          </motion.div>

          <motion.div className="benefit-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} viewport={{ once: true }}>
            <h3>🤝 Community Empowerment</h3>
            <p>
              Citizens collaborate to improve neighborhoods, creating cleaner
              and smarter cities.
            </p>
          </motion.div>

          <motion.div className="benefit-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} viewport={{ once: true }}>
            <h3>🌱 Environmental Awareness</h3>
            <p>
              Citizens are informed about local environmental issues and
              initiatives, promoting a sustainable lifestyle.
            </p>
          </motion.div>

          <motion.div className="benefit-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.8 }} viewport={{ once: true }}>
            <h3>💡 Civic Education</h3>
            <p>
              Provides resources and guidance to help citizens understand their
              rights, responsibilities, and civic processes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
