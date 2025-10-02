// src/components/AnalyticalTabPage.jsx
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaUserCircle, FaBars } from "react-icons/fa";

const AnalyticalTab = () => {
  const [activeTab, setActiveTab] = useState("analytics");
  

  const mineData = [
    { zone: "Sector 1", slopeAngle: 35, benchHeight: 12, riskScore: 70, severity: "High" },
    { zone: "Sector 2", slopeAngle: 25, benchHeight: 10, riskScore: 45, severity: "Medium" },
    { zone: "Sector 3", slopeAngle: 20, benchHeight: 8, riskScore: 30, severity: "Low" },
    { zone: "Sector 4", slopeAngle: 40, benchHeight: 15, riskScore: 80, severity: "High" },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High": return "bg-red-500";
      case "Medium": return "bg-yellow-500";
      case "Low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="text-2xl font-bold text-indigo-400 p-6">Rockfall AI</div>
        <nav className="flex-1 px-4 space-y-2">
          <button
            onClick={() => setActiveTab("map")}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 ${
              activeTab === "map" ? "bg-gray-700" : ""
            }`}
          >
            Map & Zones
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 ${
              activeTab === "analytics" ? "bg-gray-700" : ""
            }`}
          >
            Analytical Tab
          </button>
          <button
            onClick={() => setActiveTab("alerts")}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 ${
              activeTab === "alerts" ? "bg-gray-700" : ""
            }`}
          >
            Alert Tab
          </button>
          <button
            onClick={() => setActiveTab("report")}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 ${
              activeTab === "report" ? "bg-gray-700" : ""
            }`}
          >
            Report Issue
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
          <button className="text-white md:hidden">
            <FaBars size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <FaUserCircle size={28} />
            <span>User Name</span>
          </div>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg">Logout</button>
        </header>

        {/* Analytical Tab Content */}
        <main className="p-6 overflow-auto flex-1 space-y-8">
          <h1 className="text-4xl font-bold text-indigo-400 mb-6">Analytical Overview</h1>

          {/* Mine Info Cards */}
          <section className="grid md:grid-cols-2 gap-6">
            {mineData.map((mine, index) => (
              <div key={index} className="bg-gray-700 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-2 text-indigo-300">{mine.zone}</h2>
                <p>Slope Angle: <span className="font-bold">{mine.slopeAngle}°</span></p>
                <p>Bench Height: <span className="font-bold">{mine.benchHeight} m</span></p>
                <p>
                  Risk Score: <span className="font-bold">{mine.riskScore}%</span>{" "}
                  <span className={`px-2 py-1 rounded-full text-sm ${getSeverityColor(mine.severity)}`}>
                    {mine.severity}
                  </span>
                </p>
              </div>
            ))}
          </section>

          {/* Risk Score Comparison Chart */}
          <section className="bg-gray-700 rounded-2xl shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Mine Risk Scores</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mineData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <XAxis dataKey="zone" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="riskScore" fill="#f87171" name="Risk Score (%)" />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AnalyticalTab;
