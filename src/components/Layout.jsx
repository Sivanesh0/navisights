import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// bg-[url("/globe.jpg")]  bg-cover
const Layout = () => {
  return (
    <div className='flex flex-col justify-evenly bg-black h-screen overflow-y-scroll'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
