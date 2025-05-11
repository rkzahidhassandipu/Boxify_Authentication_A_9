import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>

      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
