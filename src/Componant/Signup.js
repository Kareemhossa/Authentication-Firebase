import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Contextapi/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        // Handle email already in use error
        console.error("Email is already in use.");
      } else {
        // Handle other errors
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" w-full max-w-[450px] mx-auto flex-col justify-center px-12 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form className="space-y-4" onSubmit={handelSubmit}>
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
            onClick={handelSubmit}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 mb-8  rounded-md hover:bg-indigo-500"
          >
            Sign Up
            {/*<Link to="/account ">Sign Up</Link>*/}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
