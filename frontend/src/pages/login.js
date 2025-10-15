import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    alert("Forgot Password feature coming soon!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to CivicMate</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="auth-options">
            
            <button
              type="button"
              className="forgot-btn"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="social-login">
          <button className="social-btn google">
            <FaGoogle /> Login with Google
          </button>
          <button className="social-btn facebook">
            <FaFacebookF /> Login with Facebook
          </button>
        </div>

        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="auth-link">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
