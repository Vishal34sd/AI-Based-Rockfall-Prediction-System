import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from './components/LoginPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import Dashboard from './components/DashBoard.jsx'
import AnalyticalTab from './components/AnalyticalTab.jsx'
import LandingPage from './components/LandingPage.jsx'
import Alerts from './components/Alerts.jsx'
import Report from './components/Report.jsx'
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/login", 
    element: <LoginPage />
  },
  {
    path: "/register", 
    element: <RegisterPage />
  },
  {
    path: "/dashboard", 
    element: <Dashboard />
  },
  {
    path: "/analytic", 
    element: <AnalyticalTab />
  },
  {
    path: "/alert", 
    element: <Alerts />
  },
  {
    path: "/report", 
    element: <Report />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)  