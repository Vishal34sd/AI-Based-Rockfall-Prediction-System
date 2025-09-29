// src/components/Alerts.jsx
import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Alerts = () => {
  const alertsData = [
    { id: 1, message: "High rockfall risk detected in Sector 1", severity: "High", time: "2025-09-29 09:30" },
    { id: 2, message: "Moderate risk in Sector 3 due to slope angle", severity: "Medium", time: "2025-09-29 08:45" },
    { id: 3, message: "Low risk zone 5 monitoring updated", severity: "Low", time: "2025-09-28 18:20" },
    { id: 4, message: "High rainfall alert in Sector 2", severity: "High", time: "2025-09-28 16:10" },
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
          <a href="/app/dashboard" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700">Map & Zones</a>
          <a href="/app/analytic" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700">Analytical Tab</a>
          <a href="/app/alerts" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 bg-gray-700">Alert Tab</a>
          <a href="/app/report" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700">Report Issue</a>
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

        {/* Alerts Content */}
        <main className="p-6 overflow-auto flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-indigo-400 mb-6">Alerts</h1>

          <section className="grid md:grid-cols-2 gap-6">
            {alertsData.map((alert) => (
              <div key={alert.id} className="bg-gray-700 rounded-2xl shadow-lg p-6 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-2 py-1 rounded-full text-white text-sm ${getSeverityColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                  <span className="text-gray-300 text-sm">{alert.time}</span>
                </div>
                <p className="text-lg">{alert.message}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Alerts;
