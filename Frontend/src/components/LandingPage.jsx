import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide text-indigo-400">
          Rock-Shield AI
        </h1>
        <nav className="flex gap-10">
          <a href="#features" className="hover:text-indigo-400 transition text-xl">
            Features
          </a>
          <a href="#about" className="hover:text-indigo-400 transition text-xl">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition text-xl">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <Link to="/login"><button className="px-4 py-2 rounded-lg border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white transition">
            Login
          </button></Link>
          <Link to="/register"><button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
            Register
          </button></Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center justify-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-yellow-600">
          AI-Powered Rockfall Prediction <br /> & Alert System
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
          Ensure the safety of mining operations with cutting-edge AI technology
          that predicts rockfalls and provides real-time alerts for quick action.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-indigo-500 rounded-lg text-lg hover:bg-indigo-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg text-lg hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-8 px-10 py-12 bg-gray-800"
      >
        <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-400">
            Real-Time Alerts
          </h3>
          <p className="text-gray-300">
            Get instant alerts to protect workers and equipment in hazardous
            mining areas.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-400">
            Accurate Predictions
          </h3>
          <p className="text-gray-300">
            Our AI model analyzes geological data to predict rockfall risks with
            high precision.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-400">
            Easy Integration
          </h3>
          <p className="text-gray-300">
            Seamlessly integrates with existing safety infrastructure for
            hassle-free deployment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700 text-center text-gray-400">
        © {new Date().getFullYear()} Rockfall AI. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
