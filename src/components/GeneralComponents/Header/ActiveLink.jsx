import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block border-t-0 border-l-0 border-r-0 border-2 border-[#F89A2E]"
          : "block hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-2 hover:border-[#F89A2E]"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
