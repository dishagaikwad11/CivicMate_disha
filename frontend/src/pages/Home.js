import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to CivicMate!</h1>
      </header>

      <section className="home-hero">
        <p>Discover how CivicMate works and make your city better.</p>
        <Link to="/knowmore">
          <button>Know More</button>
        </Link>
      </section>

      {/* Cards / Stats */}
      <div className="home-cards">
        <div className="home-card">Open Complaints: 12</div>
        <div className="home-card">Resolved: 34</div>
        <div className="home-card">Rewards: 120 pts</div>
      </div>
    </div>
  );
};

export default Home;
