import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Contextapi/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, googleSignIn, githubSignIn } = UserAuth();

  //handelsubmit with emali
  const handelSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      navigate("/account");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use.");
      } else {
        setError("Error signing in. Please check your credentials.");
      }
    }
    setLoading(false);
  };

  //handelsubmit with GOOGLE
  const handlegoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/account"); // Redirect after successful login
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  //handelsubmit with GITHUB
  const handelgithubSignIn = async () => {
    try {
      await githubSignIn();
      navigate("/account"); // Redirect after successful login
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" w-full max-w-[450px] mx-auto flex-col justify-center px-12 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Sign In to your Account
        </h2>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {error}
          </div>
        )}
        <form onSubmit={handelSubmitSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
            </div>
            <div>
              <Link to="/forgot-password" className="text-indigo-600">
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            onClick={handelSubmitSignIn}
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center">Or sign up with:</p>
          <div className="flex justify-center mt-2">
            <button
              onClick={handlegoogleSignIn}
              className="bg-red-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-500"
            >
              Google
            </button>
            <button
              // onClick={handleGithubLogin}
              onClick={handelgithubSignIn}
              className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2 hover:bg-gray-700"
            >
              GitHub
            </button>
          </div>
        </div>
        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/signup" className="text-indigo-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
