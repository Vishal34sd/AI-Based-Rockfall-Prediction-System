// src/components/Report.jsx
import React, { useState } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Report = () => {
  const [formData, setFormData] = useState({
    zone: "",
    issueType: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Issue:", formData);
    alert("Issue submitted successfully!");
    setFormData({ zone: "", issueType: "", description: "" });
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="text-2xl font-bold text-indigo-400 p-6">Rockfall AI</div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="/app/dashboard" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700">Map & Zones</a>
          <a href="/app/analytic" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700">Analytical Tab</a>
          <a href="/app/alerts" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700">Alert Tab</a>
          <a href="/app/report" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 bg-gray-700">Report Issue</a>
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

        {/* Report Issue Content */}
        <main className="p-6 overflow-auto flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-indigo-400 mb-8 text-center">Report an Issue</h1>

          <section className="bg-gray-700 rounded-2xl shadow-lg p-8 max-w-2xl w-full mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Zone Selection */}
              <div>
                <label className="block text-gray-300 mb-1">Select Zone</label>
                <select
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-400"
                  required
                >
                  <option value="">-- Choose Zone --</option>
                  <option value="Sector 1">Sector 1</option>
                  <option value="Sector 2">Sector 2</option>
                  <option value="Sector 3">Sector 3</option>
                  <option value="Sector 4">Sector 4</option>
                </select>
              </div>

              {/* Issue Type */}
              <div>
                <label className="block text-gray-300 mb-1">Issue Type</label>
                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-400"
                  required
                >
                  <option value="">-- Choose Issue Type --</option>
                  <option value="Rockfall Risk">Rockfall Risk</option>
                  <option value="Equipment Failure">Equipment Failure</option>
                  <option value="Weather Alert">Weather Alert</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-300 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-400"
                  placeholder="Provide details about the issue..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-bold"
              >
                Submit Issue
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Report;
