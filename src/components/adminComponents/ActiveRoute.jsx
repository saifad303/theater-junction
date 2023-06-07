import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center p-2 text-gray-900 rounded-lg  bg-gray-100"
          : "flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
