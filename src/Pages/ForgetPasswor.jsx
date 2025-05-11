import React, { useEffect, useState, useContext } from "react";
import PageTitle from "../Components/PageTitle";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const defaultEmail = searchParams.get("email") || "";
    setEmail(defaultEmail);
  }, [searchParams]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.warning("Please enter your email");
    }

    try {
      await resetPassword(email);
      toast.success("Reset email sent. Check your inbox.");
      setEmail("");
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <PageTitle title="Forget Password" />
      {/* {
        message && toast.message(message)
      }
      {
        
        error && toast.message(error)
      } */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
