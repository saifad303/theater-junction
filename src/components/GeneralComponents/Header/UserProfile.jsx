import React from "react";
import { useAuthProvider } from "../../../context/AuthProvider";

const UserProfile = () => {
  const { signOutProviderHandler } = useAuthProvider();
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
        <button
          onClick={signOutProviderHandler}
          className="block py-3 px-4 font-medium text-center text-white bg-[#CF1164] active:shadow-none rounded-lg shadow md:inline"
        >
          Sign out
        </button>
      </li>
    </div>
  );
};

export default UserProfile;
