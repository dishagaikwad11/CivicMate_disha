import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-yellow-400 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CivicMate</h1>
          <nav className="space-x-6 text-gray-800 font-medium">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/complaint" className="hover:text-gray-600">Complaints</Link>
            <Link to="/dashboard" className="hover:text-gray-600">Dashboard</Link>
            <Link to="/signup" className="px-4 py-2 bg-white border border-gray-700 rounded-md hover:bg-gray-100">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex-1 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1561484930-998b6a6a2f54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming Civic Engagement in Your City 🚀
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            CivicMate helps citizens raise complaints and track solutions, making cities more responsive and transparent.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow-md hover:bg-yellow-500"
            >
              Join Now
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm text-center py-4">
        © {new Date().getFullYear()} CivicMate. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Home;
