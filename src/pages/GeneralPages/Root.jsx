import React from "react";
import NavBar from "../../components/GeneralComponents/Header/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/GeneralComponents/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
