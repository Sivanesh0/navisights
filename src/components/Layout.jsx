import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex flex-col justify-evenly bg-[url("/globe.jpg")]  bg-cover h-screen overflow-y-scroll'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
