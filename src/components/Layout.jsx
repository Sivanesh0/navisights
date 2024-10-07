import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Chatbot from "./Chatbot";

const Layout = () => {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return (
    <div
      ref={ref}
      className='flex flex-col relative justify-evenly bg-black h-screen overflow-y-scroll'>
      <Chatbot />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
