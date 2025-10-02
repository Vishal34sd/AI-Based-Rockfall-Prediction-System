import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const features = [
    {
      title: "Real-Time Alerts",
      desc: "Get instant alerts to protect workers and equipment in hazardous mining areas.",
    },
    {
      title: "Accurate Predictions",
      desc: "Our AI model analyzes geological data to predict rockfall risks with high precision.",
    },
    {
      title: "Easy Integration",
      desc: "Seamlessly integrates with existing safety infrastructure for hassle-free deployment.",
    },
    {
      title: "Integrated Maps",
      desc: "Visualize mining areas and potential rockfall zones on interactive maps for better decision-making.",
    },
    {
      title: "Updated History",
      desc: "Maintain a comprehensive log of past incidents and predictions for analysis and reporting.",
    },
    {
      title: "Real-Time Notifications",
      desc: "Receive alerts and notifications directly on devices to react immediately to hazards.",
    },
  ];

  const rocks = [...Array(25)];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Rockfall animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {rocks.map((_, i) => {
  const width = 12 + Math.random() * 20;   // width between 8px - 28px
  const height = 9 + Math.random() * 18;  // height between 6px - 24px
  const borderRadius = 20 + Math.random() * 30; // 20% - 50% border-radius
  const color = ["#A0A0A0", "#888888", "#B0A070", "#707070"][Math.floor(Math.random() * 4)];

  return (
    <div
      key={i}
      className="absolute animate-rockfall"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}%`,
        left: `${Math.random() * 100}%`,
        backgroundColor: color,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    ></div>
  );
})}

      </div>

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-700 relative z-10">
        <h1 className="text-2xl font-bold tracking-wide text-indigo-400 animate-pulse">
          Rock-Shield AI
        </h1>
        <nav className="flex gap-10">
          <a href="#features" className="hover:text-indigo-400 transition text-xl hover:scale-110">
            Features
          </a>
          <a href="#about" className="hover:text-indigo-400 transition text-xl hover:scale-110">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition text-xl hover:scale-110">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <Link to="/login" className="px-4 py-2 rounded-lg border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:scale-105">
            Register
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105 text-white inline-block text-center"
          >
            Go to Dashboard
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center justify-center px-6 py-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-yellow-600 
                       overflow-hidden whitespace-nowrap animate-typing">
          AI - Based Rockfall Prediction & Alert System
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8 opacity-0 animate-fadeInUp animate-delay-400">
          Harness the power of cutting-edge AI to foresee rockfalls before they happen,
          safeguard mining operations, and react instantly with real-time alerts.
          Safety meets intelligence.
        </p>

        <div className="flex gap-4 opacity-0 animate-fadeInUp animate-delay-600">
          <button className="px-6 py-3 bg-indigo-500 rounded-lg text-lg hover:bg-indigo-600 transition-transform transform hover:scale-110">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg text-lg hover:bg-gray-700 transition-transform transform hover:scale-110">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-8 px-10 py-12 bg-gray-800 relative z-10"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-6 bg-gray-900 rounded-2xl shadow-lg transform transition hover:shadow-2xl hover:-translate-y-2 duration-500 opacity-0 animate-fadeInUp animate-delay-[${idx * 200}]`}
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700 text-center text-gray-400 relative z-10">
        © {new Date().getFullYear()} Rockfall AI. All rights reserved.
      </footer>

      {/* Tailwind keyframe animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-400 { animation-delay: 0.4s; }
          .animate-delay-600 { animation-delay: 0.6s; }

          @keyframes typing {
            0% { width: 0 }
            100% { width: 100% }
          }
          .animate-typing {
            width: 0;
            animation: typing 6s steps(50, end) forwards;
          }

          @keyframes rockfall {
            0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
            50% { transform: translateY(50vh) rotate(15deg); opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(-15deg); opacity: 0; }
          }
          .animate-rockfall {
            animation-name: rockfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
