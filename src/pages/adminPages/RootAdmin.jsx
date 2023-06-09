import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Menu from "../../components/adminComponents/Menu";
import Header from "../../components/GeneralComponents/Header/NavBar";
import { useAuthProvider } from "../../context/AuthProvider";

const RootAdmin = () => {
  const [isProfileShow, setIsProfileShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <Header></Header>
      </nav>

      <div className=" pt-8 overflow-y-auto">
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-28 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
            <Menu></Menu>
          </div>
        </aside>

        {/* main start */}
        <Outlet></Outlet>
        {/* main end */}
      </div>
    </div>
  );
};

export default RootAdmin;
