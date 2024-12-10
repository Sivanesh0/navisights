import {
  BoxIcon,
  HouseIcon,
  InfoIcon,
  HeartHandshakeIcon,
  AwardIcon,
  MenuIcon,
  XIcon,
  UserRoundPlusIcon,
  LogInIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setLinks([
          {
            path: "/",
            name: "Home",
            icon: <HouseIcon strokeWidth={1} />,
          },
          {
            path: "/services",
            name: "Services",
            icon: <HeartHandshakeIcon strokeWidth={1} />,
          },
          {
            path: "/product",
            name: "Product",
            icon: <BoxIcon strokeWidth={1} />,
          },
          {
            path: "/about",
            name: "About",
            icon: <InfoIcon strokeWidth={1} />,
          },
          {
            path: "/achievements",
            name: "Achievements",
            icon: <AwardIcon strokeWidth={1} />,
          },
          {
            path: "/profile",
            name: "My Profile",
            icon: <LayoutDashboardIcon strokeWidth={1} />,
          },
        ]);
      } else {
        setLinks([
          {
            path: "/",
            name: "Home",
            icon: <HouseIcon strokeWidth={1} />,
          },
          {
            path: "/services",
            name: "Services",
            icon: <HeartHandshakeIcon strokeWidth={1} />,
          },
          {
            path: "/product",
            name: "Product",
            icon: <BoxIcon strokeWidth={1} />,
          },
          {
            path: "/about",
            name: "About",
            icon: <InfoIcon strokeWidth={1} />,
          },
          {
            path: "/achievements",
            name: "Achievements",
            icon: <AwardIcon strokeWidth={1} />,
          },
          {
            path: "/signup",
            name: "Sign Up",
            icon: <UserRoundPlusIcon strokeWidth={1} />,
          },
          {
            path: "/login",
            name: "Log In",
            icon: <LogInIcon strokeWidth={1} />,
          },
        ]);
      }
    });
  }, []);

  return (
    <div className='sticky top-0 bg-black/70 md:bg-black/90 z-30 w-full flex flex-col md:flex-row md:items-center md:justify-around text-white'>
      <div
        onClick={() => setOpen(!open)}
        className='absolute top-4 right-4 md:hidden text-white z-30'>
        {open ? <XIcon /> : <MenuIcon />}
      </div>
      <div className='p-4'>
        <img src='/logo.png' className='w-1/2 md:w-40' alt='Navisights' />
      </div>
      <div
        className={`w-full md:w-auto z-20 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 absolute md:relative md:flex md:flex-row px-4 py-8 md:justify-center space-y-2 md:space-y-0 md:gap-6 font-raleway text-sm md:text-xl text-white bg-background md:bg-transparent`}>
        {links.map((link, index) => {
          if (
            (link.name === "Sign Up" || link.name === "Log In") &&
            auth.currentUser
          )
            return null;
          if (link.name == "My Profile" && !auth.currentUser) return null;
          return (
            <NavLink
              className={({ isActive }) =>
                `hover:text-transparent hover:font-bold flex items-center gap-4 ${
                  isActive && "text-transparent font-bold"
                } bg-gradient-to-tr from-purple-800 to-red bg-clip-text transition-all duration-150 ease-in`
              }
              onClick={() => setOpen(false)}
              key={index}
              to={link.path}>
              <span className='text-white md:hidden'>{link.icon}</span>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
