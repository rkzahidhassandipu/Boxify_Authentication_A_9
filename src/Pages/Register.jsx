import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* Registration Form */}
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700">Profile Photo URL</label>
            <input
              type="url"
              id="photoURL"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter a URL for your profile photo"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {/* Password Confirmation Input */}
          <div className="mb-4">
            <label htmlFor="passwordConfirm" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Confirm your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md mb-4"
          >
            Register
          </button>
        </form>

        <div className="flex justify-between items-center mb-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button
          className="w-full bg-red-500 text-white p-3 rounded-md"
        >
          Register with Google
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:text-indigo-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
