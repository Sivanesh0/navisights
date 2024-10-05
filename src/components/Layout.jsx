import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex flex-col justify-evenly'>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
