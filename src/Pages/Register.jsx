import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router"; // ✅
import { AuthContext } from "../context/AuthProvider"; // ✅
import { toast } from "react-toastify";
import PageTitle from "../Components/PageTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUserInfo, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);



  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

     // Password validation
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if(password.length < 6) {
      toast.error("Password must be 6 characters long.!");
      return;
    }
    if(!uppercasePattern.test(password)){
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if(!lowercasePattern.test(password)){
      toast.error("Password must contain at least one lowercase letter.");
      return
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
         toast.success("You are Sign In. successfully!", result.user.name)
        updateUserInfo({
            displayName: name, photoURL: photoURL
        }).then(() => {
            setUser({...user, displayName: name, photoURL: photoURL});
            navigate("/")
        }).catch((error) => {
            console.log(error)
        })
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg)
      });
  };


  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result => {
       toast.success("You are Sign In with Google. successfully!", result.user.name)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <PageTitle title={"Register"} />
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-indigo-600">
            Create Account
          </h2>
          <p className="text-gray-500 text-center">Join our subscription box community</p>
        </div>
        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700">
              Profile Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter a URL for your profile photo"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-3 mt-1 border rounded-md pr-10"
              placeholder="Enter your password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 text-gray-600 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>                  


          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md mb-4 cursor-pointer"
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
        <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-3 rounded-md cursor-pointer">
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
