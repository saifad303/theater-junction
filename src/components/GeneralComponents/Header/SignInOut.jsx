import React from "react";
import { Link } from "react-router-dom";

const SignInOut = () => {
  return (
    <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
      <li>
        <Link
          to="/sign-in"
          className="block py-3 px-4 font-medium text-center text-white bg-[#CF1164]  active:shadow-none rounded-lg shadow md:inline"
        >
          Sign in
        </Link>
      </li>
    </div>
  );
};

export default SignInOut;
