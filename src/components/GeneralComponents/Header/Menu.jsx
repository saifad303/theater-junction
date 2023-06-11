import React from "react";
import SignInOut from "./SignInOut";
import UserProfile from "./UserProfile";
import { useLocation, useNavigate } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useAuthProvider } from "../../../context/AuthProvider";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signedInUser } = useAuthProvider();

  const admin = location.pathname.split("/")[1];

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
      {signedInUser && (
        <li className="text-gray-700 ">
          <button
            onClick={dashboardNavigateHandler}
            className={`block hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-2 hover:border-[#F89A2E] border-2  border-l-0 border-r-0 border-t-0 ${
              admin === "admin" ? "border-[#F89A2E]" : "border-b-0"
            }`}
          >
            Dashboard
          </button>
        </li>
      )}

      <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
      {signedInUser ? <UserProfile></UserProfile> : <SignInOut></SignInOut>}
      {/* <UserProfile></UserProfile> */}
    </ul>
  );
};

export default Menu;
