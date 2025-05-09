import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {/* Email and Password Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md mb-4"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mb-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          className="w-full bg-red-500 text-white p-3 rounded-md"
        >
          Login with Google
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:text-indigo-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
