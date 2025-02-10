import React from 'react'
import { Outlet } from 'react-router'
import LandingPage from './pages/LandingPage'
import Navbar from './pages/Navbar'
function Layout() {
  return (
    
    <>
     <Navbar />
    <Outlet/>
    
    
    </>
  )
}

export default Layout