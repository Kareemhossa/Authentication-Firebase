import React from "react";
import { UserAuth } from "../Contextapi/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="max-w-[600px] mx-auto text-center my-16 p-4">
      <h1 className="text-2xl font-bold py-4"> Account</h1>
      <p>User Name : {user && user.email} </p>
      <button
        onClick={handelLogout}
        className=" px-6 py-2 my-4 bg-indigo-600 text-white  rounded-md hover:bg-indigo-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
