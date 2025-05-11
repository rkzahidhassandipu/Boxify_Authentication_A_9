import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      {/* Navbar will be visible on all pages */}
      <Navbar />

      {/* Main content area where the child routes are rendered */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer will be visible on all pages */}
      <Footer />
    </div>
  );
}

export default App
