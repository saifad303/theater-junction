import React from "react";

const SignInOut = () => {
  return (
    <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
      <li>
        <a
          href=""
          className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
        >
          Log in
        </a>
      </li>
      <li>
        <a
          href=""
          className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
        >
          Sign in
        </a>
      </li>
    </div>
  );
};

export default SignInOut;
