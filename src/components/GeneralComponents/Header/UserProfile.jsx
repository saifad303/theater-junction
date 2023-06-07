import React from "react";

const UserProfile = () => {
  return (
    <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
      <li>
        <button className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600">
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
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

export default UserProfile;
