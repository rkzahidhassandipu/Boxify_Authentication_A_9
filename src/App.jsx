import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
