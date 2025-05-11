import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import PageTitle from "../Components/PageTitle";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        toast.success("You are logged In. successfully!", result.user.name)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login failed. Please try again.");
        console.log(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        toast.success("You are logIn with google. successfully!", result.user.name)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google login failed. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <PageTitle title={"Login"} />
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSingIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4 text-right">
            {/* ?email=${encodeURIComponent(enteredEmail)} */}
            <Link
              to={`/forget-password`}
              className="text-sm text-indigo-500 hover:text-indigo-600"
            >
              Forgot password?
            </Link>
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

        <button
          onClick={handleGoogleLogin}
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
