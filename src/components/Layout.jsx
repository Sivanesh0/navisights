import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { auth } from "../../firebaseConfig";

const Layout = () => {
  const location = useLocation();
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user && location.pathname === "/profile") {
        navigate("/login");
      }
      if (
        user &&
        user.emailVerified &&
        (location.pathname === "/login" || location.pathname === "/signup")
      ) {
        navigate("/profile");
      }
      if (user && !user.emailVerified) auth.signOut();
    });
  }, []);

  return (
    <div
      ref={ref}
      className='flex flex-col justify-evenly bg-black h-screen overflow-y-scroll'>
      <Chatbot />
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
