import React from "react";
import SignInOut from "./SignInOut";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const Menu = () => {
  const navigate = useNavigate();

  const dashboardNavigateHandler = () => {
    navigate("/admin");
  };

  return (
    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 font-medium">
      <li className="text-gray-700 ">
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li className="text-gray-700">
        <ActiveLink to="/instructor">Instructors</ActiveLink>
      </li>
      <li className="text-gray-700 ">
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      <li className="text-gray-700 ">
        <button
          onClick={dashboardNavigateHandler}
          className="block hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-2 hover:border-[#F89A2E]"
        >
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
