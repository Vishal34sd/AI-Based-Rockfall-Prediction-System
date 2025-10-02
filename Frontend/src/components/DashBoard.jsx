// src/Dashboard.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const weatherData = [
    { day: "Mon", temperature: 30, rainfall: 10 },
    { day: "Tue", temperature: 28, rainfall: 20 },
    { day: "Wed", temperature: 25, rainfall: 15 },
    { day: "Thu", temperature: 27, rainfall: 5 },
    { day: "Fri", temperature: 29, rainfall: 12 },
  ];

  const activeMines = 12;
  const overallScore = 68;
  const lastUpdated = "2025-09-21 14:30";

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="text-2xl font-bold text-indigo-400 p-6">Rockfall AI</div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/dashboard" className="block w-full rounded-lg transition-transform duration-200 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 text-left px-4 py-3">
            
              Map & Zones
            
          </Link>
          <Link to="/analytic" className="block w-full rounded-lg transition-transform duration-200 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 text-left px-4 py-3">
            
              Analytical Tab
            
          </Link>
          <Link to="/alert" className="block">
            <button className="w-full rounded-lg transition-transform duration-200 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 text-left px-4 py-3">
              Alert Tab
            </button>
          </Link>
          <Link to="/report" className="block">
            <button className="w-full rounded-lg transition-transform duration-200 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 text-left px-4 py-3">
              Report Issue
            </button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
          <button className="text-white md:hidden">
            <FaBars size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <FaUserCircle size={28} />
            <span>User Name</span>
          </div>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg">
            Logout
          </button>
        </header>

        <main className="p-6 overflow-auto flex-1 space-y-8">
          <h1 className="text-4xl font-bold text-indigo-400 mb-6">
            Rockfall AI Dashboard
          </h1>

          {/* Key Metrics */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-gray-300 mb-2">Active Monitoring Mines</h2>
              <p className="text-3xl font-bold text-indigo-400">{activeMines}</p>
            </div>
            <div className="bg-gray-700 rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-gray-300 mb-2">Overall Prediction Score</h2>
              <p className="text-3xl font-bold text-indigo-400">{overallScore}%</p>
            </div>
            <div className="bg-gray-700 rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-gray-300 mb-2">Last Updated Prediction</h2>
              <p className="text-lg mb-2">{lastUpdated}</p>
              <span className={`px-3 py-1 rounded-full ${getSeverityColor("High")}`}>
                High Severity
              </span>
            </div>
          </section>

          {/* Map + Weather */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-gray-700 rounded-2xl shadow-lg p-4">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Rockfall Map</h2>
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[20.5937, 78.9629]}>
                  <Popup>High risk zone</Popup>
                </Marker>
                <Marker position={[21.1458, 79.0882]}>
                  <Popup>Moderate risk zone</Popup>
                </Marker>
              </MapContainer>
            </section>

            <section className="bg-gray-700 rounded-2xl shadow-lg p-4">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Weather Data</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weatherData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <XAxis dataKey="day" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Bar dataKey="temperature" fill="#6366f1" name="Temperature (°C)" />
                  <Bar dataKey="rainfall" fill="#10b981" name="Rainfall (mm)" />
                </BarChart>
              </ResponsiveContainer>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoard; 