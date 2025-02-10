import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <div className="flex">
     
      <div className="ml-60 w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Alumni Network</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl">
          Connect with alumni, explore career opportunities, collaborate on projects, participate in events, and support your alma mater.
        </p>
        <Link to="/get-started" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default LandingPage

