// src/LoginPage.jsx
import React, { useState } from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your auth logic
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-indigo-400 text-center mb-6">
          Rock-Shield AI Login
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Enter your credentials to access the dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:text-indigo-500 font-medium"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
