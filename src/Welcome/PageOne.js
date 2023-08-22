import React from "react";
import { Link } from "react-router-dom";
import myImage from "../3921.jpg";

const PageOne = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-20 sm:py-20 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Booking Fields
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Hello! You can find your ملعبك (field) here.
        </p>
        <div className="flex justify-center items-center mt-8">
          <img
            src={myImage}
            alt="Soccer Field"
            className="w-auto h-72 rounded-md shadow-md"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/signin"
            className="rounded-md bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo border border-indigo-400 shadow-sm hover:bg-indigo-500 hover:text-white  "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageOne;
