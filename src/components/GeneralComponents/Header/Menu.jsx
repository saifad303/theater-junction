import React from "react";
import SignInOut from "./SignInOut";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const dashboardNavigateHandler = () => {
    navigate("/admin");
  };

  return (
    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
      <li className="text-gray-700 hover:text-indigo-600">
        <a href="" className="block">
          Home
        </a>
      </li>
      <li className="text-gray-700 hover:text-indigo-600">
        <a href="" className="block">
          Instructor
        </a>
      </li>
      <li className="text-gray-700 hover:text-indigo-600">
        <a href="" className="block">
          Classes
        </a>
      </li>
      <li className="text-gray-700 hover:text-indigo-600">
        <button onClick={dashboardNavigateHandler} className="block">
          Dashboard
        </button>
      </li>

      <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
      <SignInOut></SignInOut>
      {/* <UserProfile></UserProfile> */}
    </ul>
  );
};

export default Menu;
